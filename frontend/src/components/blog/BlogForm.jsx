import React, { useState } from "react";

const BlogPost = ({create}) => {

	let [post, setPost] = useState({title: "", body: ""});

	const newPost = (e) => {
		e.preventDefault();
		create({...post, id: Date.now()})
		setPost({title: "", body: ""});
	}

	return (
		<>
			<input
				value={post.title}
				onChange={e => setPost({...post, title: e.target.value})}
				type="text"
				placeholder="Название" />

			<input
				value={post.body}
				onChange={e => setPost({...post, body: e.target.value})}
				type="text"
				placeholder="Описание" />

			<button onClick={newPost}>Создать</button>
		</>
	);
}

export default BlogPost;