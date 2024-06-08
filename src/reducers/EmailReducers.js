import { SUBMIT_EMAIL } from "../actions/EmailAction";
const initialState = {
    email: '',
    submitting: false, 
    error: null, 
};

const emailReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_EMAIL:
            return {
                ...state,
                email: action.payload.email,
                submitting: true, 
                
            };
        default:
            return state;
    }
};
 
export default emailReducer;
