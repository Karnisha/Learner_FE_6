import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loginpage from '../View/LoginPage';
import ForgotPassword from '../View/ForgotPassword';
import Email from '../View/Email';
import Admincourse from '../View/Admincourse';
// import Navigationbar from '../components/Navbar';
import Adminviewcourse from '../View/Adminviewcourse';
import Admindashboard from '../View/Admin/Admindashboard';
import Courseupdate from '../View/Admin/Courseupdate';
import UserDashboard from '../View/User/UserDashboard';
import Adminrouting from './AdminRouting';
import Home from '../View/Home';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import RegisterView from '../View/LearnerView/RegisterView';
import LearnerDashboard from '../components/LearnerComponent/LearnerDashboard';
import LearnerNavbar from '../components/LearnerComponent/LearnerNavbar';
import CourseNavbar from '../components/LearnerComponent/CourseNavbar';
import GetEnrollment from '../components/LearnerComponent/GetEnrollment';

import PDFViewer from '../components/LearnerComponent/PDFViewer';
 import SidebarTopics from '../components/LearnerComponent/SidebarTopics';
import PptViewerComponent from '../components/LearnerComponent/Pptxday';
import UpdateUserProfileComponent from '../components/LearnerComponent/UpdateUserProfile';
import PasswordChange from '../components/LearnerComponent/PasswordChange';
import Progressbar from '../components/LearnerComponent/Progressbar';

function Routing() {
  // const DrawerHeader = styled('div')(({ theme }) => ({
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'flex-end',
  //   padding: theme.spacing(0, 1),
  //   // necessary for content to be below app bar
  //   ...theme.mixins.toolbar,
  // }));
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/passwordchange' element = {<PasswordChange/>}/>
      <Route path='/updateuserprofile' element={<UpdateUserProfileComponent/>}/>
      <Route exact path="/" element={<Loginpage />} />
      <Route path="/email" element={<Email />} />
      <Route path="/forgotpassword" element={<ForgotPassword />}/>
      <Route path='/RegisterView' element={<RegisterView/>}></Route>
      <Route path='/LearnerDashboard' element={<LearnerDashboard/>}></Route>
      <Route path='/LearnerNavbar' element={<LearnerNavbar/>}></Route>
      <Route path='/LearnerPage' element={<CourseNavbar/>}></Route>
     
         <Route path="/LearnerenrolledCourse" element={<GetEnrollment/>}></Route>

         <Route path="/ViewTopics" element={<SidebarTopics/>}></Route>

        <Route path="/PDF" element={<PDFViewer/>}></Route>
        <Route path="/PPT" element={<PptViewerComponent/>}></Route>
         <Route element={<Adminrouting />}> 
        <Route path="/home" element={<Admindashboard />} />
        <Route path="/admincourse" element={<Admincourse />}/>
        <Route path="/adminviewallcourse"element={<Adminviewcourse />} ></Route>
        <Route path="/admindashboard" element={<Admindashboard />}></Route>
        <Route path="/admindupdatecourse/:courseId" element={<Courseupdate />} ></Route>
        {/* <Route path="/learnerviewall"element={<LearnerReduxView />} ></Route> */}
        {/* <Route path="/individuallearner/:learnerId" element={<IndividualLearner />}></Route> */}
        {/* <Route path="/LearnerReport" element={<LearnerReportView/>}></Route> */}
        <Route path='/login' element={<Loginpage/>}></Route>
        <Route path='/Progress' element={<Progressbar/>}></Route>
        
      </Route>

    </Routes>
  </BrowserRouter>
   
  );
}

export default Routing;
