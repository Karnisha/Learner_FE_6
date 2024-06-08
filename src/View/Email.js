import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { emailRegex, validationMessages } from '../utils/Validation';
import { submitEmail } from '../actions/EmailAction';
import { useDispatch } from 'react-redux';
import Relevantz from '../assets/Images/Relevantz.png';
import '../Styles/Loginpage.css';

function Email() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        debugger
        dispatch(submitEmail(data.email))
        .then((response)=>
        {
            debugger
            if(response.data !==false)
            {
                setTimeout(() => {
                    navigate('/forgotpassword', { state: { email: data.email } });
                }, 2000);
            }
        }).catch((error)=>
        {
            console.error(error);
        });
        
       
    };

    return (
        <div className='login-app'>
            <div className='login-container'>
                <div className="loginform-container">
                    <div className="login-header">
                        <img src={Relevantz} alt="Logo" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                            />
                        </div>
                        <p>{errors.email?.message}</p>
                        <div className='button-login'>
                            <button className='btn'>Send Email</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Email;