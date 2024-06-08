import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import '../Styles/Loginpage.css';
import Relevantz from '../assets/Images/Relevantz.png'
import loginUser from '../middleware/Admin/apiLogin'
import { Link } from 'react-router-dom';
import { emailRegex, passwordRegex, validationMessages } from '../utils/Validation';
import { loginRequest } from '../actions/loginAction';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {


  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate=useNavigate(); 

  const isSuccessadmin  = useSelector((state) => state.user.isSuccessadmin);

  const  isSuccessuser  = useSelector((state) => state.user.isSuccessuser)

  useEffect(() => {
    if (isSuccessadmin) {
      navigate('/admindashboard'); // Navigate to the next page on success
    }
  }, [isSuccessadmin, navigate]);


  useEffect(() => {
    if (isSuccessuser) {
      
      navigate('/LearnerDashboard'); 
      
  // Navigate to the next page on success
    }
  }, [isSuccessuser, navigate]);



  const onSubmit = data => {

    dispatch(loginRequest(data));
  };
  return (
    <>
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
              <div>
                <input
                  {...register('password', {
                    required: validationMessages.password.required,
                    minLength: {
                      value: 8,
                      message: validationMessages.password.minLength
                    },
                    pattern: {
                      value: passwordRegex,
                      message: validationMessages.password.pattern
                    }
                  })}
                  type='password'
                  placeholder='Password'
                />
              <p>{errors.password?.message}</p>
              </div>
              <Link to={'/email'} >Forgot password?</Link>
              <div className='button-login'>
                <button className='btn' >Login</button>
              </div>
              <Link to={'/RegisterView'} >Create a new account</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
