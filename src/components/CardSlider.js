import React, { useEffect, useState, useRef } from "react";
import classes from "../styles/CardSlider.module.scss";
import { getPopular } from "../Redux/features/movies/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { LeftSlide, RightSlide } from "../utils/icons";

export const CardSlider = React.memo((props) => {
	const listRef = useRef();
	const [sliderPosition, setSliderPosition] = useState(0);
	const data = useSelector((state) => state.movies.movies);
	const dispatch = useDispatch();
	const [showControls, setShowControls] = useState(false);
	const handleDirection = (direction) => {
		let distance = listRef.current.getBoundingClientRect().x - 70;
		if (direction === "left" && sliderPosition > 0) {
			listRef.current.style.transform = `translateX(${230 + distance}px)`;
			setSliderPosition(sliderPosition - 1);
		}
		if (direction === "right" && sliderPosition < 4) {
			listRef.current.style.transform = `translateX(${-230 + distance}px)`;
			setSliderPosition(sliderPosition + 1);
		}
	};

	useEffect(() => {
		dispatch(getPopular());
	}, [dispatch]);
	// console.log(
	// 	data,
	// 	`+this are ttrending movies in slider comes from CardSlider.js`
	// );
	return (
		<div
			className={classes.container}
			onMouseEnter={() => setShowControls(true)}
			onMouseLeave={() => setShowControls(false)}>
			<h1>{props.title}</h1>
			<div className={classes.wrapper}>
				<div className={classes.card} ref={listRef}>
					{data.map((movie) => {
						return <Card movieData={movie} key={movie.id} />;
					})}
				</div>
				{showControls ? (
					<span
						className={classes.left__slide}
						onClick={() => handleDirection("left")}>
						<LeftSlide />
					</span>
				) : null}
				{showControls ? (
					<span
						className={classes.right__slide}
						onClick={() => handleDirection("right")}>
						<RightSlide />
					</span>
				) : null}
			</div>
		</div>
	);
});
