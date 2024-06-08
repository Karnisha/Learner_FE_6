import  { useState } from 'react';
import axios from 'axios';
import { CREATE_EMAIL_REQUEST,userEmailSuccess,userEmailFailure,SET_IS_REQUESTING_OTP} from '..//../actions/LearnerAction/Fetchemail';

const API = 'http://localhost:5199/api/Email/EmailVerification';
 
const fetchEmailApi = ({ dispatch, getState }) => (next) => async (action) => {
  if (action.type === CREATE_EMAIL_REQUEST) {
    const { isRequestingOTP } = getState().email;
    // Check if an OTP request is already in progress
    if (!isRequestingOTP) {
      dispatch({ type: SET_IS_REQUESTING_OTP, payload: true });
      try {
        console.log("request payload", action.payload);
        const response = await axios.post(API, JSON.stringify(action.payload), {
          headers: {
            'Content-Type': 'application/json',
          },
        });
 
        console.log('API Response:', response.data);
        dispatch(userEmailSuccess(response.data.otp));
      } catch (error) {
        dispatch(userEmailFailure(error));
      } finally {
        dispatch({ type: SET_IS_REQUESTING_OTP, payload: false });
      }
    }
  }
  return next(action);
};
 
export default fetchEmailApi;