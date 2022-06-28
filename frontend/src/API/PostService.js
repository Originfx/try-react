import axios from "axios";

export default class PostService {
	static getAll = async () => {
		try {
			// Подключение
			let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
			return response.data;
		} catch (err) {
			console.log(err);
		}
	}
}