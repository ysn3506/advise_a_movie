import { configureStore, ThunkAction, Action,combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './redux/user/reducers';
import { preferencesReducer } from "./redux/preferences/reducers";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'; 

import thunk from 'redux-thunk';
import { moviesReducer } from './redux/movies/reducers';


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;



const reducer=combineReducers({
  user: userReducer,
  preferences: preferencesReducer,
  movies:moviesReducer
  })



const middleware:any=[thunk]

export const store = configureStore({
  reducer,
  middleware
});





export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;







