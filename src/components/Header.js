import React from "react";
import classes from "../styles/Header.module.scss";
import Logo from "../assets/Netflix_logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = (props) => {
	const navigate = useNavigate();
	return (
		<>
		<div className={classes.wrapper}>

		<div className={classes.container}>
			<div className={classes.logo__container}>
				<img src={Logo} alt='Netflix logo' />
			</div>
			<Link to='login'>
				<button onClick={() => navigate(props.login ? "/login" : "/signup")}>
					{props.login ? "Log In" : "Sign In"}
				</button>
			</Link>
		</div>
		</div>
		</>
	);
};

export default Header;
