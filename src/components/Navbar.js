import React, { useState } from "react";
import classes from "../styles/Navbar.module.scss";
import Logo from "../assets/Netflix_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Search } from "../utils/icons";
import avatar from "../assets/avatar.jpg";
import Hamburger from "./Hamburger";

const Navbar = (props) => {
	const [isRed, setIsRed] = useState();
	const [inputIsHidden, setInputIsHidden] = useState(true);
	const links = [
		{ name: "Home", link: "/" },
		{ name: "Tv Shows", link: "/tvshows" },
		{ name: "Movies", link: "/movies" },
		{ name: "My List", link: "/mylist" },
	];

	const inputVisibilityHandler = () => {
		setInputIsHidden((prevState) => !prevState);
		console.log(inputIsHidden);
	};
	const navigate = useNavigate();
	return (
		<>
			<div className={classes.wrapper}>
				<div className={classes.container}>
					<Link to="/">

					<div className={classes.logo__container}>
						<img src={Logo} alt='Netflix logo' />
					</div>
					</Link>
					<div className={classes.hamburger__menu}>
						<Hamburger/>
					</div>
					<nav className={classes.nav}>
						<ul className={`${classes.links} ${isRed && classes.column}`}>
							{links.map(({ name, link }) => {
								return (
									<li key={name}>
										<Link to={link}>{name}</Link>
									</li>
								);
							})}
						</ul>
					</nav>
                    <div className={classes.right__section}>

					<div className={classes.search__container}>
						<span
							className={`${classes.span} ${inputIsHidden && classes.visible}`}>
							<input
								type='text'
								placeholder='Names, persons, generes'
								className={` ${inputIsHidden && classes.visible}`}
                                />
						</span>
						<span onClick={inputVisibilityHandler}>
							<Search />
						</span>
					</div>
					<div className={classes.avatar__container}>
						<img src={avatar} alt='' />
						<ChevronDown />
					</div>
                                </div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
