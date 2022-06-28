import React from "react";

import  "./style.css";

const BlogSingle = () => {
	return (
		<>
			<section className="blog">
				<div className="wrapper">
					<div className="blog__more" method="post">
						<textarea></textarea>
						
						<div className="blog__more-item">
							<p>Полный адрес</p>
							<span></span>
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