import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import Player from "./pages/Player";
import Movies from "./pages/Movies"
import TvShows from "./pages/TvShows";
import MyList from "./pages/MyList";


function App() {
	return (
		<BrowserRouter>
		
			<Routes>
				<Route exact path="/login" element={<Login/>}/>
				<Route exact path="/" element={<Main/>}/>
				<Route exact path="/player" element={<Player/>}/>
				<Route exact path="/signup" element={<SignUp/>}/>
				<Route exact path="/movies" element={<Movies/>}/>
				<Route exact path="/tvshows" element={<TvShows/>}/>
				<Route exact path="/mylist" element={<MyList/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
