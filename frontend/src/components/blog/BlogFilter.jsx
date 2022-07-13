import React, { useEffect, useState } from "react";

const BlogFilter = ({sort}) => {
	// Данные фильтрации
	let [filter, setFilter] = useState({search: "", sort: "id"});

	// Хук эффекта - Изменение данных фильтра
	useEffect(() => {
		// Функция обратного вызова
		sort(filter); 
	}, [filter]) // eslint-disable-line

	return (
		<>
			<div className="blog__filter">
				<input
					value={filter.search}
					onChange={e => setFilter({...filter, search: e.target.value})}
					type="text"
					placeholder="Найти" />
				<select onChange={e => setFilter({...filter, sort: e.target.value})}>
					<option key="id" value="id">По порядку</option>
					<option key="title" value="title">По имени</option>
				</select>
			</div>
		</>
	);
}

export default BlogFilter;