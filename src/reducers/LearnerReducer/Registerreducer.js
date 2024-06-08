import { USER_DATA_REQUEST,USER_DATA_SUCCESS,USER_DATA_FAILURE } from "..//../actions/LearnerAction/RegisterAction";


const initialState = {
    userData:[],
    loading:false,
    error:null,
};

const LearnerReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DATA_REQUEST:
            return {
                ...state,
                loading:true,
            };

        case USER_DATA_SUCCESS:
            return{
                ...state,
                loading:false,
                userData:action.payload,

            };
            
        case USER_DATA_FAILURE:
            return{
              ...state,
              loading:false,
              error:action.payload,
            };    
        default:
            return state;
    }
};

export default LearnerReducer;