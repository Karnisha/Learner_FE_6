import React, { useState, useEffect } from 'react';
import { validateRegistrationForm } from '..//../utils/LearnerValidations/RegisterValidation';
import '..//..//Styles/Learner/Register.css';
// import {  sendOTP } from '../../middleware/RegisterApi.js';
import Select from 'react-select';
import {  userDataRequest, userDataSuccess } from '../../actions/LearnerAction/RegisterAction';
import { useDispatch,useSelector } from 'react-redux';
import { FaInfoCircle } from 'react-icons/fa';
import { userEmailRequest } from '../..//actions/LearnerAction/Fetchemail';
import { userOTPRequest } from '../../actions/LearnerAction/OTPAction';






const options = [
    { value: 'C++', label: 'C++' },
    { value: 'LINQ', label: 'LINQ' },
    { value: '.NET', label: '.NET' },
    { value: 'C#', label: 'C#' },
    { value: 'JAVA', label: 'JAVA' },
    { value: 'RUST', label: 'RUST' },
];

export default function Register() {


    const [errors, setErrors] = useState({});
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [showOTP, setShowOTP] = useState(false);
    const [enteredOTP, setEnteredOTP] = useState('');
    const [emailVerified, setEmailVerified] = useState(false);
    const [showPasswordRules, setShowPasswordRules] = useState(false);
    const [timer, setTimer] = useState(120);
    const [errorMessage, setErrorMessage] = useState('');
    const [ageError, setAgeError] = useState(false);
    const minutes = Math.floor(timer / 60);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const seconds = timer % 60;
    // const [registrationStatus,setRegistrationStatus]= useState(null);
    const [showModal, setShowModal] = useState(false);
    const [verifyOTP, setVerifyOTP] = useState('');
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        dob: '',
        email: '',
        otp: '',
        contactNumber: '',
        password: '',
        stream: '',
        role:'Learner',
       
    });

    const handlePasswordIconHover = () => {
        setShowPasswordRules(true);
    };

    const handlePasswordLeave = () => {
        setShowPasswordRules(false);
    };

    const dismissAlert = () => {
        setShowSuccessAlert(false);
    };

    const dispatch = useDispatch();

    const success = useSelector((state) => state.email.email)
    console.log("otp",success);

    useEffect(() => {
        let interval;
        if (showOTP) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [showOTP]);

    useEffect(() => {
        if (timer === 0) {
            setShowOTP(false);
        }
    }, [timer]);

    // const handleSelectChange = (selectedOptions) => {
    //     setSelectedOptions(selectedOptions);
    //     setUserData({...userData, selectedOptions});
    //     setErrors({ ...errors, selectedOptions: '' });
    // };

    const handleSendOTP = () => {

         console.log("userEmail",userData.email);
        if (!/\S+@\S+\.\S+/.test(email)) {
            setErrors({ ...errors, email: 'Invalid email address' });
            return; // Return early if email is invalid
        }

        setShowOTP(true);
        setErrors('');
        setTimer(120);
        handleOTPSubmit();
        //sendOTP(email);
     
        dispatch(userEmailRequest(userData.email));

    };

    const handleOTPChange = (event) => {
        setEnteredOTP(event.target.value);
        setErrors({ ...errors, otp: '' });
    };

    const handleOTPSubmit = (otpp) => {
        setUserData({ ...userData, otp: otpp });
        // console.log("otp handle:",enteredOTP);
        const expectedOTP = success;
        console.log("expected otp",expectedOTP);
        setVerifyOTP(expectedOTP);
    };

    const SubmitOtp = (event) => {
        event.preventDefault();
        console.log("handle:", userData.otp);
        if (enteredOTP === success) {
            setEmailVerified(true);
            setShowOTP(false);
            setErrors({ ...errors, otp: '' });
            setErrors({ ...errors, email: '' });
            dispatch(userOTPRequest(enteredOTP,userData.email));
        } else {
            setErrors({ ...errors, otp: 'Invalid OTP' });
        }
    };

    const handleChange = (e) => {
        setErrorMessage("");
        const { name, value } = e.target || e; // If e.target is undefined, assume it's the selected option
        if (name === 'email') {
            setEmail(value);

            setUserData({ ...userData, email: value });
        } else if (name === 'stream') {
            setUserData({ ...userData, stream: value });
        } else {
            setUserData({ ...userData, [name]: value });
            //dispatch(updateUser({ ...userData, [name]: value }));
        }
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("userData",userData)
        dispatch(userDataRequest(userData))
        const today = new Date();
        const birthDate = new Date(userData.dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        const ageLimit = 18;

        if (age < ageLimit) {
            setAgeError(true);
            setErrorMessage('You must be atleast 18 years old to register');
            return;
        }
        if (!emailVerified) return;
        const validationErrors = validateRegistrationForm(userData);

        if(Object.keys(validationErrors).length > 0)
        {
            setErrors(validationErrors);
            return;
        }

        if (validationErrors && typeof validationErrors === 'object' && Object.keys(validationErrors).length === 0) {
            // Convert stream array to string
            const streamString = Array.isArray(userData.stream) ? userData.stream.map(option => option.value).join(', ') : userData.stream;

            // Create a copy of userData with the stream field as a string
            const updatedUserData = {
                ...userData,
                stream: userData.stream.map(option => option.value).join(", ")
              };
             
             
            console.log("in handle submit", updatedUserData);
   
            // Dispatch the action with the updated user data
            dispatch(userDataRequest(updatedUserData));

            console.log("in handle submit", updatedUserData);
        //    registerUser(userDataStringStream);
            setShowModal(true);
            setShowSuccessAlert(true);
            setTimeout(() => {
                setShowSuccessAlert(false);
            }, 5000);

        } else {

            setErrors(validationErrors || {});
        }
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
        setErrors({ ...errors, gender: '' });
    };

    return (
        <div style={{ height: "100vh" }} class="register">
            <div class="row">
                <div class="col-md-3 register-left">
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                    <h3>Welcome to Relevantz </h3>
                    <h4>Learning Experience Platform</h4>
                    <h6>Gain your knowledge with Relevantz</h6>
                    {/* <input type="submit" name="" value="Login" /><br /> */}
                </div>

                <div class="col-md-9 register-right">

                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active " id="home" role="tabpanel" aria-labelledby="home-tab">

                            <h3 class="register-heading">Registration</h3>
                            <div class="row register-form">
                                <div class="col-md-6">
                                    <div class="form-group">


                                        <input type="text" class="form-control field" placeholder="First Name *" value={userData.firstName} name="firstName" onChange={handleChange} disabled={showOTP} />
                                        {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
                                    </div>
                                    <div class="form-group">
                                        <input type="number" class="form-control" placeholder="Phone Number *" value={userData.contactNumber} name="contactNumber" onChange={handleChange} disabled={showOTP} />
                                        {errors.contactNumber && <div className="text-danger">{errors.contactNumber}</div>}
                                    </div>
                                    <div class="form-group d-flex">
                                        <input type="email" class="form-control" placeholder="Your Email *" value={userData.email} name="email" onChange={handleChange} disabled={showOTP || emailVerified} />
                                        {emailVerified && <span className="text-success">&#10004;</span>}
                                        {!showOTP && !emailVerified && email.trim() !== '' && (<button className='btn btn-primary ms-1 otp' onClick={handleSendOTP}><a>Send OTP</a></button>)}
                                    </div >
                                    {errors.email && <div style={{ marginLeft: "15px" }} className="text-danger">{errors.email}</div>}
                                    {showOTP && !emailVerified && (<div class="form-group">
                                        <input type="text" minlength="10" maxlength="10" name="enteredOTP" class="form-control" placeholder="Enter OTP *" value={enteredOTP} onChange={handleOTPChange} />
                                        <div className='text-muted' style={{ color: 'black' }}>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}remaining</div>
                                        {enteredOTP.length === 6 && <button className='btn btn-primary ms-1 otp' onClick={SubmitOtp}><a>Submit</a></button>}
                                        {errors.otp && <div className="text-danger">{errors.otp}</div>}

                                    </div>
                                    )}
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Password *" value={userData.password} name="password" onChange={handleChange} disabled={showOTP} />
                                        <FaInfoCircle className='password-icon Red-icon' onMouseEnter={handlePasswordIconHover} onMouseLeave={handlePasswordLeave} />
                                        {errors.password && <div className="text-danger">{errors.password}</div>}
                                    </div>
                                    {showPasswordRules && <div className='password-rules'>
                                        <p className='error-message'>Password must be between 8 to 14 characters,must contain one uppercase,must contain one lowercase,and must contain one special character</p>
                                    </div>}


                                    <div class="form-group">
                                        <div class="maxl">
                                            <h6 style={{ marginTop: "25px" }}>Gender:</h6>
                                            <div style={{ marginLeft: "75px", marginTop: "-43px" }}>
                                                <label class="gender radio inline">
                                                    <input type="radio" name="gender" value="male" checked={userData.gender === "male"} onChange={handleChange} disabled={showOTP} />
                                                    <span> Male </span>
                                                </label>
                                                <label class="gender radio inline">
                                                    <input type="radio" name="gender" value="female" checked={userData.gender === "female"} onChange={handleChange} disabled={showOTP} />
                                                    <span> Female </span>
                                                </label>
                                                {/* <label class="gender radio inline">
                                                    <input type="radio" name="gender" value="others" checked={userData.gender === "others"} onChange={handleChange} disabled={showOTP}/>
                                                    <span> Others </span>
                                                </label> */}
                                            </div>
                                        </div>
                                        {errors.gender && <div className="text-danger">{errors.gender}</div>}
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Last Name *" value={userData.lastName} name="lastName" onChange={handleChange} disabled={showOTP} />
                                        {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
                                    </div>

                                    <div class="form-group">
                                        <input type="text" class="form-control" value={userData.dob} name="dob" placeholder="Date Of Birth *" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} max={new Date().toISOString().split('T')[0]} onChange={handleChange} disabled={showOTP} />
                                        {ageError && (<div className='age-error-message'><p className='error-message'>{errorMessage}</p></div>)}
                                        {errors.dob && <div className="text-danger">{errors.dob}</div>}
                                    </div>
                                    <div class="form-group">
                                        <Select
                                            isMulti
                                            name="stream"
                                            options={options}
                                            className="basic-multi-select"
                                            classNamePrefix="stream"
                                            placeholder="Choose your stream"
                                            value={userData.stream}
                                            onChange={(selectedOption) => handleChange({ target: { name: "stream", value: selectedOption } })}

                                        />
                                        {errors.selectedOptions && <div className="text-danger">{errors.selectedOptions}</div>}

                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Confirm Password *" value={userData.confirmPassword} name="confirmPassword" onChange={handleChange} disabled={showOTP} />
                                        {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                                    </div>
                                    <br></br>
                                    <button type="submit" data-testid="ben" className="btnRegister" onClick={handleSubmit} ><a>
                                        Register</a>
                                    </button>

                                    {/* <input type="submit" class="btnRegister" value="Register" onClick={handleSubmit} /> */}
                                </div>
                                {showSuccessAlert && (
                                    <div className='alert alert-success all' role='alert'>Registered successfully!!
                                    </div>
                                )}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}