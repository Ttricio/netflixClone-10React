import React from 'react'
import Background from "../assets/login_background.jpg"
import classes from "../styles/BackgroundImage.module.scss"

const BackgroundImage = () => {
  return (
    <div className={classes.container}>
        <img src={Background} alt="" />
        <span className={classes.backdrop}></span>
    </div>
  )
}

export default BackgroundImage