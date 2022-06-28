import React from "react";
import { Link } from "react-router-dom";

const BlogPost = ({remove, posts}) => {
	return (
		<>
			{posts.map((el,i) => (
				<div className="blog__history" key={el.id}>
					<Link to={`${el.id}`}>{el.id}. {el.title}</Link>
					<button onClick={() => remove(el.id)}>–</button>
				</div>
			))}
		</>
	);
}

export default BlogPost;