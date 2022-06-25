const PostItem = (props) => {

	return (
		<div className="post__item">
			<strong>{props.item.id}. {props.item.title}</strong>
			<p>{props.item.content}</p>
		</div>
	);
}

export default PostItem;