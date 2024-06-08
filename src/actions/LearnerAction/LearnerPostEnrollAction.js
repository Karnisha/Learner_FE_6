// actions.js
export const ENROLL_REQUEST = 'ENROLL_REQUEST';
export const ENROLL_SUCCESS = 'ENROLL_SUCCESS';
export const ENROLL_FAILURE = 'ENROLL_FAILURE';

export const enrollRequest = (courseId, learnerId) => ({
    type: ENROLL_REQUEST,
    courseId,
    learnerId,
});

export const enrollSuccess = (courseId ,learnerId) => ({
    type: ENROLL_SUCCESS,
    courseId,
    learnerId,
});

export const enrollFailure = (error) => ({
    type: ENROLL_FAILURE,
    error,
});

// export const enrollCourse = (courseId, learnerId) => {
//     return (dispatch) => {
//         dispatch(enrollRequest(courseId, learnerId));

//         // Replace this with your actual enrollment logic
//         const enrollmentSuccessful = true;

//         if (enrollmentSuccessful) {
//             dispatch(enrollSuccess(courseId, learnerId));
//         } else {
//             dispatch(enrollFailure(new Error('Enrollment failed')));
//         }
//     };
// };