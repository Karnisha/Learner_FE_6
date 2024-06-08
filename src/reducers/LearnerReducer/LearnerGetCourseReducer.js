import {
    FETCH_COURSES_REQUEST,
    FETCH_COURSES_SUCCESS,
    FETCH_COURSES_FAILURE,
  } from '../../actions/LearnerAction/LearnerGetCourseAction';
 
  const initialState = {
    courses: [],
    loading: false,
    error: null,
  };
 
 
  const LearnerGetCourseReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COURSES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_COURSES_SUCCESS:
        console.log("Success",action.payload);
        return {
          ...state,
          loading: false,
          courses: action.payload,
          error: null,
        };
      case FETCH_COURSES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
 
  export default LearnerGetCourseReducer;