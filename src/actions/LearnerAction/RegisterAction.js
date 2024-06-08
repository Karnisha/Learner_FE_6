export const USER_DATA_REQUEST='USER_DATA_REQUEST';
export const USER_DATA_SUCCESS='USER_DATA_SUCCESS';
export const USER_DATA_FAILURE='USER_DATA_FAILURE';

export const userDataRequest=(userdata)=>({
  type:USER_DATA_REQUEST,
  payload:userdata,
})

export const userDataSuccess=(successmsg)=>({
  type:USER_DATA_SUCCESS,
  payload:successmsg,
})

export const userDataFailure=(error)=>({
  type:USER_DATA_FAILURE,
  payload:error,
})