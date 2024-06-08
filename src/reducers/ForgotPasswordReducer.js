import { UPDATE_PASSWORD } from "../actions/ForgotPasswordAction";
const initialState = {
  time: 60,
  email: '',
  errors: {},
};

const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD:
      return {
        ...state,
        // time: action.payload.time,
        email: action.payload.email,
        errors: action.payload.errors,
      };
    default:
      return state;
  }
};

export default forgotPasswordReducer;
