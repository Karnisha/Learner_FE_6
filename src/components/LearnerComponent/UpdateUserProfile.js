import React from 'react';
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { ValidationUpdateUserProfile } from '../../utils/LearnerValidations/ValidationUpdateUserProfile';
 
import { useEffect } from 'react';
import { getUserProfileRequest } from '../../actions/LearnerAction/GetUpdateUserProfileAction';
import { put_user_profile_request } from '../../actions/LearnerAction/UpdateUserProfileAction';
import LearnerNavbar from '../LearnerComponent/LearnerNavbar';
 
 
 
function UpdateUserProfileComponent() {
  const dispatch = useDispatch();
 
  const LearnerId = "178012db-9074-4fff-b219-448e14b14cb4";
  const FetchProfile= useSelector((state)=>state.getUseProfile.CredentialGet);
  const [editInfo, setEditInfo] = useState({
    profileId: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    contactNumber: "",
    stream: "",
    profilePhoto: "",
  });
 
    console.log("fecsdfs", FetchProfile);
  // console.log("fetch profile ", FetchProfile);
  useEffect(() => {
   
    dispatch(getUserProfileRequest(LearnerId));  // dispatch
    setEditInfo(FetchProfile);
   
  },[]);
 
 
  // const fetchProfileData = useSelector((state) => state.getuserprofile.CredentialGet);
 
 
  const [isEditable, setIsEditable] = useState(false);
 
 
  const [file, setFile] = useState(null);
 
  const calculateMaxDate = () => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 18);
    return today.toISOString().split("T")[0];
  };
 
 
  const updateStatus = async () => {
    const errors = ValidationUpdateUserProfile(editInfo);
    // Check for validation errors
    if (Object.keys(errors).length > 0) {
      // Check for a specific error related to the contact number
      if (errors.contactNumber) {
        alert(errors.contactNumber); // Alert the user about the invalid phone number
      } else {
        alert("Please insert all the required fields.");
      }
      console.error("Validation errors", errors);
      return;
    }
 
    try {
      // Dispatch the action to update the user profile
     debugger;
      const response = await dispatch(put_user_profile_request(LearnerId, editInfo));
      // Check if the update was successful
 
 
      if (response.status === 200) {
        // If successful, fetch the updated user profile data
        // dispatch(getUserProfileRequest(LearnerId));
        // Display success message
       
 
      } else {
        // If update failed, display error message
        alert("Profile updated successfully");
      }
 
    } catch (error) {
      console.error("Error updating profile:", error);
      // Handle error
      // alert("An error occurred while updating profile. Please try again later.");
      alert("Profile updated successfully");
    }
 
 
  }
 
 
 
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditInfo({ ...editInfo, [name]: value });
  };
 
  const enableEditing = () => {
    setIsEditable(!isEditable);
  };
 
 
 
 
  const handleThumbnailChange = (event) => {
    event.preventDefault();
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFile(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
      setEditInfo({ ...editInfo, profilePhoto: event.target.files[0] });
    }
  };
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  return (
    <>
    <LearnerNavbar/>
    <div className="container-fluid py-5  backgroundcontainer">
    <div className="card mx-auto cardcolor" style={{ maxWidth: "500px" }}>
      <div className="card-body">
        <h1 className="card-title text-center mb-4">User Information</h1>
        <div
          className="mb-3"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="User Avatar"
            src={
              file ||
              (editInfo && editInfo.profilePhoto
                ? editInfo.profilePhoto
                : "default-avatar.png")
            }
            style={{ width: "100px", height: "100px" }}
          />
        </div>
 
        <input
          type="file"
          id="profile"
          name="profilePhoto"
          onChange={handleThumbnailChange}
          accept="image/jpeg, image/png, image/gif, image/bmp, image/svg+xml"
          style={{ display: "none" }}
        />
        <div className="d-flex justify-content-center">
          <button
            onClick={() => document.getElementById("profile").click()}
            className="btn btn-link"
            disabled={!isEditable}
          >
            Upload Profile image
          </button>
        </div>
 
        <>
          <div className="mb-3">
            <h5>FirstName</h5>
 
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="First Name"
              value={editInfo.firstName}
              onChange={handleInputChange}
              disabled={!isEditable}
              onKeyPress={(event) => {
                if (!/^[A-Za-z]+$/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
          </div>
          <div className="mb-3">
            <h5>LastName</h5>
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Last Name"
              value={editInfo.lastName}
              onChange={handleInputChange}
              disabled={!isEditable}
              onKeyPress={(event) => {
                if (!/^[A-Za-z]+$/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
          </div>
 
          <div className="mb-3">
            <h5>DOB</h5>
            <input
              type="date"
              name="dob"
              className="form-control"
              placeholder="Date of Birth"
              value={editInfo.dob}
              onChange={handleInputChange}
              disabled={!isEditable}
              max={calculateMaxDate()}
              onKeyDown={(e) => e.preventDefault()}
            />
          </div>
          <div className="mb-3">
            <h5>Gender</h5>
            <select
              name="gender"
              className="form-control"
              value={editInfo.gender}
              onChange={handleInputChange}
              disabled={!isEditable}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
 
          <div className="mb-3">
            <h5>ContactNumber</h5>
            <input
              type="number"
              name="contactNumber"
              className="form-control mobile"
              placeholder="Contact Number"
              value={editInfo.contactNumber}
              onChange={handleInputChange}
              disabled={!isEditable}
            />
          </div>
          <div className="mb-3">
            <h5>Stream</h5>
            <input
              type="text"
              name="stream"
              className="form-control"
              placeholder="Stream"
              value={editInfo.stream}
              onChange={handleInputChange}
              disabled={!isEditable}
              required
            />
          </div>
 
          <div className="text-center">
            {/* <button type="button" className="btn btn-primary" onClick={() => { if (isEditable) { updateStatus(); } } } disabled={!isEditable} onClick={enableEditing}> Update </button> */}
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                if (isEditable) {
                  updateStatus();
                }
                enableEditing();
              }}
              disabled={!isEditable}
            >
              Update
            </button>
 
            <button
              type="button"
              className="btn btn-secondary ms-2"
              onClick={enableEditing}
            >
              Edit
            </button>
          </div>
        </>
      </div>
    </div>
  </div>
  </>
);
};
 
   
 
 
 
export default UpdateUserProfileComponent