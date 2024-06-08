import {SELECT_COURSE,FETCH_LEARNER_SUCCESS,FETCH_LEARNER_COURSE }  from "../../actions/LearnerAction/EnrolledCourseAction";

const initialState={
    course:[],
    loading:false,
    error:null,
}

const EnrollmentReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_LEARNER_COURSE:
            return{
                ...state,
                loading:true,
            }

        case FETCH_LEARNER_SUCCESS:
                return{
                    ...state,
                    course:[...state.course,action.payload],
                   
                    // course:action.payload,
                    loading:false,
                }


                case SELECT_COURSE:
    return {
        ...state,
        selectedCourse: action.payload,
        

    }
    

      default:
        return state;
    }
}

export default EnrollmentReducer;