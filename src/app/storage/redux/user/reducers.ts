import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_FAIL,
  USER_UPDATE_SUCCESS
} from "./constants";


import { UserState,Action,User } from "../../../types/types";
import { getCookie } from "../../../utilities";



const userFromCookie = getCookie("userInfo")
const userInfoFromStorage: User = userFromCookie
  ? JSON.parse(userFromCookie)
  : {
      name: undefined,
      email: undefined,
      _id: undefined,
      preferences: { artists: [], popularity: [], genres: [] },
    };



const initialState: UserState = {
  loading: false,
  userInfo: userInfoFromStorage,
  error: undefined,

};

export const userReducer = (state = initialState, action:Action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state,loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state,loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { ...state,loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    case USER_REGISTER_REQUEST:
      return {...state, loading: true };
    case USER_REGISTER_SUCCESS:
      return { ...state,loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { ...state,loading: false, error: action.payload };
    case USER_UPDATE_REQUEST:
      return { ...state,loading: true };
    case USER_UPDATE_SUCCESS:
      return { ...state,loading: false, userInfo: action.payload };
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload, userInfo:state.userInfo };
    default:
      return state;
  }
};

