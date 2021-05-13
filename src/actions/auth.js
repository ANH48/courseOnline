// import { stringify } from "qs";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,

} from "../constants/auth";

import authAPI from "../services/authAPI";

export function login(values) {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await authAPI.login(values);
      // lưu thông tin lại dưới local để giữ trạng thái đăng nhập khi user tắt trang web
      localStorage.setItem("userInfo", JSON.stringify(data));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
export function registers(values) {
  return async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      const { data } = await authAPI.register(values);
      // lưu thông tin lại dưới local để giữ trạng thái đăng nhập khi user tắt trang web
    //   localStorage.setItem("userInfo", JSON.stringify(data));
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
export function logout() {
    return async (dispatch) => {
      dispatch({ type: LOGOUT_REQUEST });
      try {
        const data = null;
        // lưu thông tin lại dưới local để giữ trạng thái đăng nhập khi user tắt trang web
      //   localStorage.setItem("userInfo", JSON.stringify(data));
        dispatch({
          type: LOGOUT_SUCCESS,
          payload: { data },
        });
      } catch (error) {
        dispatch({
          type: LOGOUT_FAILURE,
          payload: { error: error.response.data },
        });
      }
    };
  }
