import React from "react";
import PostItem from "./item";

import "./style.css";

const Blog1 = () => {
	let [items, setItems] = React.useState([
		{id: 1, title: "DSD vs DSF vs DFF Files Audio", content: "DSD (Direct Stream Digital) is one bit audio format for high resolution music. The format based on sigma delta modulation."},
		{id: 2, title: "What is Audio Formats DSD 2.8", content: "DSD (Direct Stream Digital) 1-bit audio format. It may be packed to audio files with extensions."},
		{id: 3, title: "What Inside DSD Converter of Audio Files", content: "Format DSD is implementation of sigma-delta modulation."},
		{id: 4, title: "How to sigma delta modulation works in audio", content: "Sigma delta modulation for high resolution audio it's 1-bit (digital) stream of 0 and 1."},
		{id: 5, title: "DSD Decoder for Audio", content: "DSD is 1-bit high resolution audio stream. Unlike traditional PCM, DSD has minimal bit depth with higher sample rate and sigma-delta modulated stream."},
	]);

	return (
		<section className="blog">
			<div className="wrapper">
				<h2>Список постов:</h2>
				{items.map(el => 
					<PostItem item={el} key={el.id}/>
				)}
			</div>
		</section>
	);
}

export default Blog1;