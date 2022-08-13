import {
    ADD_ARTIST,
    REMOVE_ARTIST,
    ADD_GENRE,
    REMOVE_GENRE,
    ADD_POPULARITY_CHOICE,
    REMOVE_POPULARITY_CHOICE
} from "./constants";
import { Action } from "../../../types/types";
import { addItem, removeItem } from "./utils";




const initialState = {
  artists: [],
  genres: [],
  popularity: []
};


export const preferencesReducer = (state = initialState, action: Action) => {

  switch (action.type) {
    case ADD_ARTIST:
      return { ...state, artists:addItem( state.artists, action.payload)};
    case REMOVE_ARTIST:
      return { ...state, artists:removeItem( state.artists, action.payload)};
    case ADD_GENRE:
          return { ...state, genres: addItem(state.genres, action.payload) };
    case REMOVE_GENRE:
        return { ...state, genres: removeItem(state.genres, action.payload) };
    case ADD_POPULARITY_CHOICE:
     return { ...state, popularity: addItem(state.popularity, action.payload) };
    case REMOVE_POPULARITY_CHOICE:
   return { ...state, popularity: removeItem(state.popularity, action.payload) };
    default:
      return state;
  }
};