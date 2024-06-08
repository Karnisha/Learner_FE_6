export const validateRegistrationForm = (userData) => {
    let isValid = true;
    const errors = {};

    if (!userData.firstName.trim()) {
        errors.firstName = 'First Name is required';
        isValid = false;
    } else if (/\s/.test(userData.firstName)) {
        errors.firstName = 'First Name should not contain spaces';
        isValid = false;
    } else if (/\d/.test(userData.firstName)) {
        errors.firstName = 'First Name should not contain numbers';
        isValid = false;
    } else if (/[^A-Za-z]/.test(userData.firstName)) {
        errors.firstName = 'First Name should not contain special characters';
        isValid = false;
    }

    if (!userData.lastName.trim()) {
        errors.lastName = 'Last Name is required';
        isValid = false;
    } else if (/\s/.test(userData.lastName)) {
        errors.lastName = 'Last Name should not contain spaces';
        isValid = false;
    } else if (/\d/.test(userData.lastName)) {
        errors.lastName = 'Last Name should not contain numbers';
        isValid = false;
    } else if (/[^A-Za-z]/.test(userData.lastName)) {
        errors.lastName = 'Last Name should not contain special characters';
        isValid = false;
    }

    if (!userData.gender) {
        errors.gender = 'Gender is required';
        isValid = false;
    }

    if (!userData.dob) {
        errors.dob = 'Date of Birth is required';
        isValid = false;
    }
    
    if (!userData.email) {
        errors.email = 'Email is required';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
        errors.email = 'Invalid email address';
        isValid = false;
    }
    
    if (!userData.contactNumber) {
        errors.contactNumber = 'Contact Number is required';
        isValid = false;
    } else if (!/^(91|0)?[6-9][0-9]{9}$/.test(userData.contactNumber)) {
        errors.contactNumber = 'Invalid contact number';
        isValid = false;
    }

    if (!userData.password) {
        errors.password = 'Password is required';
        isValid = false;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/.test(userData.password)) {
        errors.password = 'Password must be between 8 to 14 characters,must contain one uppercase,must contain one lowercase,and must contain one special character';
        isValid = false;
    }

    if (!userData.confirmPassword) {
        errors.confirmPassword = 'Confirm Password is required';
        isValid = false;
    } else if (userData.confirmPassword !== userData. password) {
        errors.confirmPassword = 'Passwords do not match';
        isValid = false;
    }

    if (userData.stream.length === 0 || !userData.stream) {
        errors.selectedOptions = 'Please select at least one option';
        isValid = false;
      }
    
   

    return errors;
};

