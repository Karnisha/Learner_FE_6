import axios from "axios";
 
// import { PUT_USER_PROFILE_REQUEST } from "../../actions/LearnerAction/UpdateUserProfileAction";
import { put_user_profile_failure } from "../../actions/LearnerAction/UpdateUserProfileAction";
import { put_user_profile_success } from "../../actions/LearnerAction/UpdateUserProfileAction";
import { PUT_USER_PROFILE_REQUEST } from "../../actions/LearnerAction/UpdateUserProfileAction";
 
export const updateUserData =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type === PUT_USER_PROFILE_REQUEST) {
      try {
        // console.log("action api", action.payload.LearnerId);
        // console.log("action api pressing button", action.payload.editInfo);
        // Make the HTTP request with formData and the appropriate headers
        const response = await axios.put(
          `http://localhost:5199/lxp/learner/updateProfile`,
          action.payload.editInfo,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
            },
          }
        );
 
        console.log("api", response.data);
        // return response.data;
        dispatch(put_user_profile_success(response.data));
      } catch (error) {
        console.error("Error updating status: ", error);
        dispatch(put_user_profile_failure(error));
      }
    }
    return next(action);
  };
 
// export { updateUserData, fetchProfileData };