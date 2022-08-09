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
import Cookies from "js-cookie";

import { State,Action } from "../../types/types";






const userInfoFromStorage = Cookies.get("userInfo")
  ? JSON.parse(localStorage.get("userInfo"))
  : null;


const initialState: State = {
  loading: false,
  userInfo: userInfoFromStorage,
  error: undefined,

};

export const userReducer = (state = initialState, action:Action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_UPDATE_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// export const userRegisterReducer = (state = initialState, action: Action) => {
//   switch (action.type) {
//     case USER_REGISTER_REQUEST:
//       return { loading: true };
//     case USER_REGISTER_SUCCESS:
//       return { loading: false, userInfo: action.payload };
//     case USER_REGISTER_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };




// export const userUpdateReducer = (state = initialState, action:Action) => {
//   switch (action.type) {
//     case USER_UPDATE_REQUEST:
//       return { loading: true };
//     case USER_UPDATE_SUCCESS:
//       return { loading: false, userInfo: action.payload};
//     case USER_UPDATE_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };