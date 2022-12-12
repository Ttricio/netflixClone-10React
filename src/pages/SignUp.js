import React, { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import classes from "../styles/SignUp.module.scss";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
	const [showPassword, setShowPassword] = useState(false);
	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	const signInHandler = async () => {
		try {
			const { email, password } = formValues;
			console.log(email);
			console.log(`----------------------------------`);
			console.log(password);

			await createUserWithEmailAndPassword(auth, email, password);
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode, errorMessage);
		}
		console.log(formValues);
	};
	onAuthStateChanged(auth, (currentUser) => {
		if (currentUser) navigate("/");
	});

	return (
		<div className={classes.container}>
			<BackgroundImage />
			<Header />

			<div className={classes.main__container}>
				<div className={classes.header}>
					<h1>Unlimited movies, TV shows, and more.</h1>
					<h2>Watch anywhere. Cancel anytime</h2>
					<h3>
						Readt to watch? Enter your emal to create ar restart your membership
					</h3>
				</div>
				<form className={classes.inputs__container}>
					<div className={classes.email__container}>
						<input
							type='email'
							placeholder='Email adress'
							name='email'
							value={formValues.email}
							onChange={(e) =>
								setFormValues({
									...formValues,
									[e.target.name]: [e.target.value],
								})
							}
						/>
						{!showPassword ? (
							<button onClick={() => setShowPassword(true)}>Get Started</button>
						) : null}
					</div>
					{showPassword && (
						<>
							<label htmlFor='email'>Please enter your password</label>
							<input
								type='password'
								placeholder='Password'
								name='password'
								value={formValues.password}
								onChange={(e) =>
									setFormValues({
										...formValues,
										[e.target.name]: [e.target.value],
									})
								}
							/>
						</>
					)}
				</form>
				<button className={classes.login} onClick={signInHandler}>
					Sign Up
				</button>
			</div>
		</div>
	);
};

export default SignUp;
