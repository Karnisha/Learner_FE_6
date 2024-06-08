import axios from "axios";
 
import { GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_REQUEST, GET_USER_PROFILE_FAILUTE, getUserProfileFailure, } from "../../actions/LearnerAction/GetUpdateUserProfileAction";
import { getUserProfileSuccess } from "../../actions/LearnerAction/GetUpdateUserProfileAction";
import { UseDispatch } from "react-redux";
 
 
const fetchProfileData = ({ dispatch }) => (next) => async (action) => {
  
  if (action.type === GET_USER_PROFILE_REQUEST) {
 
 
    try {
      console.log(" learner id", action.payload)
      const response = await axios.get(`http://localhost:5199/lxp/view/learnerProfile/${action.payload}`);
 
      console.log("response", response);
 
      if (response.data.statusCode === 200) {
 
       
 
        console.log("inside", response);
         
        dispatch(getUserProfileSuccess(response.data.data));   // not working
       
        console.log("logerrrrrrr", dispatch(getUserProfileSuccess(response.data.data)) )
 
 
      }
 
 
      else {
        console.error("No data received from API");
        // dispatch(getUserProfileFailure(response.data.data));
      }
 
 
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch(getUserProfileFailure(error));
    }
 
 
  }
 
  return next(action);
};
 
export default fetchProfileData;