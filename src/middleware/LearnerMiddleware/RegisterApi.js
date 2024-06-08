import { USER_DATA_REQUEST,userDataSuccess,userDataFailure } from '..//../actions/LearnerAction/RegisterAction';
import axios from 'axios';

import {userData} from './/..//..//../src/components/LearnerComponent/Register';
import  { useState } from 'react';



const BASE_URL = 'http://localhost:5199/lxp/learner/registration';

const RegisterApi=({dispatch})=>(next)=>async(action)=>{
  if(action.type===USER_DATA_REQUEST){
     try{
      const response = await axios.post(BASE_URL,action.payload);
      console.log('API Response:', response.data); //
      dispatch(userDataSuccess(response.data.data))
     }catch(error){
      dispatch(userDataFailure(error))
     }

  }
  return next(action)
}

export  {RegisterApi};