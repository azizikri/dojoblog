import { useParams } from 'react-router';
import useFetch from '../hook/useFetch';
import useAxios from '../hook/useAxios';


const BlogDetails = () => {
	const { id } = useParams();
	// const {
	// 	data: blog,
	// 	error,
	// 	isLoading,
	// } = useFetch(`http://localhost:8000/blogs/${id}`);

	const {
		data: blog,
		isLoading,
		error,
	} = useAxios(`http://localhost:8000/blogs/${id}`);


	return (
		<div className='blog-details'>
			{isLoading && <div>Loading...</div>}

			<article>
				<h2>{blog.title}</h2>
				<p>{blog.author && 'Written by ' + blog.author}</p>
				<div>{blog.body}</div>
			</article>

			{error && <div>{error}</div>}
		</div>
	);
};

export default BlogDetails;
