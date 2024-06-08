export const CREATE_OTP_REQUEST='CREATE_OTP_REQUEST';
export const CREATE_OTP_SUCCESS='CREATE_OTP_SUCCESS';
export const CREATE_OTP_FAILURE='CREATE_OTP_FAILURE';

export const userOTPRequest=(otp,email)=>({
    type:CREATE_OTP_REQUEST,
    payload:{otp,email}
  })
  
  export const userOTPSuccess=(successmsg)=>({
    type:CREATE_OTP_SUCCESS,
    payload:successmsg,
  })
  
  export const userOTPFailure=(error)=>({
    type:CREATE_OTP_FAILURE,
    payload:error,
  })
