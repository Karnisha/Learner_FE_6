import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, Button } from 'react-bootstrap';
import { validatePassword } from '../../utils/LearnerValidations/ValidationforPasswordChange'
 
// import '../../src/Styles/PasswordChange.css'
import {useSelector,useDispatch} from 'react-redux';
import { UpdatePasswordRequest } from '../../actions/LearnerAction/PasswordChangeAction';
import LearnerDashboard from './LearnerDashboard';
import LearnerNavbar from '..//../components/LearnerComponent/LearnerNavbar';
 
const PasswordChange = () => {
    const [learnerId] = useState(sessionStorage.getItem('UserSessionID'));
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    // const [isPasswordMatch, setIsPasswordMatch] = useState(false);
    const dispatch = useDispatch();
    // const UpdatePassword = useSelector((state)=>state.updaterequest);
 
 
   
    const handleSubmit = async (e) => {
        e.preventDefault();
       
        const validationErrors = validatePassword(newPassword,oldPassword,confirmPassword);
        if (validationErrors.length > 0) {
            console.log("validation",validationErrors);
          setError(validationErrors.join(' '));
          console.log("error",error);
          return; // This return should be here to prevent the try block from executing if there are errors.
        }
     
        try {
        // axios
            dispatch(UpdatePasswordRequest(learnerId,oldPassword,newPassword))
       
         
        } catch (error) {
          console.error('Error updating password:', error);
          setError('Old password is incorrect'); // Set the error state to display the message
        }
      };
     
 
    return (
   <>
       <LearnerNavbar/>
        <div className="d-flex justify-content-center align-items-center background" style={{ height: '100vh' , }}>
           
            <Card style={{ width: '24rem', backgroundColor:'#27235c', color:"white" }}>
               
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Old Password:</Form.Label>
                            <Form.Control
                                type="password"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)  }
                               
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>New Password:</Form.Label>
                            <Form.Control
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                               
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Confirm New Password:</Form.Label>
                            <Form.Control
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                               
                            />
                        </Form.Group>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <Button style={{background:"#97247E"}} type="submit">
                            Change Password
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
        </>
       
    );
};
 
export default PasswordChange;

