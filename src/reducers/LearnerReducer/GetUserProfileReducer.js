import {GET_USER_PROFILE_FAILUTE,GET_USER_PROFILE_REQUEST,GET_USER_PROFILE_SUCCESS} from '../../actions/LearnerAction/GetUpdateUserProfileAction'
 
const initialstateGET = {
  CredentialGet: [],
  loading: false,
  error: null,
};
 
const GetUserProfileReducer = (state = initialstateGET, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
 
    case GET_USER_PROFILE_SUCCESS:  
    console.log("checkupdatereducer",action.payload);
      return {
        ...state,
        loading: false,
        CredentialGet: action.payload,
      };
    case GET_USER_PROFILE_FAILUTE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
 
export default GetUserProfileReducer;