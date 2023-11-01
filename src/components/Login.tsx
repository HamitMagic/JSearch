import React, { FormEvent, useState } from 'react';
import { observer } from 'mobx-react-lite';
import classes from './components.module.css';
import { FORM_NAMES, TEXTS } from '../consts/constants.ts';
import MyInput from './UI/MyInput.tsx';
import { authStore } from '../mobx/authStore.ts';

function Login() {
	const [isRegisrate, setRegisrate] = useState(false);
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleChange = (event: FormEvent<HTMLInputElement>) => {
		event.preventDefault();
		if (event.currentTarget.name === FORM_NAMES.confirmPassword) setConfirmPassword(event.currentTarget.value);
		if (event.currentTarget.name === FORM_NAMES.name) setName(event.currentTarget.value);
		if (event.currentTarget.name === FORM_NAMES.password) setPassword(event.currentTarget.value);
	}

	function changeAuthForm() {
		setRegisrate(!isRegisrate);
	}

	function handleSubmit() {
		if (isRegisrate) {
			if (password !== confirmPassword) return
			authStore.register({name, password})
		} else {
			authStore.login({name, password})
		}
	}

	return (
		<div className={classes.container}>
			<span className={classes.title}>
				{isRegisrate && 'Регистрация'}
				{!isRegisrate && 'Вход в аккаунт'}
			</span>
			<form name='login' className={classes.form} onSubmit={handleSubmit}>
				<MyInput 
					name={FORM_NAMES.name} 
					type='text' 
					require 
					isRegisrate={false} 
					placeholder='Логин'
					value={name}
					onChange={handleChange} 
				/>
				<MyInput 
					name={FORM_NAMES.password} 
					type='password'
					value={password}
					isRegisrate={!isRegisrate} 
					require 
					placeholder='Пароль' 
					onChange={handleChange} 
				/>
				{isRegisrate && <MyInput 
					require 
					type='password'
					isRegisrate={false}
					placeholder='Подтвердите пароль'
					value={confirmPassword} 
					name={FORM_NAMES.confirmPassword} 
					onChange={handleChange}
				/>}
				<div className={classes.buttonContainer} >
					<button type='submit' name='login' className={classes.myButton}>
						{isRegisrate ? TEXTS.register: TEXTS.login}
					</button>
					<div className={classes.footer}>
						{isRegisrate ? TEXTS.gotAccount : TEXTS.noAccount}
						<span onClick={changeAuthForm} className={classes.link}>
							{isRegisrate ? TEXTS.login : TEXTS.register}
						</span>
					</div>
				</div>
			</form>
		</div>
	);
}

export default observer(Login);