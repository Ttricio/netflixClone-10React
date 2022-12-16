import React, { useState, createContext } from "react";

//* This creates new context

const ToggleContext = createContext();

//* This is a provider, it enables to use context later in the app.
//! children destructure props object and use only children instead props.children 


const ToggleProvider = ({ children }) => {
	const [toggle, setToggle] = useState(false);
	const toggleState = () => {
		setToggle((prevState) => !prevState);
        
		console.log(`this becomes from Context `);
	};
	return (
		<ToggleContext.Provider value={{ toggle, toggleState }}>
			{children}
		</ToggleContext.Provider>
	);
};
export { ToggleContext, ToggleProvider };
