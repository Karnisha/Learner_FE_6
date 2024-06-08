// import axios from 'axios';
// import { UPDATE_COURSES_REQUEST,updateCoursesFailure,updateCoursesSuccess } from "../../actions/Admin/Updatecourse";


// const API_URL = 'http://localhost:5199/api/Course/Updatecourse/lxp/courseupdate';

//  const UpdateCourse = ({ dispatch }) => (next) => async (action) => {
  

//   if (action.type === UPDATE_COURSES_REQUEST) {
//     try {
//       console.log("UPDATECOURSE:",action.payload)
//       // Assuming 'action.payload' contains the data you want to send

//       const response = await axios.put(API_URL,action.payload, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log('API Response:', response.data); // Log the response data
//       dispatch(updateCoursesSuccess(response.data)); // Dispatch success action with the response data
//     } catch (error) {
//       console.error('API Error:', error.message);
//       dispatch(updateCoursesFailure(error.message));
//     }
//   }
//   return next(action);
  
// };

// export default UpdateCourse;

// import axios from 'axios';
// import {
//   UPDATE_COURSES_REQUEST,
//   updateCoursesSuccess,
//   updateCoursesFailure
// } from '../../actions/Admin/Updatecourse';

// const API_URL = 'http://localhost:5199/api/Course/Updatecourse/lxp/courseupdate';

// const UpdateCourseMiddleware = ({ dispatch }) => (next) => async (action) => {
//   if (action.type === UPDATE_COURSES_REQUEST) {
//     try {
//       console.log("UPDATECOURSE:", action.payload);
//       // Assuming 'action.payload' is a FormData object containing the course data

//       const response = await axios.put(API_URL, action.payload, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log('API Response:', response.data); // Log the response data
//       dispatch(updateCoursesSuccess(response.data)); // Dispatch success action with the response data
//     } catch (error) {
//       console.error('API Error:', error.response ? error.response.data : error.message);
//       dispatch(updateCoursesFailure(error.message)); // Dispatch failure action with the error message
//     }
//   }
//   return next(action);
// };

// export default UpdateCourseMiddleware;


// import axios from 'axios';
// import {
//   UPDATE_COURSES_REQUEST,
//   updateCoursesSuccess,
//   updateCoursesFailure
// } from '../../actions/Admin/Updatecourse';

// // Function to construct the API URL with the course ID
// const constructApiUrl = (courseId) => `http://localhost:5199/api/Course/Updatecourse/lxp/courseupdate/${courseId}`;

// const UpdateCourseMiddleware = ({ dispatch }) => (next) => async (action) => {
//   if (action.type === UPDATE_COURSES_REQUEST) {
//     const { courseId, ...courseData } = action.payload; // Destructure the courseId from the payload
//     const API_URL = constructApiUrl(courseId); // Construct the API URL with the course ID

//     try {
//       console.log("UPDATECOURSE:", courseData);
//       // Assuming 'courseData' is a FormData object containing the course data without the courseId

//       const response = await axios.put(API_URL, courseData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log('API Response:', response.data); // Log the response data
//       dispatch(updateCoursesSuccess(response.data)); // Dispatch success action with the response data
//     } catch (error) {
//       console.error('API Error:', error.response ? error.response.data : error.message);
//       dispatch(updateCoursesFailure(error.message)); // Dispatch failure action with the error message
//     }
//   }
//   return next(action);
// };

// export default UpdateCourseMiddleware;


import axios from 'axios';
import {
  UPDATE_COURSES_REQUEST,
  updateCoursesSuccess,
  updateCoursesFailure
} from '../../actions/Admin/Updatecourse';

const UpdateCourseMiddleware = ({ dispatch }) => (next) => async (action) => {
  if (action.type === UPDATE_COURSES_REQUEST) {
    const { courseId, formData } = action.payload; // Destructure the courseId and formData from the payload

    if (!courseId) {
      console.error('API Error: courseId is undefined');
      dispatch(updateCoursesFailure('Course ID is undefined.'));
      return next(action);
    }

    // const API_URL = "http://localhost:5199/api/Course/Updatecourse/lxp/courseupdate";


    const API_URL = `http://localhost:5199/api/Course/Updatecourse/lxp/courseupdate`;

    try {
      console.log("l"+formData);
      const response = await axios.put(API_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      dispatch(updateCoursesSuccess(response.data));
    } catch (error) {
      console.error('API Error:', error.response ? error.response.data : error.message);
      dispatch(updateCoursesFailure(error.message));
    }
  }
  return next(action);
};

export default UpdateCourseMiddleware;
