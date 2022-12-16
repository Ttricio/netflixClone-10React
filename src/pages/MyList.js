import React from 'react'
import Navbar from '../components/Navbar'
import classes from "../styles/MyList.module.scss";

const MyList = () => {
  return (
    <div><Navbar/>
    <div className={classes.container}>
        <h1>Threre is no title on your list</h1>

    </div>
    
    </div>
  )
}

export default MyList