// import { UPDATE_COURSES_REQUEST,UPDATE_COURSES_SUCCESS,UPDATE_COURSES_FAILURE } from "../../actions/Admin/Updatecourse";


// const initialState = {
  
//     courses: [],
//     loading: false,
//     error: null,
//     isSubmitted:false,
//   };
  
//   const courseupdateReducer = (state = initialState, action) => {
//     switch (action.type) {
//        case UPDATE_COURSES_REQUEST:
//         return {
//           ...state,
//           loading: true,
//         };
//       case UPDATE_COURSES_SUCCESS:
//         console.log('Course posted:', action.payload);
//         // Add the new course to the existing courses array
//         return {
//           ...state,
//           loading: false,
//           courses: [...state.courses, action.payload],
//           isSubmitted:true,
//           error: null,
//         };
//       case UPDATE_COURSES_FAILURE:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default courseupdateReducer;

import { UPDATE_COURSES_REQUEST, UPDATE_COURSES_SUCCESS, UPDATE_COURSES_FAILURE } from "../../actions/Admin/Updatecourse";

const initialState = {
  courses: [],
  loading: false,
  error: null,
  // isSubmitted: false,
};

const courseupdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
      };
      case UPDATE_COURSES_SUCCESS:
        const updatedCourses = state.courses.map((course) =>
          course.courseId === action.payload.courseId ? { ...course, ...action.payload } : course
        );
      return {
        ...state,
        loading: false,
        courses: updatedCourses,
        // isSubmitted: true,
        error: null,
      };
    case UPDATE_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default courseupdateReducer;
