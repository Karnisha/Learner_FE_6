// import axios from 'axios';
// import {
//   DELETE_COURSES_REQUEST,
//   deleteCoursesSuccess,
//   deleteCoursesFailure,
// } from '../../actions/Admin/DeletecourseAction';

// const API_URL = '';

// const apiDeletecourse = ({ dispatch }) => (next) => async (action) => {
//   next(action);

//   if (action.type === DELETE_COURSES_REQUEST) {
//     try {
//       const response = await axios.get(API_URL);

//       console.log('API Response:', response.data); // Log the response data 

//       if (response.status===200) {
//         dispatch(deleteCoursesSuccess(response.data));
//       }
//       else if(response.data===405)
//       {
//        dispatch(deleteCoursesFailure(response.data))
//       }
//        else {
//         console.error('No data received from API');
//       }
//     } catch (error){
//       console.error('API Error:', error.message);
//     //   dispatch(deleteCoursesFailure(error.message));
//     }
//   }
// };

// export default apiDeletecourse;


import axios from 'axios';
import {
  DELETE_COURSES_REQUEST,
  deleteCoursesSuccess,
  deleteCoursesFailure,
  delteCoursesFailureMessage
} from '../../actions/Admin/DeletecourseAction';

// Ensure the API_URL ends with a forward slash
const API_URL = 'http://localhost:5199/lxp/coursedelete/';

const apiDeletecourse = ({ dispatch }) => (next) => async (action) => {
  next(action);

  if (action.type === DELETE_COURSES_REQUEST) {
    console.log("deleteapi",action.payload) // The ID should be part of the action payload
    const deleteEndpoint = `${API_URL}${action.payload}`; // Append the courseId to the endpoint

    try {
      const response = await axios.delete(deleteEndpoint);

      console.log('API for delete Response:', response.data); // Log the response data 
      console.log("Api message",response.data.message);

      if (response.status === 200) {
        dispatch(deleteCoursesSuccess(response.data.message));
      }
       if(response.status === 405)
      {
        dispatch(delteCoursesFailureMessage(response.data.message));
      }  
      else {
        // If the API response is not successful, dispatch a failure action
        dispatch(deleteCoursesFailure(response.data));
      }
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(deleteCoursesFailure(error.message));
    }
  }
  return next(action)
};

export default apiDeletecourse;
