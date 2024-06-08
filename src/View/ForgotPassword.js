import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { emailRegex, passwordRegex, validationMessages } from '../utils/Validation';
import { useDispatch, useSelector } from 'react-redux';
import { updatePassword } from '../actions/ForgotPasswordAction';
import Relevantz from '../assets/Images/Relevantz.png';

function ForgotPassword() {
    const dispatch = useDispatch();
    const location = useLocation();
    const { errors = {} } = useSelector((state) => state);
    const email = location.state?.email || '';
    

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        dispatch(updatePassword(data));
        console.log('called...');
        
    };

    return (
        <div className='login-app'>
            <div className='login-container'>
                <div className="loginform-container">
                    <div className="login-header">
                        <img src={Relevantz} alt="Logo" />
                    </div>
                    <form onSubmit={onSubmit}>
                        <div>
                            <input
                                {...register('email', {
                                    required: validationMessages.email.required,
                                    pattern: {
                                        value: emailRegex,
                                        message: validationMessages.email.pattern
                                    }
                                })}
                                type='text'
                                placeholder='Email'
                                value={email}
                                readOnly
                            />
                        </div>
                        <p>{errors.email?.message}</p>
                        <div>
                            <input
                                {...register('receivepassword', {
                                    required: validationMessages.password.required,
                                    pattern: {
                                        value: passwordRegex,
                                        message: "Invalid password"
                                    }
                                })}
                                type='password'
                                placeholder='Received Password'
                            />
                        </div>
                        <p>{errors.receivepassword?.message}</p>
                        <div>
                            <input
                                {...register('newpassword', {
                                    required: validationMessages.password.required,
                                    minLength: {
                                        value: 14,
                                        message: validationMessages.password.minLength
                                    },
                                    pattern: {
                                        value: passwordRegex,
                                        message: validationMessages.password.pattern
                                    }
                                })}
                                type='password'
                                placeholder='New Password'
                            />
                        </div>
                        <p>{errors.newpassword?.message}</p>
                        <div className='button-login'>
                            <button className='btn'>Update password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;