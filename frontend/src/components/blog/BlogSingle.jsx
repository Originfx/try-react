import React from "react";
import { useParams } from "react-router-dom";

import  "./style.css";

const BlogSingle = () => {
	let params = useParams();
	console.log(params)
	return (
		<>
			<section className="blog__single">
				<div className="wrapper">
					<div className="blog__more" method="post">
						<textarea></textarea>
						
						<div className="blog__more-item">
							<p>Полный адрес</p>
							<span>{params.id}</span>
						</div>
						<div className="blog__more-item">
							<p>Сокращенный вариант</p>
							<span></span>
						</div>
						<div className="blog__more-item">
							<p>Переходы</p>
							<span></span>
						</div>
						<div className="blog__more-item">
							<p>До удаления</p>
							<span></span>
						</div>
						<input type="submit" name="delete-link" value="Удалить ссылку" />

					</div>
				</div>
			</section>
		</>
	);
}

export default BlogSingle;