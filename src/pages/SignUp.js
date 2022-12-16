import React, { useState, useDispatch } from "react";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import classes from "../styles/SignUp.module.scss";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/features/userSlice";

const SignUp = (props) => {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	// const dispatch = useDispatch()
	const submitHandler = async (e) => {
		e.preventDefault();
		try {
		} catch (err) {
			console.log(err);
		}
	};
	const navigate = useNavigate();

	const signInHandler = async () => {
		try {
			console.log(email);
			console.log(`----------------------------------`);
			console.log(password);

			await createUserWithEmailAndPassword(auth, email, password);
			// await dispatch(login())
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			if (password.length < 6)
				return alert(
					`Your password is too short. Should have minimum 6 characters`
				);
			else if (password.length < 1) return alert(`Please enter a password`);
		}
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
				<form className={classes.inputs__container} onSubmit={submitHandler}>
					<div className={classes.email__container}>
						<input
							type='email'
							placeholder='Email adress'
							name='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						{!showPassword ? (
							<button onClick={() => setShowPassword(true)}>Get Started</button>
						) : null}
					</div>
					{showPassword && (
						<>
							<label htmlFor='email'></label>
							<input
								type='password'
								placeholder='Password'
								name='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
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
