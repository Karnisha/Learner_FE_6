import React from 'react'
import { UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS, UpdatePasswordFailure, UpdatePasswordSuccess } from '../../actions/LearnerAction/PasswordChangeAction'
 
 
 
 
const intialState ={
    Credential : {},
    loading :false,
    error : null,
 
}
 
 
 
 
 
 
 const  PasswordChangeReducer = (state= intialState, action) => {
    switch(action.type)
    {
        case UPDATE_PASSWORD_REQUEST:
        return{
            ...state,
            loading : true,
        }
 
        case UPDATE_PASSWORD_SUCCESS:
            return{
                ...state,
                loading :false,
            }
 
        case UpdatePasswordFailure:
            return{
                ...state,
                error : null,
            }
            default:
                return state;
    }
}
 
export default PasswordChangeReducer;