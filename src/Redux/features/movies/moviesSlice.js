import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	movies: [],
	genresLoaded: false,
	genres: [],
};


const URL = "https://api.themoviedb.org";




export const getPopular = createAsyncThunk(
	"movies/trending",
	async ({ type, period }) => {
		try {
			const resp =
				
				await axios.get(
					`${URL}/3/trending/${type}/${period}?api_key=${process.env.REACT_APP_API_KEY}`
				);
			console.log(resp, `popular from redux slice`);
			return resp.data.results;
		} catch (err) {
			console.log(err);
		}
	}
);
export const getGenres = createAsyncThunk("netflix/genres", async () => {
	const {
		data: { genres },
	} = await axios.get(
		` ${URL}/3/genre/movie/list?api_key==${process.env.REACT_APP_API_KEY}`
	);
	console.log(genres);
	return genres;
});

const moviesSlice = createSlice({
	name: "movies",
	initialState,
	reducres: {},
	extraReducers: (builder) => {
		builder.addCase(getPopular.fulfilled, (state, action) => {
			state.movies = action.payload;
		});
		builder.addCase(getGenres.fulfilled, (state, action) => {
			state.genres = action.payload;
			state.genresLoaded = true;
		});
	},
});

export default moviesSlice.reducer;
