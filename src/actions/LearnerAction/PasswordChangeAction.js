export const UPDATE_PASSWORD_REQUEST = "UPDATE_PASSWORD_REQUEST";
export const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';
export const UPDATE_PASSWORD_FAILURE = 'UPDATE_PASSWORD_FAILURE';
 
 
  
 
 
 
export const UpdatePasswordRequest = (learnerId, oldPassword, newPassword) => ({
    type: UPDATE_PASSWORD_REQUEST,
    payload: { learnerId, oldPassword, newPassword }
});
 
export const UpdatePasswordSuccess = (data) => ({
    type: UPDATE_PASSWORD_SUCCESS,
    payload: data
});
 
export const UpdatePasswordFailure = (error) => ({
    type: UPDATE_PASSWORD_FAILURE,
    payload: error
});