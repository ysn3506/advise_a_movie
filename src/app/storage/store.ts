import { configureStore, ThunkAction, Action,combineReducers, applyMiddleware, CombinedState } from '@reduxjs/toolkit';
import { userReducer } from './redux/reducers';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'; 

import thunk from 'redux-thunk';




export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;





const reducer=combineReducers({
  user:userReducer
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







