import { LOGIN_REQUEST, loginSuccessadmin, loginSuccessuser, loginError } from '../../actions/loginAction';
import axios from "axios";
 
import { baseUrl } from "../../middleware/api";
 
 
const loginUser = ({ dispatch }) => (next) => async (action) => {
 
  if (action.type === LOGIN_REQUEST) {
    try {
      const response = await axios.post(`${baseUrl}/api/Login`, action.payload);
 
      console.log('API Response:', response.data); // Log the response data
 
      if (response.data.email === true && response.data.password === true && response.data.role === "Admin") {
        console.log("Admin", response.data)
 
     
        const adminId = response.data.getLearnerId;
 
       
        // Store user ID in session
        sessionStorage.setItem('AdmminSessionId', adminId);
 
 
        dispatch(loginSuccessadmin(response.data));
      }
      else if (response.data.email === true && response.data.password === true && response.data.role === "Learner") {
        console.log("user", response.data)
       
 
        const learnerId = response.data.learnerId;
        // Store user ID in session
        sessionStorage.setItem('UserSessionID', learnerId);
 
        dispatch(loginSuccessuser(response.data))
      }
      else {
        console.error('No data received from API');
      }
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(loginError(error.message));
    }
  }
  return next(action)
};
 
 
export default loginUser;