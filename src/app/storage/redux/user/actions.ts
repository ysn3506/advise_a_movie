
import { authUser, registerUser, updateUser } from "../../../services/API";
import { User } from "../../../types/types";
import { store } from "../../store";
import { deleteCookie, getMovies, setCookie } from "../../../utilities";
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


export type AppDispatch = typeof store.dispatch;


export const login = (user: User) => {
  store.dispatch({ type: USER_LOGIN_REQUEST });
  authUser(user).then((resp) => {
    store.dispatch({ type: USER_LOGIN_SUCCESS, payload: resp.data });
    console.log(resp)
    setCookie("userInfo", JSON.stringify(resp.data), 1);
    
    
  })
    .catch (error => {
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
    deleteCookie("userInfo")
    store.dispatch({ type: USER_LOGOUT });
  };

  export const register = ({
    name,
    email,
    password,
    preferences = { artists: [], popularity: [], genres: [] },
  }: User) => {
    store.dispatch({ type: USER_REGISTER_REQUEST });
    registerUser({
      name,
      email,
      password,
      preferences,
    })
      .then((resp) => {
        store.dispatch({ type: USER_REGISTER_SUCCESS, payload: resp.data });
        setCookie("userInfo", JSON.stringify(resp.data), 1);
        store.dispatch({ type: USER_LOGIN_SUCCESS, payload: resp.data });
      })
      .catch((error) => {
        store.dispatch({
          type: USER_REGISTER_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      });
  };

  export const updateProfile = (user: User) => {
    store.dispatch({ type: USER_UPDATE_REQUEST });
    updateUser(user).then((resp) => {
      store.dispatch({ type: USER_UPDATE_SUCCESS, payload: resp.data });
     setCookie("userInfo", JSON.stringify(resp.data), 1);
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

   
