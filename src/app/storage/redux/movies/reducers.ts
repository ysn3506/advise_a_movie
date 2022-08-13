import {
  SET_ARTIST_MOVIES,
  SET_GENRE_MOVIES,
  SET_PREFERENCE_MOVIES,
  SET_RECOMMENDED_MOVIES
} from "./constants";
import { Action } from "../../../types/types";





const initialState = {
  genreMovies: [],
  artistMovies: [],
  recommendedMovies: [],
  preferedMovies:[]
};


export const moviesReducer = (state = initialState, action: Action) => {

  switch (action.type) {
    case SET_ARTIST_MOVIES:
      return { ...state, artistMovies: action.payload };
    case SET_GENRE_MOVIES:
      return { ...state, genreMovies: action.payload };
    case SET_PREFERENCE_MOVIES:
      return { ...state, preferedMovies: action.payload };
    case SET_RECOMMENDED_MOVIES:
      return { ...state, recommendedMovies: action.payload };
    default:
      return state;
  }
};