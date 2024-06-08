import { FETCH_USER_DATA_REQUEST,FetchuserDataSuccess,FetchuserDataFailure } from '..//../actions/LearnerAction/FetchRegisterAction';
import axios from 'axios';

import {userData} from './/..//..//../src/components/LearnerComponent/Register';
import  { useState } from 'react';

const BASE_URL = 'http://localhost:5199/lxp/view/learner/ ';

const FetchRegisterApi=({dispatch})=>(next)=>async(action)=>{
  if(action.type===FETCH_USER_DATA_REQUEST){
     try{
      console.log("action",action.payload);
      const response = await axios.get(`http://localhost:5199/lxp/view/learner/${action.payload}`);
      console.log("learner",response.data);
      dispatch(FetchuserDataSuccess(response.data.data))
     }catch(error){
      dispatch(FetchuserDataFailure(error))
     }

  }
  return next(action)
}

export  {FetchRegisterApi};
