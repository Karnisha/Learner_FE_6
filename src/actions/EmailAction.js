import axios from 'axios';
export const SUBMIT_EMAIL = 'FORGOT_PASSWORD_REQUEST';
export const submitEmail = (email) => {

  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:5199/api/ForgetPassword', { email });
      console.log(response.data);

      if (response.data === false) {
        window.alert("Invalid Email")
      }
      return response;

    } catch (error) {
      console.error(error);
    }
  };
};