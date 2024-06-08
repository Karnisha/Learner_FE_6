import { SUBMIT_EMAIL } from "../actions/EmailAction";
const initialState = {
    email: '',
    submitting: false, // Flag for submission state (optional)
    error: null, // To store any errors (optional)
    };
    
    const emailReducer = (state = initialState, action) => {
    switch (action.type) {
    case SUBMIT_EMAIL:
    return {
    ...state,
    email: action.payload.email,
    submitting: true, // Set submitting flag to true (optional)
    };
    default:
    return state;
    }
    };
    
    export default emailReducer;