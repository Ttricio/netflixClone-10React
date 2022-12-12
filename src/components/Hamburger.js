import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import classes from "../styles/Hamburger.module.scss"
import { HamburgerIcon } from '../utils/icons';
import Backdrop from './Backdrop'

const Hamburger = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false)
    const menuHandler =()=>{
        setMenuIsVisible((prevState)=>!prevState)
        console.log(menuIsVisible);
    }
    const links = [
		{ name: "Home", link: "/" },
		{ name: "Tv Shows", link: "/tvshows" },
		{ name: "Movies", link: "/movies" },
		{ name: "My List", link: "/mylist" },
	];
  return (
    <div className={classes.container}>
        

        <span onClick={menuHandler}> <HamburgerIcon /></span>
        

        {menuIsVisible && <div className={classes.menu} onClick={menuHandler}>
        <ul className={classes.links }>
							{links.map(({ name, link }) => {
								return (
                                    <li key={name}>
										<Link to={link} onClick={menuHandler}>{name}</Link>
									</li>
								);
							})}
                            
						</ul>
        </div>}
                            
        
        
    </div>
  )
}

export default Hamburger