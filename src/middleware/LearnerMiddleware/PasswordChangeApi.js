import axios from 'axios';
import { UPDATE_PASSWORD_REQUEST, UpdatePasswordFailure, UpdatePasswordSuccess } from '../../actions/LearnerAction/PasswordChangeAction';
 
 
 
const updatePasswordApi = ({ dispatch }) => (next) => async (action) => {
 
  if (action.type === UPDATE_PASSWORD_REQUEST) {
    const learnerId = action.payload.learnerId;
    const oldPassword = action.payload.oldPassword;
    const newPassword = action.payload.newPassword;
 
    if (!learnerId) {
      console.error('API ERROR: learnerId is undefined');
      dispatch(UpdatePasswordFailure("CourseId is undefined."));
      return next(action);
 
    }
    try {
      const response = await axios.put(`http://localhost:5199/lxp/learner/updatePassword?learnerId=${learnerId}&oldPassword=${oldPassword}&newPassword=${newPassword}`);
      if (response.status == 200) {
 
        dispatch(UpdatePasswordSuccess(response.data))
        alert('Password has been successfully updated.');
        window.location.reload();
      }
      else {
        console.error("no data received");
        alert("password updation fail");
      }
    }
    catch (error) {
      console.error("api error", error.responce ? error.responce.data.data : error.message);
      dispatch(UpdatePasswordFailure(error.message))
      alert("password update failed");
    }
 
    return next(action);
  }
};
export default updatePasswordApi;