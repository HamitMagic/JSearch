import { STATUS, USER } from '../consts/constants.ts';
import { IUser } from '../mobx/authStore.ts';

export function auth(user: IUser) {
	try {
		const data = sessionStorage.getItem(USER);
		console.log(`data = ${data}`);
		console.log(`user = ${user}`);
		if (data === JSON.stringify(user)) return {
			status: STATUS[201], 
			data: JSON.parse(data) as IUser,
		};
		return {status: STATUS[403]}
	} catch (error) {
		console.log(STATUS[500]);
	}
	return {status: STATUS[400]};
}

export function registration(user: IUser) {
	try {
		sessionStorage.setItem(USER, JSON.stringify(user));
		const data = sessionStorage.getItem(USER);
		if (data) return {
			status: STATUS[201],
			data: JSON.parse(data),
		}
		return {status: STATUS[403]}
	} catch (error) {
		console.log(STATUS[500])
	}
	return {status: STATUS[400]}
}