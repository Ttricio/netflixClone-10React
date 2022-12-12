import React from "react";
import classes from "../styles/Player.module.scss";
import { LeftArrow } from "../utils/icons";
import video from "../assets/trailer.mp4";
import { useNavigate } from "react-router-dom";

const Player = () => {
    const back =()=>{
        navigate(-1)
        console.log(`is working`);
    }
	const navigate = useNavigate();
	return (
		<div className={classes.container}>
			<div className={classes.player}>
				<div className={classes.back} onClick={back} >
					<LeftArrow />
				</div>
				<video
					src={video}
					autoPlay
					loop
					type='video/mp4'
					controls
					muted></video>
			</div>
		</div>
	);
};

export default Player;
