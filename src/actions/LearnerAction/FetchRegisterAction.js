export const FETCH_USER_DATA_REQUEST='FETCH_USER_DATA_REQUEST';
export const FETCH_USER_DATA_SUCCESS='FETCH_USER_DATA_SUCCESS';
export const FETCH_USER_DATA_FAILURE='FETCH_USER_DATA_FAILURE';

export const FetchuserDataRequest=(userdata)=>({
  type:FETCH_USER_DATA_REQUEST,
  payload:userdata,
})
console.log("userdata",FetchuserDataRequest());
export const FetchuserDataSuccess=(fetchlearner)=>({
  type:FETCH_USER_DATA_SUCCESS,
  payload:fetchlearner,
})

export const FetchuserDataFailure=(error)=>({
  type:FETCH_USER_DATA_FAILURE,
  payload:error,
})