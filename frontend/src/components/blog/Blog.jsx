import React, { useEffect, useMemo, useState } from "react";

import PostService from "../../API/PostService";
import BlogPost from "./BlogPost";
import BlogForm from "./BlogForm";
import BlogFilter from "./BlogFilter"

import  "./style.css";

const Blog = () => {
	let [posts, setPost] = useState([]);
	let [loading, setLoading] = useState(false);

	const getPosts = async () => {
		setLoading(true);
		let result = await PostService.getAll();
		setPost(result);
		setLoading(false);
	}

	const createPost = (newItem) => {
		setPost([...posts, newItem]);
	}

	const removePost = (key) => {
		setPost(posts.filter(el => el.id !== key));
	}

	let [filter, setFilter] = useState({search: "", sort: ""});

	const sortedPost = ({search, sort}) => {
		setFilter({search: search, sort: sort})
	}

	const memoFilter = useMemo(() => {
		if (filter.sort) {
			let x = filter.sort === 'id'
			? [...posts].sort((a, b) => a[filter.sort] - b[filter.sort])
			: [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
			return x;
		}
		return posts;
	}, [filter.sort, posts])

	const memoPosts = useMemo(() => {
		return memoFilter.filter(post => post.title.toLowerCase().includes(filter.search.toLowerCase()))
	}, [filter.search, memoFilter])

	const removeAll = () => {
		setPost([]);
	}

	useEffect(() => {
		getPosts();
	}, [])

	return (
		<>
			<section className="blog">
				<div className="wrapper">
					<label>Новый пост</label>
					<BlogForm create={createPost} />
					<label>Список постов</label>
					<BlogFilter sort={sortedPost}/>
					<BlogPost remove={removePost} posts={memoPosts}/>
					{loading ? <p>Загрузка...</p> : null}
					<button className="blog__clear" onClick={removeAll}>Очистить список</button>
				</div>
			</section>
		</>
	);
}

export default Blog;