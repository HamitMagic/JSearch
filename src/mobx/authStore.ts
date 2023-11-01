/* eslint-disable import/no-extraneous-dependencies */
import { makeAutoObservable, configure } from "mobx";
import { auth, registration } from "../API/authService.ts";
import { STATUS, USER } from '../consts/constants.ts';

configure({enforceActions: 'observed'})

export interface IUser {
	name: string;
	password: string;
}

class Auth {
    user = {};

    isLogin = false;

    constructor() {
        makeAutoObservable(this);
    }

    setLogin(isLogin: boolean) {
        this.isLogin = isLogin;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    async login(user: IUser) {
        try {
            const response = await auth(user);
            this.setLogin(true);
            if (response.status === 201) this.setUser(response.data as IUser);
        } catch (error) {
            console.log(error);
        }
    }

    async register(user: IUser) {
        try {
            const response = await registration(user);
            if (response.status === STATUS[201]) {
				this.setLogin(true);
            	this.setUser(response.data.user);
			}
        } catch (error) {
            console.log(error);
        }
    }

    async updateAuth() {
		const user = sessionStorage.getItem(USER);
		if (user) {
			try {
				this.setUser(JSON.parse(user));
				this.setLogin(true);
			} catch (e) {
				console.log('-------------error---------------')
				console.log(e);
			}
		}
    }
}

export const authStore = new Auth();