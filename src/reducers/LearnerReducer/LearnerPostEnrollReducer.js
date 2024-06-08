import { ENROLL_REQUEST, ENROLL_SUCCESS, ENROLL_FAILURE } from '../../actions/LearnerAction/LearnerPostEnrollAction';

const initialState = {
    enrolledCourses: [],
    loading: false,
    error: null,
};

export default function LearnerPostEnrollReducer(state = initialState, action) {
    switch (action.type) {
        case ENROLL_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case ENROLL_SUCCESS:
            return {
                ...state,
                loading: false,
                enrolledCourses: [...state.enrolledCourses, { courseId: action.courseId, learnerId: action.learnerId }],
            };
        case ENROLL_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
}