import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../../Styles/Learner/GetEnrollment.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchenrollCourse,selectCourse,} from "../../actions/LearnerAction/EnrolledCourseAction";
import { Link } from "react-router-dom";
import { Navbar, Row } from "react-bootstrap";
import logo from '../../../src/Images/logo.png'
import LearnerNavbar from '..//../components/LearnerComponent/LearnerNavbar';



const id = sessionStorage.getItem('UserSessionID')

// import Navbar1 from "../LearnerComponent/Navbar1";

const GetEnrollment = () => {
  const dispatch = useDispatch();
  //const id = "482a2888-c470-4f1e-b7c0-4bb725d8ff6a"; // The specific learnerId
  const viewcourse = useSelector((state) => state.enroll.course[0]);


  useEffect(() => {
    dispatch(fetchenrollCourse(id));
  }, [dispatch]);

  const navigate = useNavigate();

  const handleNavigation = (course) => (e) => {
    e.preventDefault();
    console.log(course.enrolledCourseId);
    dispatch(selectCourse(course)); // Dispatch the selectCourse action with the selected course
    navigate(`/ViewTopics`);
  };

  return (
    <div>





      <LearnerNavbar />


      {/* <div> <h3>YourEnrolled Courses:</h3></div> */}



      <div className="box d-block">
        {viewcourse && viewcourse.map((course, index) => (
          <Link key={index} id="Card">
            <Card
              style={{ height: '300px' }}
              id="Card"
              onClick={handleNavigation(course)}
            >
              <CardContent id="cardcontent">
                <div className="card-hori d-flex">
                  <div>
                    <img
                      id="thumbnail"
                      src={course.thumbnailimage}
                      alt="Course Thumbnail"
                      height={150}
                      width={100}
                    />
                    <Typography variant="h5" component="h2">
                      {course.enrolledCoursename}
                    </Typography>
                  </div>

                  <div id="coursedetails">

                    <Typography color="textSecondary"><h3> COURSE DESCRIPTION:</h3>
                      {course.enrolledcoursedescription}
                    </Typography>
                    <div className="level">
                      <Typography color="textSecondary"><h5>Category: {course.enrolledcoursecategory}</h5>

                      </Typography>
                      <Typography color="textSecondary"><h5>Level:  {course.enrolledcourselevels}</h5>

                      </Typography>
                    </div>

                  </div>

                </div>

              </CardContent>
            </Card>
          </Link>
        ))
        }
      </div>
    </div>

  );
};

export default GetEnrollment;