export const validatePassword = (newPassword, oldPassword,confirmPassword) => {
    const errors = [];
   
    if (!newPassword ) {
      errors.push("New password is required.");
    }
 
    if (!oldPassword){
      errors.push("Old password is required");
    }
 
 
    if (!confirmPassword){
      errors.push("Confirm password is required");
    }
    if (newPassword === oldPassword) {
      errors.push("New password must be different from the old password.");  //pass
    }
    if (newPassword.length < 8 || newPassword.length > 14) {
      errors.push("Password must be 8-14 characters long.");      // pass
    }
    if (!/[A-Z]/.test(newPassword)) {
      errors.push("Password must contain at least one uppercase letter.");  //pass
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
      errors.push("Password must contain at least one special character.");  // pass
    }
    if (!/[0-9]/.test(newPassword)) {
      errors.push("Password must contain at least one number."); //pass
    }
    if (newPassword != confirmPassword){
      errors.push("New password and confirm password should be same")
 
    }
    return errors;
  };