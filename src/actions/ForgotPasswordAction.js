// // actions.js
import axios from 'axios';
import { baseUrl } from '../middleware/api';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';


export const updatePassword = (data) => async (dispatch) => {
  try {
    // Destructure the data object to get the new password and email
    const email = data.currentTarget[0].value;
    const oldPassword = data.currentTarget[1].value;
    const newPassword = data.currentTarget[2].value;
    console.log(email);
    // const { email,oldPassword,newPassword } = data;
    // Make an Axios POST request to your API endpoint for updating the password

    const response = await axios.put(`http://localhost:5199/api/UpdatePassword`, {
      email,
      oldPassword,
      newPassword,
    });
    console.log(response.data());
    // Dispatch the UPDATE_PASSWORD action with the response data
    dispatch({
      type: UPDATE_PASSWORD,
      payload: response.data,
    });
  } catch (error) {
    // Handle errors here, such as dispatching a different action with the error message
    console.error('Error updating password:', error);
  }
};