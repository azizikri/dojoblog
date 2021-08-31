import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		let isCancelled = false;

		const getBlogs = async () => {
			try {
				let response = await axios.get(url);
				if (!isCancelled) {
					setData(response.data);
				}
			} catch (e) {
				if (!isCancelled) {
					setError(e);
				}
			} finally {
				if (!isCancelled) {
					setIsLoading(false);
				}
			}
		};

		getBlogs();

		return () => {
			isCancelled = true;
		};
	}, [url]);

	return {
		data,
		isLoading,
		error,
	};
};

export default useAxios;