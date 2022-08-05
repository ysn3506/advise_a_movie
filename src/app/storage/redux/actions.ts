import { Dispatch } from "@reduxjs/toolkit";
import { authUser, registerUser } from "../../services/API";
import { User } from "../../types/user";

import Cookies from "js-cookie";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "./constants";
import { in30Minutes } from "./utilities";

export const login =
  ({ email, password }: User) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
      const { data }: any = await authUser({ email, password });

      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

      Cookies.set("userInfo", JSON.stringify(data), { expires: in30Minutes() });
    } catch (error: any) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const logout = () => async (dispatch: Dispatch) => {
  Cookies.remove("userInfo");
  dispatch({ type: USER_LOGOUT });
};

export const register =
  ({ name, email, password, preferences }: User) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });

      const { data }:any = await registerUser({
        name,
        email,
        password,
        preferences
      });

      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

          Cookies.set("userInfo", JSON.stringify(data), {
            expires: in30Minutes(),
          });
    } catch (error:any) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
