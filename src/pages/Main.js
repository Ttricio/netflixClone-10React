import React, { useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import classes from "../styles/Main.module.scss";
import backgroundImage from "../assets/home.jpg";
import MovieLogo from "../assets/homeTitle.webp";
import { Play, Info } from "../utils/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  getGenres, getPopular } from "../Redux/features/movies/moviesSlice";
import { useSelector } from "react-redux";
import { Slider } from "../components/Slider";
import Details from "../components/Details";
import { ToggleContext } from "../utils/toggleContext";

const Main = () => {
	const movies = useSelector((state) => state.movies.movies);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {toggle, toggleState} = useContext(ToggleContext)

	useEffect(() => {
		// here i am passing and object and can choose typ of video: all, movie, tv, person available and period: day or week available

		dispatch(getPopular({ type: "all", period: "day" }));
	}, []);
	useEffect(() => {
		dispatch(getGenres());
	}, []);

	return (
		<>
			{/* <Backdrop/> */}
			<div className={classes.container}>
				  <Navbar />
				  
				<div className={classes.board}>
					<img src={backgroundImage} alt='banner of stranger things' />
					<div className={classes.movielogo__container}>
						<img src={MovieLogo} alt='Logo of Strangers movie' />

						<div className={classes.buttons}>
							<button onClick={() => navigate("/player")}>
								<Play /> Play
							</button>
							<button >
								<Info /> More info
							</button>
						</div>
					</div>
				</div>
				<Slider movies={movies} />
				

				
			</div>
		</>
	);
};

export default Main;
