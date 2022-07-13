import React from "react";
import { useParams } from "react-router-dom";

// Импорт стилей компонента
import  "./style.css";

const BlogSingle = () => {
	 // Хук - Получение параметров из адресной строки
	let params = useParams();
	
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