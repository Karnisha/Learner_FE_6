import axios from 'axios';
import {
  FETCH_COURSES_REQUEST,
  fetchCoursesSuccess,
  fetchCoursesFailure,
} from '../actions/courseAction';


const API_URL = 'http://localhost:5199/api/Course/GetLimitedCourse/lxp/Getninecourse';

const apiMiddleware = ({ dispatch }) => (next) => async (action) => {
  next(action);

  if (action.type === FETCH_COURSES_REQUEST) {
    try {
      const response = await axios.get(API_URL);

      console.log('API Response:', response.data); // Log the response data 

      if (response.status=== 200 && response.data && response.data.data.length > 0)
       {
        console.log(response.data.data);
        dispatch(fetchCoursesSuccess(response.data.data));
      } else {
        console.error('No data received from API');
      }
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(fetchCoursesFailure(error.message));
    }
  }
};

export default apiMiddleware;




