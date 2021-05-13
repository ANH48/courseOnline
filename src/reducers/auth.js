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

const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userInfo,
  result: false,
  isLoading: false,
  error: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case LOGIN_SUCCESS: {
      return { ...state, userInfo: action.payload.data, isLoading: false };
    }
    case LOGIN_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    case REGISTER_REQUEST: {
      return { ...state, isLoading: true, error: null, result: false };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        userInfo: action.payload.data,
        result: true,
        isLoading: false,
      };
    }
    case REGISTER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        result: false,
      };
    }
    case LOGOUT_REQUEST: {
      return { ...state, isLoading: true, error: null, result: false };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        userInfo: action.payload.data,
        result: false,
        isLoading: false,
      };
    }
    case LOGOUT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        result: false,
      };
    }
    default:
      return state;
  }
}

export default authReducer;
