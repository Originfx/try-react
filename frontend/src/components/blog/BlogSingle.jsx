import React from "react";
import { Link, useParams } from "react-router-dom";

const BlogSingle = () => {
	// Хук - Получение параметров из адресной строки
	let params = useParams();

	return (
		<>
			<section className="blog">
				<div className="wrapper">
					<div className="blog__more" method="post">
						<textarea
							value={`Post ID: ${params.id}`}
							onInput={e => e.preventDefault}
							disabled />
						<Link to={`/blog/${+params.id + 1}`}>Следующий пост</Link>
					</div>
				</div>
			</section>
		</>
	);
}

export default BlogSingle;