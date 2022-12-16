import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import classes from "../styles/Login.module.scss";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className={classes.container}>
			
			<BackgroundImage />

			<div className={classes.main__container}>
				
				<div className={classes.header}>
					<h1>Sign In</h1>
				</div>

				<div className={classes.inputs__container}>
					<div className={classes.user__crudentials}>

					<label htmlFor='email'>Email</label>
					<input type='email'  id='email' />
					</div>
					<div className={classes.user__crudentials}>

					<label htmlFor='email'>Password</label>
					<input type='password'  id='password' />
					</div>
					<button type='button'>Sign In</button>

					<div className={classes.newUser}>
						<h2>
							<span>New to Netflix? </span>
							<Link to='/signup'>Sign up now</Link>
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
