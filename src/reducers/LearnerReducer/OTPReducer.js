import { CREATE_OTP_REQUEST,CREATE_OTP_SUCCESS,CREATE_OTP_FAILURE } from "..//../actions/LearnerAction/OTPAction";

const initialState = {
    otp:null,
    loading:false,
    error:null,
};

const OTPReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_OTP_REQUEST:
            return {
                ...state,
                loading:true,
            };

        case CREATE_OTP_SUCCESS:
            return{
                ...state,
                loading:false,
                otp:action.payload,

            };
            
        case CREATE_OTP_FAILURE:
            return{
              ...state,
              loading:false,
              error:action.payload,
            };    
        default:
            return state;
    }
};

export default OTPReducer;