import React from "react";

const BlogPost = ({remove, posts}) => {
	return (
		<>
			{posts.map((el,i) => 
				<div className="post__item" key={el.id}>
					<strong>{el.id}. {el.title}</strong>
					<p>{el.body}</p>
					<button onClick={() => remove(el.id)}>Удалить</button>
				</div>
			)}
		</>
	);
}

export default BlogPost;