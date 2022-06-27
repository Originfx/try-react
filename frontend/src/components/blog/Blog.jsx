import React, { useEffect, useState } from "react";
import axios from "axios";

import PostItem from "./BlogPost";

import "./style.css";

const Blog = () => {
	let [items, setItems] = useState([]);
	let [loading, setLoading] = useState(false);

	const getPosts = async () => {
		setLoading(true);
		let response = await axios.get("https://jsonplaceholder.typicode.com/posts")
		setItems(response.data);
		setLoading(false);
	}

	useEffect(() => {
		getPosts();
	}, [])

	return (
		<>
			<section className="blog">
				<div className="wrapper">
					<h2>Список постов:</h2>
					{items.map(el => 
						<PostItem item={el} key={el.id}/>
					)}
					{loading ? <p>Загрузка...</p> : null}
				</div>
			</section>
		</>
	);
}

export default Blog;