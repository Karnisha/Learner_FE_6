export const UPDATE_COURSES_REQUEST = 'UPDATE_COURSES_REQUEST';
export const UPDATE_COURSES_SUCCESS = 'UPDATE_COURSES_SUCCESS';
export const UPDATE_COURSES_FAILURE = 'UPDATE_COURSES_FAILURE';
 
export const updateCoursesRequest = (payload) => ({
  type: UPDATE_COURSES_REQUEST,
  payload
});
 
export const updateCoursesSuccess = (course) => ({
  type: UPDATE_COURSES_SUCCESS,
  payload:course
  
});
 
export const updateCoursesFailure = (error) => ({
  type: UPDATE_COURSES_FAILURE,
  payload: error,
});

