import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import courseReducer from '../reducers/courseReducer';
import apiMiddleware from '../middleware/apiMiddleware';
import ForgotPasswordreducer from '../reducers/ForgotPasswordReducer';
import userReducer from '../reducers/loginReducer';
import AllcourseReducer from '../reducers/AllcourseReducer';
import apiviewallcourse from '../middleware/apiviewallcourse';
import loginUser from '../middleware/Admin/apiLogin';
import apiDeletecourse from '../middleware/Admin/apiDeletecourse';
import DeletecourseReducer from '../reducers/Admin/DeletecourseReducer';
import UpdateCourse from '../middleware/Admin/apiUpdatecourse';
import courseupdateReducer from '../reducers/Admin/Updatecourse';
import LearnerReducer from '../reducers/LearnerReducer/Registerreducer';
import {RegisterApi}   from '../middleware/LearnerMiddleware/RegisterApi';
import emailReducer from '../reducers/LearnerReducer/FetchEmailReducer';
import fetchEmailApi from '../middleware/LearnerMiddleware/FetchEmailApi';
import OTPReducer from '../reducers/LearnerReducer/OTPReducer';
import VerifyEmailApi from '../middleware/LearnerMiddleware/VerifyEmailApi';

import LearnerGetCourseReducer from '../reducers/LearnerReducer/LearnerGetCourseReducer';
import LearnerGetCourse from '../middleware/LearnerMiddleware/LearnerGetCourse';

import LearnerPostEnrollReducer from '../reducers/LearnerReducer/LearnerPostEnrollReducer';
import LearnerPostEnroll from '../middleware/LearnerMiddleware/LearnerPostEnroll';

 import enrollCourseApi from "../middleware/LearnerMiddleware/EnrollCourseApi";
 import enrollmentReducer from "../reducers/LearnerReducer/EnrollmentReducer";
import fetchPdfReducer from '../reducers/LearnerReducer/FetchPdfReducer';
import FetchRegisterReducer from '../reducers/LearnerReducer/FetchRegisterReducer';
import { FetchRegisterApi } from '../middleware/LearnerMiddleware/FetchRegisterApi';
import GetUserProfileReducer from '../reducers/LearnerReducer/GetUserProfileReducer';
import UpdateUserProfileReducer from '../reducers/LearnerReducer/UpdateUserProfileReducer';
import fetchProfileData from '../middleware/LearnerMiddleware/GetUserProfileMiddleware';
import { updateUserData } from '../middleware/LearnerMiddleware/UpdateUserProfileMiddleware';
import PasswordChangeReducer from '../reducers/LearnerReducer/PasswordChangeReducer';
import updatePasswordApi from '../middleware/LearnerMiddleware/PasswordChangeApi';
import addWatchTimeReducer from '../reducers/LearnerReducer/WatchTimeReducer';
import watchTimeApi from '../middleware/LearnerMiddleware/WatchTimeMiddleware';
import updatewatchTimeApi from '../middleware/LearnerMiddleware/UpdateWatchTimeMiddleware';
import updatewatchTimeReducer from '../reducers/LearnerReducer/UpdateWatchTimeReducer';






const rootReducer = combineReducers({
  passwordchangereducer : PasswordChangeReducer,
  // getUseProfile: GetUserProfileReducer,
  // updateuserprofile:UpdateUserProfileReducer,
  // forgotPassword: ForgotPasswordreducer,
  user: userReducer,
  course: courseReducer,
  allcourse: AllcourseReducer,
  deletecourse: DeletecourseReducer,
  updatecourse:courseupdateReducer,
  learner:LearnerReducer,
  email:emailReducer,
  otp:OTPReducer,
  fetchcourse: LearnerGetCourseReducer,
  enrolledCourses:LearnerPostEnrollReducer,
  fetchPdf: fetchPdfReducer,
  enroll: enrollmentReducer,
  fetchlearner: FetchRegisterReducer,
  watchTime:addWatchTimeReducer,
  updateWatchTime:updatewatchTimeReducer,
});


const store = createStore(

  rootReducer,
  applyMiddleware(thunk,apiMiddleware,apiviewallcourse,loginUser,apiDeletecourse,UpdateCourse,RegisterApi,fetchEmailApi,VerifyEmailApi,LearnerGetCourse,LearnerPostEnroll,enrollCourseApi,FetchRegisterApi,watchTimeApi,updatewatchTimeApi)
);

export default store;

