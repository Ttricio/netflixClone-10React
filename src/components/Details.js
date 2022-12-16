import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../styles/Details.module.scss";
import {  CloseIcon, ThumbDown, ThumbUp } from "../utils/icons";
import Background from "../assets/login_background.jpg";
import PlayIcon from "../assets/play-icon.svg";
import { ToggleContext } from "../utils/toggleContext";

const Details = (props) => {
	const navigate = useNavigate();
	const {toggle,toggleState} = useContext(ToggleContext)
	return (
		<>
		 {toggle && <div className={classes.container}>
			<div className={classes.details}>
				<div className={classes.image__container}>
					<span className={classes.close__icon} onClick={toggleState}> 
						<CloseIcon />
					</span>
					<img src={Background} alt='' />
					{/* <img
						src={`https://image.tmdb.org/t/p/w500${props.movieData.backdrop_path}`}
						alt={props.movieData.title || "title of movie"}
					/> */}
					<div className={classes.controls}>
						<span onClick={() => navigate("/player")}>
							<img src={PlayIcon} alt='' />
							PLay
						</span>
						<span>
							<ThumbUp title='like' />
						</span>
						<span>
							<ThumbDown title='dislike' />
						</span>
						<div className={classes.more__info}></div>
					</div>
				</div>
				<div className={classes.description}>
					<div className={classes.left__section}>
						<section className={classes.details}>
							<div className={classes.info}>
								<h1>Accuracy: 96%</h1>
								<div className={classes.duration}>
								<span>2020</span>
								<span>everyone</span>
								<span>25 min</span> <span>HD</span></div>
								
							</div>
						<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
						perferendis accusamus fuga, nihil quam ducimus at dolorum
						reprehenderit aliquid laborum voluptatum, dolore fugiat corrupti
						nostrum obcaecati quas facilis dignissimos temporibus. Eveniet eius
						nisi placeat numquam cupiditate nulla deserunt officiis, eaque natus
						
					</p>

						</section>
					</div>
					<div className={classes.right__section}>
						<section className={classes.details}>
							<div className={classes.more__info}>
								<p><span>Cast:</span><br></br> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</div>
							<div className={classes.more__info}>
								<p><span>Genres:</span> <br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</div>
							<div className={classes.more__info}>
								<p><span>Category</span> <br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</div>
						</section>
					</div>

					
				</div>
			</div>
		</div> }
		</>
	);
};

export default Details;
