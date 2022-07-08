import React, { useState } from "react";

import Icons from "../Icons";

const BlogPost = ({create}) => {

	let [post, setPost] = useState({title: "", body: ""});

	const newPost = (e) => {
		e.preventDefault();
		create({...post, id: Date.now()})
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