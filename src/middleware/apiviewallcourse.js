import axios from 'axios';
import {
  FETCH_ALL_COURSES_REQUEST,
  fetchallCoursesSuccess,
  fetchallCoursesFailure,
} from '../actions/Adnimviewcourse';

const API_URL = 'http://localhost:5199/api/Course/GetAllCourse/lxp/GetAllCourse';

const apiviewallcourse = ({ dispatch }) => (next) => async (action) => {
  next(action);

  if (action.type === FETCH_ALL_COURSES_REQUEST) {
    try {
      const response = await axios.get(API_URL);

      console.log('API Response:', response.data); // Log the response data 

      if (response.status===200 && response.data&& response.data.data.length > 0) {
        dispatch(fetchallCoursesSuccess(response.data.data));
      } else {
        console.error('No data received from API');
      }
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(fetchallCoursesFailure(error.message));
    }
  }
};

export default apiviewallcourse;


