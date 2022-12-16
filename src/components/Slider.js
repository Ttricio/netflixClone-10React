import React from "react";

import {CardSlider} from "./CardSlider";
import classes from "../styles/Slider.module.scss";
import Details from "./Details";

export  const Slider = React.memo(({ movies }) => {
	const getMoviesFromRange = (from, to) => {
		// console.log(movies, `+this comes from Slider.js+`);
		return movies.slice(from, to); // here I have to pass data from redux slice
	};
	return (
		<>
		<Details />
		<div className={classes.container}>
			<CardSlider title='Trending Now' data={getMoviesFromRange(0, 10)} />
			<CardSlider title='New Releases' data={getMoviesFromRange(10, 20)} />
			<CardSlider title='Comedy' data={getMoviesFromRange(20, 30)} />
			<CardSlider
				title='Popular on Netflix'
				data={getMoviesFromRange(30, 40)}
				/>
			<CardSlider title='Action' data={getMoviesFromRange(40, 50)} />
			<CardSlider title='Epics' data={getMoviesFromRange(50, 60)} />
		</div>
				</>
	);
});


