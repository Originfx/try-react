import React, { useEffect, useState } from "react";

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

	const sortedPost = ({search, sort}) => {
		let x = sort === 'id'
			? [...posts].sort((a, b) => a[sort] - b[sort])
			: [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
			console.log(x)
		setPost(x.filter(post => post.title.toLowerCase().includes(search.toLowerCase())))
	}

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
					<label>Список постов:</label>
					<BlogFilter sort={sortedPost}/>
					<BlogPost remove={removePost} posts={posts}/>
					{loading ? <p>Загрузка...</p> : null}
					<button className="blog__clear" onClick={removeAll}>Очистить список</button>
				</div>
			</section>
		</>
	);
}

export default Blog;