import axios from 'axios';
import { useState } from 'react';

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('bipo');
	const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	const blog = { title, body, author };

	// 	setIsLoading(true);

	// 	fetch('http://localhost:8000/blogs', {
	// 		method: 'POST',
	// 		headers: { 'Content-Type': 'application/json' },
	// 		body: JSON.stringify(blog),
	// 	}).then(() => {
	// 		setIsLoading(false);
	// 	});

	// };

	const handleSubmit = async (e) => {
		e.preventDefault();
		const blog = { title, body, author };

		setIsLoading(true);

		return axios
			.post('http://localhost:8000/blogs', {
				title: title,
				body: body,
				author: author,
			})
			.then(() => {
				setIsLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setIsLoading(false);
			});
	};

	return (
		<div className='create'>
			<h2>Add new Blog</h2>
			{error && <div>{error}</div>}
			<form onSubmit={handleSubmit}>
				<label>Blog Title: </label>
				<input
					type='text'
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Blog Body: </label>
				<textarea
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>
				<label>Blog Author: </label>
				<select value={author.name} onChange={(e) => setAuthor(e.target.value)}>
					<option value='bipo'>bipo</option>
					<option value='cipo'>cipo</option>
				</select>
				{!isLoading && <button>Add Blog</button>}
				{isLoading && <button disabled>Adding Blog...</button>}
			</form>
		</div>
	);
};

export default Create;
