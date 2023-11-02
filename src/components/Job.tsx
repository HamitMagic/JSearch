import React from 'react';
import classes from './components.module.css';
import { IJob } from '../pages/Search/Search.tsx';

interface IProps {
	job: IJob
}

function Job({job}:IProps) {
	return (
		<div className={classes.jobContainer}>
			<div className={classes.left}>
				<span className={classes.companyLogo}>
					<img className={classes.companyLogo} src={job.img} alt={job.companyName} />
				</span>
				<span className={classes.companyName} >
					{job.companyName}
				</span>
			</div>
			<div className={classes.right}>
				<span className={classes.jobTitle} >
					{job.title}
				</span>
				<div className={classes.wrapper}>
					<span title={job.description} className={classes.jobDescription} >
						{job.description}
					</span>
				</div>
			</div>
		</div>
	);
}

export default Job;