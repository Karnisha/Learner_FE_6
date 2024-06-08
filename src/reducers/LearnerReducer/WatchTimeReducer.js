import { 
  WATCH_TIME_REQUEST,
  WATCH_TIME_SUCCESS,
  WATCH_TIME_FAILURE,
  WATCH_TIME_EXISTS,
  WATCH_TIME_STATUS
  
  
  } from '../../actions/LearnerAction/WatchTimeAction';
  
  const initialState = {
    content: [],
    loading: false,
    error: null,
    isSubmitted: false,
    isExisted:false,
    isError:false,
    isRequesting:false,
  };
  
  const addWatchTimeReducer = (state = initialState, action) => {
    switch (action.type) {
        case WATCH_TIME_REQUEST:
            return {
                ...state,
                loading: true,
                isRequesting:false,

            };
        case WATCH_TIME_SUCCESS:
  
            // console.log('Topic posted in Reducer:', action.payload);
            
            // Add the new topic to the existing topics array
            return {
                ...state,
                loading: false,
                content: action.payload, // Corrected here
                isSubmitted: true,
                error: null,
                isRequesting:false,

            };
        case WATCH_TIME_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                isError:true,
                isRequesting:false,

            };
  
          case  WATCH_TIME_EXISTS:
              return {
                ...state,
                loading: false,
                isExisted:true,
                isSubmitted:false,
                isError:false,
                isRequesting:false,

               
                
      
              };
              case WATCH_TIME_STATUS:
                return{
                  ...state,
                  isRequesting:action.payload,
                };
        default:
            return state;
    }
  };
  
  export default addWatchTimeReducer;