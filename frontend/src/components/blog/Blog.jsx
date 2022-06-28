import React, { useEffect, useState } from "react";

import PostService from "../../API/PostService";
import BlogPost from "./BlogPost";
import BlogForm from "./BlogForm";

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

	useEffect(() => {
		getPosts();
	}, [])

	return (
		<>
			<section className="blog">
				<div className="wrapper">
					<BlogForm create={createPost} />
					<label>Список постов:</label>
					<BlogPost remove={removePost} posts={posts}/>
					{loading ? <p>Загрузка...</p> : null}
					<button className="blog__clear">Очистить список</button>
				</div>
			</section>
		</>
	);
}

export default Blog;