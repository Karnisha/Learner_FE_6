import { CREATE_EMAIL_REQUEST,CREATE_EMAIL_SUCCESS,CREATE_EMAIL_FAILURE, SET_IS_REQUESTING_OTP } from "..//../actions/LearnerAction/Fetchemail";

const initialState = {
    email:null,
    loading:false,
    error:null,
    isRequestingOTP:false,
};

const emailReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_EMAIL_REQUEST:
            return {
                ...state,
                loading:true,
            };

        case CREATE_EMAIL_SUCCESS:
            console.log("res",action.payload);
            return{
                ...state,
                loading:false,
                email: action.payload,

            };
            
        case CREATE_EMAIL_FAILURE:
            return{
              ...state,
              loading:false,
              error:action.payload,
            };    

            case SET_IS_REQUESTING_OTP:
                return{
                    ...state,
                    isRequestingOTP:action.payload,
                };

        default:
            return state;
    }
};

export default emailReducer;