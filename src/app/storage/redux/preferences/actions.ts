import {
  ADD_ARTIST,
  REMOVE_ARTIST,
  ADD_GENRE,
  REMOVE_GENRE,
  ADD_POPULARITY_CHOICE,
  REMOVE_POPULARITY_CHOICE,
} from "./constants";

export const addArtist =(item:object) => ({
  type: ADD_ARTIST,
  payload: item,
});

export const removeArtist = (item:object) => ({
  type: REMOVE_ARTIST,
  payload: item,
});

export const addGenre= (item: object) => ({
  type: ADD_GENRE,
  payload: item,
});

export const removeGenre = (item: object) => ({
  type: REMOVE_GENRE,
  payload: item,
});

export const addPopularity = (item: object) => ({
  type: ADD_POPULARITY_CHOICE,
  payload: item,
});

export const removePopularity = (item: object) => ({
  type: REMOVE_POPULARITY_CHOICE,
  payload: item,
});
