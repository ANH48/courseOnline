// Courses reducer
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

const initialState = {
  courses: [],
  coursesAll: [],
  coursesbycategory: [],
  isLoading: false,
  error: null,
};

function coursesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COURSES_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case GET_COURSES_SUCCESS: {
      return { ...state, courses: action.payload.data, isLoading: false };
    }
    case GET_COURSES_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    case GET_COURSESBYCATEGORY_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case GET_COURSESBYCATEGORY_SUCCESS: {
      return { ...state, coursesbycategory: action.payload.data, isLoading: false };
    }
    case GET_COURSESBYCATEGORY_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    case GET_ALL_COURSES_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case GET_ALL_COURSES_SUCCESS: {
      return { ...state, coursesAll: action.payload.data, isLoading: false };
    }
    case GET_ALL_COURSES_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}

export default coursesReducer;
