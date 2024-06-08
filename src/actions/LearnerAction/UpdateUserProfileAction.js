export const PUT_USER_PROFILE_REQUEST = "PUT_USER_PROFILE_REQUEST";
export const PUT_USER_PROFILE_SUCCESS = "PUT_USER_PROFILE_SUCCESS";
export const PUT_USER_PROFILE_FAILURE = "PUT_USER_PROFILE_FAILURE";
 
 
 
 
 
export const put_user_profile_request = (LearnerId, editInfo) => ({
  type: PUT_USER_PROFILE_REQUEST,
  payload: { LearnerId, editInfo },
});
 
 
 
 
export const put_user_profile_success = (response) => ({
  type: PUT_USER_PROFILE_SUCCESS,
  payload: response,
});
 
 
 
export const put_user_profile_failure = (error) => ({
  type: PUT_USER_PROFILE_FAILURE,
  payload: error,
});