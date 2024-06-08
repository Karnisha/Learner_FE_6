import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import '../../Styles/Learner/LearnerCourse.css';
import { fetchCoursesRequest } from '../../actions/LearnerAction/LearnerGetCourseAction';
import { enrollRequest } from '../../actions/LearnerAction/LearnerPostEnrollAction';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import LearnerNavbar from '../LearnerComponent/LearnerNavbar';

const CourseComponent = ({ enrolledCourses, loading, error, search }) => {
  const courses = useSelector((state) => state.fetchcourse.courses);
  console.log("courses = useSelector",courses);
  const dispatch = useDispatch();
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const learnerId = sessionStorage.getItem('UserSessionID'); // Retrieve learner ID from session storage

  useEffect(() => {
    console.log("effect");
    dispatch(fetchCoursesRequest(learnerId));
  }, [learnerId]);

  useEffect(() => {
    setFilteredCourses(
      courses.filter(course =>
        course.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, courses]);


  const [open, setOpen] = React.useState(false);

  const handleOpen = (course) => {
    setOpen(true);
    setSelectedCourse(course);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleEnrollCourse = (courseId) => {
    
    const maxCourses = 3;
    const learnerCourses = enrolledCourses.filter(course => course.learnerId === learnerId);

    if (learnerCourses.length >= maxCourses) {
      alert('You have reached the course enrollment limit!');
      return;
    }

    const alreadyEnrolled = enrolledCourses.some(course => course.courseId === courseId && course.learnerId === learnerId);

    if (alreadyEnrolled) {
      alert('You have already enrolled in this course!');
      return;
    }

    dispatch(enrollRequest(courseId, learnerId));
  };

  const isEnrolled = (courseId) => {
    if (!Array.isArray(enrolledCourses)) {
      console.error("enrolledCourses is not an array", enrolledCourses);
      return false;
    }
    return enrolledCourses.some(course => course.courseId === courseId && course.learnerId === learnerId);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (filteredCourses.length === 0) {
    return <div><h3>No results found.</h3></div>;
  }
  return (
    <div>
     
      <div className="container-fluid Servicemain">
        <div className="row course-container" >
          {filteredCourses.map((course, index) => (
            <div className="col-sm-6" key={index} >
              <Card sx={{ display: 'flex', width:480, marginLeft:10,marginTop:15}} >
                <CardMedia
                 
                  component="img"
                  sx={{ width: 120,marginLeft:1 }}
                  image={course.thumbnailimage}
                  alt={course.title}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                  <CardContent sx={{ flex: '1 0 auto' , marginLeft:10}}>
                    <Typography component="div" variant="h5" >
                     Course: {course.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                     Level: {course.level}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="div">
                     Category: {course.category}
                    </Typography>
                    <Button onClick={() => handleOpen(course)}>View More</Button>
                  </CardContent>
                </Box>
              </Card>
              <Modal
                open={open && selectedCourse && selectedCourse.courseId === course.courseId}
                onClose={handleClose}
                aria-labelledby="course-modal-title"
                aria-describedby="course-modal-description"
              >
                <Box sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 400,
                  bgcolor: 'background.paper',
                  border: '2px solid #000',
                  boxShadow: 24,
                  pt: 2,
                  px: 4,
                  pb: 3,
                }}>
                  <Typography id="course-modal-title" variant='h6' component='h2'>{course.title}</Typography>
                  <Typography id="course-modal-description" variant="body1" color="text.secondary">
                    {course.description}
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    <Button onClick={handleClose}>Close</Button>
                    <button
                    className="btn btn-lg"
                    onClick={() => handleEnrollCourse(course.courseId)}
                    disabled={course.enrollStatus} // Disable if already enrolled
                  >
                    {course.enrollStatus ? 'Enrolled' : 'Enroll'}
                  </button>
                  </Stack>
                </Box>
              </Modal>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  enrolledCourses: state.enrolledCourses.enrolledCourses || [], // Ensure it's an array
  loading: state.enrolledCourses.loading,
  error: state.enrolledCourses.error,
});

export default connect(mapStateToProps)(CourseComponent);



// //Raj

// import React, { useEffect, useState } from 'react';
// import { connect, useDispatch, useSelector } from 'react-redux';
// import '../../Styles/Learner/LearnerCourse.css';
// import { fetchCoursesRequest } from '../../actions/LearnerAction/LearnerGetCourseAction';
// import { enrollRequest } from '../../actions/LearnerAction/LearnerPostEnrollAction';
// import { fetchenrollCourse } from '../../actions/LearnerAction/EnrolledCourseAction';
 
// const CourseComponent = ({ enrolledCourses, loading, error, search }) => {
//   const courses = useSelector((state) => state.fetchcourse.courses);
//   const selectedstore= useSelector((state)=>state.fetchcourse.courses);
//   const dispatch = useDispatch();
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   const learnerId = sessionStorage.getItem('UserSessionID'); // Retrieve learner ID from session storage
 
//   // useEffect(() => {
//   //   dispatch(fetchCoursesRequest());
//   // }, [dispatch]);
 
//   useEffect(() => {
//     debugger
//     dispatch(fetchCoursesRequest(learnerId));
//     console.log("selectedstore courses",selectedstore);
//     // if (learnerId) {
//     //   dispatch(fetchenrollCourse(learnerId)); // Fetch enrolled courses on mount
   
//   }, [learnerId]);
// console.log("learnercoursecomponent:",learnerId)
//   useEffect(() => {
//     console.log(courses)
//     setFilteredCourses(
//       courses.filter(course =>
//         course.title.toLowerCase().includes(search.toLowerCase())
//       )
//     );
//   }, [search, courses]);
 
//   const handleEnrollCourse = (courseId) => {
//     const maxCourses = 3;
//     const learnerCourses = enrolledCourses.filter(course => course.learnerId === learnerId);
 
//     if (learnerCourses.length >= maxCourses) {
//       alert('You have reached the course enrollment limit!');
//       return;
//     }
 
//     const alreadyEnrolled = enrolledCourses.some(course => course.courseId === courseId && course.learnerId === learnerId);
 
//     if (alreadyEnrolled) {
//       alert('You have already enrolled in this course!');
//       return;
//     }
 
//     dispatch(enrollRequest(courseId, learnerId)); // Pass learnerId to the enrollRequest action
//   };
 
//   const isEnrolled = (courseId) => {
//     if (!Array.isArray(enrolledCourses)) {
//       console.error("enrolledCourses is not an array", enrolledCourses);
//       return false;
//     }
//     return enrolledCourses.some(course => course.courseId === courseId && course.learnerId === learnerId);
//   };
 
//   useEffect(() => {
//     if (enrolledCourses.length > 0) {
//         alert('Enrollment successful!');
 
//     }
// }, [enrolledCourses]);
 
//   if (loading) {
//     return <div>Loading...</div>;
//   }
 
//   if (filteredCourses.length === 0) {
//     return <div><h3>No results found.</h3></div>;
//   }
 
//   return (
//     <div>
//       <div className="container-fluid Servicemain">
//         <div className="text-center">
//           {/* Your other components or content */}
//         </div>
//         <div className="row">
//           {filteredCourses.map((course, index) => (
//             <div className="col-sm-4" key={index}>
//               <div className="panel panel-default text-center">
//                 <div className="panel-heading">
//                   <img src={course.thumbnailimage} style={{ width: 100 }} alt={course.title} />
//                 </div>
//                 <div className="panel-body">
//                   <h3>{course.title}</h3>
//                   <p>{course.description}</p>
//                 </div>
//                 <div className="panel-footer">
//                   <p>Advanced Level</p>
//                   <h5>{course.duration} months</h5>
//                   <button
//                     className="btn btn-lg"
//                     onClick={() => handleEnrollCourse(course.courseId)}
//                     disabled={course.enrollStatus} // Disable if already enrolled
//                   >
//                     {course.enrollStatus ? 'Enrolled' : 'Enroll'}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
 
// const mapStateToProps = (state) => ({
//   enrolledCourses: state.enrolledCourses.enrolledCourses || [], // Ensure it's an array
//   loading: state.enrolledCourses.loading,
//   error: state.enrolledCourses.error,
// });
 
// export default connect(mapStateToProps)(CourseComponent);

