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
			<div className="blog__title">
				<input
					value={post.title}
					onChange={e => setPost({...post, title: e.target.value})}
					type="text"
					placeholder="Название" />
			</div>

			<div className="blog__desc">
				<input
					value={post.body}
					onChange={e => setPost({...post, body: e.target.value})}
					type="text"
					placeholder="Описание" />
				<i
					className="icon icon-go"
					onClick={newPost} />
			</div>

		</>
	);
}

export default BlogPost;