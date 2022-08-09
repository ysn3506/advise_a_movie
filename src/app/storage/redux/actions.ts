
import { authUser, registerUser, updateUser } from "../../services/API";
import { User } from "../../types/types";
import { store } from "../store";
import Cookies from "js-cookie";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "./constants";
import { in30Minutes } from "./utilities";

export type AppDispatch = typeof store.dispatch;


export const login = (user: User) => {
  store.dispatch({ type: USER_LOGIN_REQUEST });
  authUser(user).then((resp) => {
    store.dispatch({ type: USER_LOGIN_SUCCESS, payload: resp.data });
    Cookies.set("userInfo", JSON.stringify(resp.data), {
      expires: in30Minutes(),
    });
  }).catch(error => {
    store.dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  })
}

  export const logout = () => {
    Cookies.remove("userInfo");
    store.dispatch({ type: USER_LOGOUT });
  };

  export const register = ({ name, email, password, preferences = {} }: User) => {
    store.dispatch({ type: USER_REGISTER_REQUEST });
    registerUser({
      name,
      email,
      password,
      preferences,
    }).then((resp) => {
      store.dispatch({ type: USER_REGISTER_SUCCESS, payload: resp.data });
      Cookies.set("userInfo", JSON.stringify(resp.data), {
        expires: in30Minutes(),
      });
      store.dispatch({ type: USER_LOGIN_SUCCESS, payload: resp.data });
    }).catch(error => {
      store.dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    })
  };

  export const updateProfile = (user: User) => {
    store.dispatch({ type: USER_UPDATE_REQUEST });
    updateUser(user).then((resp) => {
      store.dispatch({ type: USER_UPDATE_SUCCESS, payload: resp.data });
      Cookies.set("userInfo", JSON.stringify(resp.data), {
        expires: in30Minutes(),
      });
      store.dispatch({ type: USER_LOGIN_SUCCESS, payload: resp.data });
    }).catch(error => {
      store.dispatch({
        type: USER_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    })
  };

   
