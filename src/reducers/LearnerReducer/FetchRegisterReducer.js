import  {FETCH_USER_DATA_REQUEST,FETCH_USER_DATA_SUCCESS,FETCH_USER_DATA_FAILURE} from '..//../actions/LearnerAction/FetchRegisterAction';


const initialState = {
    userData:[],
    loading:false,
    error:null,
};

const FetchRegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_DATA_REQUEST:
            return {
                ...state,
                loading:true,
            };

        case FETCH_USER_DATA_SUCCESS:
            return{
                ...state,
                loading:false,
                userData:action.payload,

            };
            
        case FETCH_USER_DATA_FAILURE:
            return{
              ...state,
              loading:false,
              error:action.payload,
            };    
        default:
            return state;
    }
};

export default FetchRegisterReducer;