import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {UPDATE_WATCH_TIME_REQUEST,UPDATE_WATCH_TIME_STATUS,updateWatchTimeSuccess,updateWatchTimeFailure, updateWatchTimeExists} from '../../actions/LearnerAction/UpdateWatchTimeAction'



// const API_URL = `http://localhost:5199/lxp/learner/learnerprogressWatchTime?learnerId=${}&materialId=${}&watchtime=${}`;

 const updatewatchTimeApi = ({ dispatch,getState}) => (next) =>async (action) => {
  // console.log("topicMiddleware",action.payload);

  if (action.type === UPDATE_WATCH_TIME_REQUEST ) {
  const{isRequesting}=getState().topics;
    if (!isRequesting) {
     dispatch({ type: UPDATE_WATCH_TIME_STATUS, payload: true });
  console.log("isRequesting", getState().content);

  const ReducerData = getState();
  // Check if 'topicsState' is defined and has the 'isRequesting' property
  if (ReducerData.isRequesting) {
    dispatch({ type: UPDATE_WATCH_TIME_STATUS, payload: true });
    
    try {
      // console.log("post",action.payload)
      // Assuming 'action.payload' contains the data you want to senda
      const response = await axios.post(`http://localhost:5199/lxp/learner/learnerprogressWatchTime?learnerId=${action.payload.learnerId}&materialId=${action.payload.materialId}&watchtime=${action.payload.watchtime}`,action.payload);
      console.log('API Response1:', response.data); // Log the response data
      // if(response.data.statusCode==412){
      //   dispatch(updateWatchTimeExists());
      // }
      // else{
        dispatch(updateWatchTimeSuccess(response.data.data)); // Dispatch success action with the response data
        console.log("successfullresponse",response.data.data)
      // }
     
       
    } 
    catch (error) {
      console.error('API Error:', error.message);
      dispatch(updateWatchTimeFailure(error.message));
    } finally{
      dispatch({type:UPDATE_WATCH_TIME_STATUS,payload:false})
      
      }
    }
  }
 }
  return next(action);
  
};

export default updatewatchTimeApi;

