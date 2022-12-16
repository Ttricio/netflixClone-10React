import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/moviesSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
	reducer: {
		movies: moviesReducer,
		user: userReducer,
	},
});
