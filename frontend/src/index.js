import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Time from './components/time/Time';
import Blog from './components/blog/Post';

const root = ReactDOM.createRoot(document.getElementById('root'));
const time = ReactDOM.createRoot(document.getElementById('dateTime'));
//const blog = ReactDOM.createRoot(document.getElementById('blog'));


root.render(
	<App />,
);

time.render(
	<Time />,
);

// blog.render(
// 	<Blog />,
// );