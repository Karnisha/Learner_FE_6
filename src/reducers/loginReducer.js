import { LOGIN_ERROR,LOGIN_REQUEST,LOGIN_SUCCESS_ADMIN,LOGIN_SUCCESS_USER } from "../actions/loginAction";
const initialState = {
    user: null,
    loading:false,
    isSuccessadmin:false,
    isSuccessuser:false,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS_ADMIN:
        console.log("adminreducer",action.payload)
        return {
          ...state,
          isSuccessadmin:true,
          isSuccessuser:false,
          user: action.payload,
          loading:false,
          error: null,
        };
        case LOGIN_SUCCESS_USER:
          console.log("userreducer",action.payload)
          return {
            ...state,
            isSuccessuser:true,
            isSuccessadmin:false,
            user: action.payload,
            loading:false,
          };
        case LOGIN_REQUEST:
            return {
              ...state,
              loading:true,
              error: null,
            };
      case LOGIN_ERROR:
        return {
          ...state,
          loading:false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;