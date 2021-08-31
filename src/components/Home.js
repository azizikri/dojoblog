import useAxios from "../hook/useAxios";
import useFetch from '../hook/useFetch';
import BlogList from './BlogList';

const Home = () => {
	// const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');
	const { data: blogs, isLoading, error } = useAxios('http://localhost:8000/blogs');


	return (
		<div className='home'>
			{isLoading && <div>Loading...</div>}
			<BlogList blogs={blogs} title='All Blogs!' />
			{error && <div>{error}</div>}
		</div>
	);
};

export default Home;
