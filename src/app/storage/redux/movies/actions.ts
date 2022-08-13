import { store } from "../../store";
import {
  SET_ARTIST_MOVIES,
  SET_GENRE_MOVIES,
  SET_PREFERENCE_MOVIES,
  SET_RECOMMENDED_MOVIES,
} from "./constants";

export const setGenreMovies = (data: any) =>
  store.dispatch({ type: SET_GENRE_MOVIES, payload: data });

export const setArtistMovies = (data: any) =>
  store.dispatch({ type: SET_ARTIST_MOVIES, payload: data });

export const setPreferedMovies = (data: any) =>
  store.dispatch({ type: SET_PREFERENCE_MOVIES, payload: data });

export const setRecommendedMovies = (data: any) =>
  store.dispatch({ type: SET_RECOMMENDED_MOVIES, payload: data });
