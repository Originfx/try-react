import React from "react";
import { Link } from "react-router-dom";

const BlogPost = ({remove, posts}) => {
	return (
		<>
			<div className="blog__list">
				{!posts.length && <p>Посты не найдены.</p>}
				{posts.map((el,i) => (
					<ul key={el.id}>
						<li>
							<Link to={`${el.id}`}>{el.id}. {el.title}</Link>
						</li>
						<li>
							<button onClick={() => remove(el.id)}>–</button>
						</li>
					</ul>
				))}
			</div>
		</>
	);
}

export default BlogPost;