import React, { FormEvent, useState } from 'react';
import classes from './myInput.module.css';
import { INPUT_TYPES } from '../../consts/constants.ts';

interface IProps {
	require: boolean;
	type: string | undefined;
	value: string;
	placeholder: string | undefined;
	name: string | undefined;
	onChange: (event: FormEvent<HTMLInputElement>) => void;
	isRegisrate: boolean | false;
}

function MyInput({require, type, value, placeholder, name, onChange, isRegisrate}: IProps) {
	const [isShown, setShown] = useState(type);

	function showPassword() {
		setShown(INPUT_TYPES.text)
		setTimeout(() => {
			setShown(INPUT_TYPES.password)
		}, 3000)
	}

	return (
		<div className={classes.formContainer}>
			<div className={classes.wrapper} >
				<input 
					required={require}
					type={isShown}
					value={value} 
					placeholder={placeholder} 
					name={name}
					onChange={onChange}
				/>
				{isRegisrate && <img src='/src/assets/tuiIconShowLarge.svg' title='показать пароль' alt='показать пароль' onClick={showPassword} />}
			</div>
			<hr className={classes.hr} />
		</div>
	);
}

export default MyInput;