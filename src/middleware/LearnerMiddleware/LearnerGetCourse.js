// import axios from 'axios';
// import { FETCH_COURSES_REQUEST, fetchCoursesFailure, fetchCoursesSuccess } from '../../actions/LearnerAction/LearnerGetCourseAction';
 
 
// const API_URL = 'http://localhost:5199/lxp/view/course';
 
// const LearnerGetCourse = ({ dispatch }) => (next) => async (action) => {
//   next(action);
//   if (action.type === FETCH_COURSES_REQUEST) {
//     try {
//       const response = await axios.get(API_URL);
 
//       console.log('API  mycourse Response:', response.data); // Log the response data
 
//       if (response.status=== 200 && response.data && response.data.data.length > 0)
//        {
//         console.log(response.data.data);
//         dispatch(fetchCoursesSuccess(response.data.data));
//       } else {
//         console.error('No data received from API');
//       }
//     } catch (error) {
//       console.error('API Error:', error.message);
//       dispatch(fetchCoursesFailure(error.message));
//     }
//   }
// };
 
// export default LearnerGetCourse;
 


import axios from 'axios';
import { FETCH_COURSES_REQUEST, fetchCoursesFailure, fetchCoursesSuccess } from '../../actions/LearnerAction/LearnerGetCourseAction';
 
const LearnerGetCourse = ({ dispatch }) => (next) => async (action) => {
  next(action);
  console.log("coursegetapi",action)
  const API_URL = `http://localhost:5199/lxp/view/Getallcoursebylearnerid/${action.payload}`;
 
  if (action.type === FETCH_COURSES_REQUEST) {
    try {
      console.log("learnerapicomponent:", action);
      const response = await axios.get(`${API_URL}`);
      console.log(`${API_URL}${action.payload}`);
      console.log('API  mycourse Response:', response.data); // Log the response data
 
      if (response.status === 200 && response.data && response.data.data && response.data.data.result) {
        const courses = response.data.data.result.result; // Extract the courses array
        console.log(courses);
        dispatch(fetchCoursesSuccess(courses));
      } else {
        console.error('No valid data received from API');
        dispatch(fetchCoursesFailure('No valid data received from API'));
      }
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(fetchCoursesFailure(error.message));
    }
  }
};
export default LearnerGetCourse;