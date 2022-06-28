import React, { useEffect, useState } from "react";

import PostService from "../../API/PostService";
import BlogPost from "./BlogPost";
import BlogForm from "./BlogForm";

import classes from "./Blog.module.css";

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
		console.log(key)
		setPost(posts.filter(el => el.id !== key));
	}

	useEffect(() => {
		getPosts();
	}, [])

	return (
		<>
			<section className={classes.blog}>
				<div className="wrapper">
					<BlogForm create={createPost} />
					<h2>Список постов:</h2>
					<BlogPost remove={removePost} posts={posts}/>
					{loading ? <p>Загрузка...</p> : null}
				</div>
			</section>
		</>
	);
}

export default Blog;