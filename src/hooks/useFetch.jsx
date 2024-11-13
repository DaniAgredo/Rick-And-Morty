import { useState } from 'react';
import axios from 'axios';

function useFetch() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);

	function dataFetch(url) {
		setLoading(true);
		axios
			.get(url)
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				setLoading(false);
			});
	}
	return [data, dataFetch, error, loading];
}

export default useFetch;
