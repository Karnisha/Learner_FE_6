export const DELETE_COURSES_REQUEST = 'DELETE_COURSES_REQUEST';
export const DELETE_COURSES_SUCCESS = 'DELETE_COURSES_SUCCESS';
export const DELETE_COURSES_FAILURE = 'DELETE_COURSES_FAILURE';
export const DELETE_COURSES_FAILURE_MESSAGE='DELETE_COURSES_FAILURE_MESSAGE'

export const deleteCoursesRequest = (id) => ({
  type: DELETE_COURSES_REQUEST,
  payload: id,
});

export const deleteCoursesSuccess = (courses) => ({
  type: DELETE_COURSES_SUCCESS,
  payload: courses,
});

export const delteCoursesFailureMessage=(courses)=>({
    types:DELETE_COURSES_FAILURE_MESSAGE,
    payload:courses,
})

export const deleteCoursesFailure = (error) => ({
  type: DELETE_COURSES_FAILURE,
  payload: error,
});


