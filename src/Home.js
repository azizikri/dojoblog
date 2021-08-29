import { useState } from 'react';
import BlogList from "./BlogList";


const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: 'hello world', body: 'Test', author: 'azizikri', id: 1 },
		{ title: 'hello world1', body: 'Test', author: 'azizikri', id: 2 },
		{ title: 'hello world2', body: 'Test', author: 'azizikri', id: 3 },
		{ title: 'hello world3', body: 'Test', author: 'bruh', id: 4 },
	]);

	const handleDelete = (id) => {
		const newBlog = blogs.filter(blog => blog.id !== id);
		setBlogs(newBlog);
	}

	return (
		<div className='home'>
			<BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
			{/* <BlogList blogs={blogs.filter((blog) => blog.author === 'azizikri')} title="azizikri's Blogs" /> */}
		</div>
	);
};

export default Home;
