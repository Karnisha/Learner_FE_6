export const FETCH_ALL_COURSES_REQUEST = 'FETCH_ALL_COURSES_REQUEST';
export const FETCH_ALL_COURSES_SUCCESS = 'FETCH_ALL_COURSES_SUCCESS';
export const FETCH_ALL_COURSES_FAILURE = 'FETCH_ALL_COURSES_FAILURE';

export const fetchallCoursesRequest = () => ({
  type: FETCH_ALL_COURSES_REQUEST,
});

export const fetchallCoursesSuccess = (courses) => ({
  type: FETCH_ALL_COURSES_SUCCESS,
  payload: courses,
});

export const fetchallCoursesFailure = (error) => ({
  type: FETCH_ALL_COURSES_FAILURE,
  payload: error,
});


