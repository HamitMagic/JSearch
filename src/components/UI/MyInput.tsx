import React, { FormEvent } from 'react';
import classes from './myInput.module.css';

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

	return (
		<div className={classes.formContainer}>
			<div>
				<input 
					required={require}
					type={type}
					value={value} 
					placeholder={placeholder} 
					name={name}
					onChange={onChange}
				/>
				{isRegisrate && <img src='/src/assets/tuiIconShowLarge.svg' alt='показать пароль'/>}
			</div>
			<hr />

		</div>
	);
}

export default MyInput;