// import { DELETE_COURSES_REQUEST,DELETE_COURSES_SUCCESS,DELETE_COURSES_FAILURE } from "../../actions/Admin/DeletecourseAction";

// const initialState = {
//     courses: [],
//     loading: false,
//     error: null,
//   };



//   const DeletecourseReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case DELETE_COURSES_REQUEST:
//         return {
//           ...state,
//           loading: true,
//         };
//       case DELETE_COURSES_SUCCESS:
//         console.log("Success",action.payload);
//         return {
//           ...state,
//           loading: false,
//           courses: action.payload,
//           error: null,
//         };
//       case DELETE_COURSES_FAILURE:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default DeletecourseReducer;


import {
    DELETE_COURSES_REQUEST,
    DELETE_COURSES_SUCCESS,
    DELETE_COURSES_FAILURE,
    DELETE_COURSES_FAILURE_MESSAGE,
  } from '../../actions/Admin/DeletecourseAction';
  
  const initialState = {
    courses: [],
    loading: false,
    error: null,
    message:null,
    isdeleted:false,
    isnotdelete:false,
    
  };
  
  const DeletecourseReducer = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_COURSES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_COURSES_SUCCESS:
        console.log("Success", action.payload);
        return {
          ...state,
          loading: false,
          message: action.payload,
          isdeleted:true,
          isnotdelete:false,
          error: null,
        };
        case DELETE_COURSES_FAILURE_MESSAGE:
            console.log("Failure Message",action.payload);
           return{
                ...state,
                loading: false,
                message: action.payload,
                isdeleted:false,
                isnotdelete:true,
                error:null,
            };
      case DELETE_COURSES_FAILURE:
        console.error("Failure", action.payload);
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default DeletecourseReducer;
  
  
