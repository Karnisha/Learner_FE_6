import { 
  UPDATE_WATCH_TIME_REQUEST,
  UPDATE_WATCH_TIME_SUCCESS,
  UPDATE_WATCH_TIME_FAILURE,
  UPDATE_WATCH_TIME_EXISTS,
  UPDATE_WATCH_TIME_STATUS,
  
  } from '../../actions/LearnerAction/UpdateWatchTimeAction';
  
  const initialState = {
    content: [],
    loading: false,
    error: null,
    isSubmitted: false,
    isExisted:false,
    isError:false,
    isRequesting:false,
  };
  
  const updatewatchTimeReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_WATCH_TIME_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_WATCH_TIME_SUCCESS:
  
            // console.log('Topic posted in Reducer:', action.payload);
            
            // Add the new topic to the existing topics array
            return {
                ...state,
                loading: false,
                content: action.payload, // Corrected here
                isSubmitted: true,
                error: null,
            };
        case UPDATE_WATCH_TIME_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                isError:true,
            };
  
          case UPDATE_WATCH_TIME_EXISTS:
              return {
                ...state,
                loading: false,
                isExisted:true,
                isSubmitted:false,
                isError:false,
               
                
      
              };
              case UPDATE_WATCH_TIME_STATUS:
                return{
                  ...state,
                  isRequesting:action.payload,
                };
        default:
            return state;
    }
  };
  
  export default updatewatchTimeReducer;