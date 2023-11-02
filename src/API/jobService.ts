import axios from 'axios';

const URL = 'https://jsearch.p.rapidapi.com/search';

export async function getJobs(query: string) {
	try {
		const response = await axios.get(URL, {
			params: {
				query,
				page: '1',
				num_pages: '1'
			},
			headers: {
				'X-RapidAPI-Key': '07216fe331mshc9944635c0f7855p1ba2c1jsn5c5df621e4df',
				'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
			}
		});
		return(response.data);
	} catch (error) {
		return(error);
	}
}