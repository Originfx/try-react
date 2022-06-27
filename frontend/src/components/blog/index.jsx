import React, { useEffect } from "react";
import axios from "axios";

import PostItem from "./item";

import "./style.css";

const Blog = () => {
	let [items, setItems] = React.useState([]);
	
	const getPosts = async () => {
		let response = await axios.get("https://jsonplaceholder.typicode.com/posts")
		setItems(response.data);
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
				</div>
			</section>
		</>
	);
}

export default Blog;