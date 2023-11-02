import React, { FormEvent, useState } from 'react';
import classes from './search.module.css'
import Job from '../../components/Job.tsx';
import { getJobs } from '../../API/jobService.ts';

export interface IJob {
	img: string;
	companyName: string;
	title:string;
	id: string;
	description: string;
}

function Search() {
	const [jobs, setJobs] = useState<IJob[]>([]);
	const [value, setValue] = useState('');

	function handleChange(event: FormEvent<HTMLInputElement>) {
		event.preventDefault();
		setValue(event.currentTarget.value);
	}
	// useEffect(async () => {
	// 	console.log(await getJobs())
	// }, [])
	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const response = await getJobs(value);
		if (response.status) {
			setJobs(Array.from(response.data).map((el) => ({
				img: el.employer_logo,
				companyName: el.employer_name,
				title: el.job_title,
				id: el.job_id,
				description: el.job_description,
			} as IJob)));
		}
	}

	return (
		<>
			<form className={classes.searchForm} name='search params' onSubmit={handleSubmit}>
				<input 
					type='text'
					value={value}
					placeholder='поиск...'
					name='job'
					onChange={handleChange}
				/>
				<button name='search params' type='submit'>отправить</button>
			</form>
			<div className={classes.mainContainer} >
				{Array.from(jobs).map((job) => (
					<Job 
						job={job} 
						key={job.id} 
					/>
				))}
			</div>
		</>
	);
}

export default Search;