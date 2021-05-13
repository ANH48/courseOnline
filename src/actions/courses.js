import {
  GET_COURSES_REQUEST,
  GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE,
  GET_COURSESBYCATEGORY_REQUEST,
  GET_COURSESBYCATEGORY_SUCCESS,
  GET_COURSESBYCATEGORY_FAILURE,
  GET_ALL_COURSES_REQUEST,
  GET_ALL_COURSES_SUCCESS,
  GET_ALL_COURSES_FAILURE,
} from "../constants/courses";

import coursesAPI from "../services/coursesAPI";
export function getCourseByCategory(category) {
  return async (dispatch) => {
    dispatch({ type: GET_COURSESBYCATEGORY_REQUEST });
    try {
      const { data } = await coursesAPI.getCoursesByCategory(category);
      dispatch({
        type: GET_COURSESBYCATEGORY_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      dispatch({
        type: GET_COURSESBYCATEGORY_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
export function getCourses() {
  return async (dispatch) => {
    dispatch({ type: GET_COURSES_REQUEST });
    try {
      const { data } = await coursesAPI.getCourses();
      dispatch({
        type: GET_COURSES_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      dispatch({
        type: GET_COURSES_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
export function getAllCourses() {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_COURSES_REQUEST });
    try {
      const { data } = await coursesAPI.getAllCourses();
      dispatch({
        type: GET_ALL_COURSES_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      dispatch({
        type:   GET_ALL_COURSES_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
