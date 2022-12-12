import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/home.jpg";
import MovieLogo from "../assets/homeTitle.webp";
import { Play, Info } from "../utils/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPopular } from "../Redux/features/movies/moviesSlice";
import { useSelector } from "react-redux";
import { Slider } from "../components/Slider";
import classes from "../styles/TvShows.module.scss";

const TvShows = () => {
	const movies = useSelector((state) => state.movies.movies);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getPopular({ type: "tv", period: "day" }));
	}, []);

	return (
		<div className={classes.container}>
			<Navbar />
			<div className={classes.main}>
				{movies ? (
					<Slider movies={movies} />
				) : (
					<div>
						<h1>Not Available</h1>
					</div>
				)}
			</div>
		</div>
	);
};

export default TvShows;
