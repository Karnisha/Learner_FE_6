import {
    FETCH_ALL_COURSES_REQUEST,
    FETCH_ALL_COURSES_SUCCESS,
    FETCH_ALL_COURSES_FAILURE,
  } from '../actions/Adnimviewcourse';
  
  const initialState = {
    courses: [],
    loading: false,
    error: null,
  };
  
  const AllcourseReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ALL_COURSES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_ALL_COURSES_SUCCESS:
        console.log(action.payload);
        return {
          ...state,
          loading: false,
          courses: action.payload,
          error: null,
        };
      case FETCH_ALL_COURSES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default AllcourseReducer;
  