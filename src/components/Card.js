import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../styles/Card.module.scss";
import video from "../assets/trailer.mp4";
import { ToggleContext } from "../utils/toggleContext";
import { ChevronDown, PLay2, ThumbDown, ThumbUp } from "../utils/icons";

const Card = ({ movieData }) => {
	const [isHovered, setIsHovered] = useState(false);
	const navigate = useNavigate();
	const { toggleState } = useContext(ToggleContext);

	return (
		<div
			className={classes.container}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<img
				src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`}
				alt={movieData.title || "title of movie"}
			/>

			{isHovered && (
				<div className={classes.hover}>
					<div className={classes.image__container}>
						<img
							src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`}
							alt={movieData.title || "title of movie"}
							onClick={() => navigate("/player")}
						/>
						<video
							src={video}
							autoPlay
							loop
							type='video/mp4'
							controls
							muted
							onClick={() => navigate("/player")}
						/>
					</div>
					<div className={classes.info__container}>
						<h2
							className={classes.info__container__title}
							onClick={() => navigate("/player")}>
							{movieData.name === undefined ? movieData.title : movieData.name}
						</h2>
						<div className={classes.icons}>
							<div className={classes.controls}>
								<span onClick={() => navigate("/player")}>
									<PLay2 title='play' />
								</span>
								<span onClick={toggleState}>
									<ThumbUp title='like' />
								</span>
								<span>
									<ThumbDown title='dislike' />
								</span>
							</div>
							<div
								className={classes.more__info}
								onClick={() => console.log(`clicked`)}>
								<span onClick={toggleState}>
									<ChevronDown title='More info' />
								</span>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Card;
