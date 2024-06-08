
export const GET_USER_PROFILE_REQUEST = "GET_USER_PROFILE_REQUEST";
export const GET_USER_PROFILE_SUCCESS = "GET_USER_PROFILE_SUCCESS";
export const GET_USER_PROFILE_FAILUTE = "GET_USER_PROFILE_FAILUTE";
 
 
 
export const getUserProfileRequest = (LearnerId) => ({
    type: GET_USER_PROFILE_REQUEST,
    payload: LearnerId,
  });
 
 
 
 
  export const getUserProfileSuccess = (response) => ({
    type: GET_USER_PROFILE_SUCCESS,
    payload: response,
  });
 
 
  // console.log("successmessage",getUserProfileSuccess());
 
  export const getUserProfileFailure = (error) => ({
    type: GET_USER_PROFILE_FAILUTE,
    payload: error,
  });