import React, { useState } from "react";

// Импорт компонента - Иконки
import Icons from "../Icons";

const BlogPost = ({create}) => {
	// Данные для создания поста
	let [post, setPost] = useState({title: "", body: ""});

	// Создать пост
	const newPost = (e) => {
		// Отлючить действие по умолчанию
		e.preventDefault();
		// Функция обратного вызова
		create({...post, id: Date.now()})
		// Сбросить данные создания поста
		setPost({title: "", body: ""});
	}

	return (
		<>
			<div className="blog__add">
				<div className="blog__title">
					<input
						value={post.title}
						onChange={e => setPost({...post, title: e.target.value})}
						type="text"
						placeholder="Название" />
				</div>

				<div className="blog__desc">
					<textarea
						value={post.body}
						onChange={e => setPost({...post, body: e.target.value})}
						rows="10"
						placeholder="Описание" />
					<Icons name="icon-go" onClick={newPost} />
				</div>
			</div>
		</>
	);
}

export default BlogPost;