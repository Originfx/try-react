import React, { useEffect, useMemo, useState } from "react";

// Импорт API
import PostService from "../../API/PostService";

// Импорт отдельных частей компонента
import BlogPost from "./BlogPost";
import BlogForm from "./BlogForm";
import BlogFilter from "./BlogFilter"

// Импорт пользовательских хуков
import { useFetching } from "../../hooks/useFetching";

// Импорт стилей компонента
import "./style.css";


const Blog = () => {
	// Список постов
	let [posts, setPost] = useState([]);
	// Данные фильтрации
	let [filter, setFilter] = useState({search: "", sort: ""});

	// Получить список постов от сервера
	const [getPosts, isLoading] = useFetching( async () => {
		// Запрос
		let result = await PostService.getAll();
		// Задать полученные списки постов
		setPost(result);
	})

	// Создание поста
	const createPost = (newItem) => {
		setPost([...posts, newItem]);
	}

	// Удалить пост
	const removePost = (key) => {
		setPost(posts.filter(el => el.id !== key));
	}

	// Фильтрация списка постов
	const sortedPost = ({search, sort}) => {
		setFilter({search: search, sort: sort})
	}

	// Хук памяти - Фильтрация постов
	const memoFilter = useMemo(() => {
		// Если есть значение сортировки постов
		if (filter.sort) {
			// Определение типа
			let x = filter.sort === 'id'
				// Сортировать как number
				? [...posts].sort((a, b) => a[filter.sort] - b[filter.sort])
				// Сортировать как string
				: [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
			// Вернуть отсортированные посты
			return x;
		}
		// Вернуть посты без сортировки
		return posts;
	}, [filter.sort, posts])

	// Хук памяти - Поиск постов
	const memoPosts = useMemo(() => {
		// Вернуть отфильтрованные посты содержащие искомое слово в заголовках
		return memoFilter.filter(post => post.title.toLowerCase().includes(filter.search.toLowerCase()))
	}, [filter.search, memoFilter])

	// Очистить список постов
	const removeAll = () => {
		setPost([]);
	}

	// Хук эффекта - Один раз
	useEffect(() => {
		// Получить список постов от сервера
		getPosts();
	}, []) // eslint-disable-line

	return (
		<>
			<section className="blog">
				<div className="wrapper">
					<label>Новый пост</label>
					<BlogForm create={createPost} />
					<label>Список постов</label>
					<BlogFilter sort={sortedPost}/>
					<BlogPost remove={removePost} posts={memoPosts}/>
					{isLoading ? <p>Загрузка...</p> : null}
					<button className="blog__clear" onClick={removeAll}>Очистить список</button>
				</div>
			</section>
		</>
	);
}

export default Blog;