import LearnerNavbar from '../LearnerComponent/LearnerNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchCoursesRequest } from '../../actions/LearnerAction/LearnerGetCourseAction';
import { enrollRequest } from '../../actions/LearnerAction/LearnerPostEnrollAction';
import '../../Styles/Learner/LearnerCourse.css';
import { FetchuserDataRequest } from '../../actions/LearnerAction/FetchRegisterAction';




const LearnerDashboard = ({ enrolledCourses, loading, error, search }) => {
  const courses = useSelector((state) => state.fetchcourse.courses);
  const dispatch = useDispatch();
  // const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const selectedStream = useSelector((state) => state.fetchlearner.userData);
  console.log("Selected", selectedStream);
  const filteredCourses = courses.filter(course => course.title === selectedStream);
  console.log("filteredcourse",filteredCourses);

  console.log("dashboard", enrolledCourses)

  const learnerId = sessionStorage.getItem('UserSessionID') // Retrieve learner ID from session storage
  console.log('learnerid', learnerId);

  useEffect(() => {

    dispatch(fetchCoursesRequest(learnerId));
    fetchuser(learnerId);
  }, [learnerId]);

  // useEffect(() => {
  //   setFilteredCourses(
  //     courses.filter(course =>
  //       course.title.toLowerCase().includes(search.toLowerCase())
  //     )
  //   ); 
  // }, [search, courses]);
const fetchuser = async (learnerId) => {
  console.log("fetcheruser",learnerId);
  dispatch(FetchuserDataRequest(learnerId));
};



  const [open, setOpen] = React.useState(false);

  const handleOpen = (course) => {
    setOpen(true);
    setSelectedCourse(course);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
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

  // if (filteredCourses.length === 0) {
  //   return <div><h3>No results found.</h3></div>;
  // }


  return (
    <div>
      <LearnerNavbar />

      <div className="container-fluid Servicemain">
        <div className="row course-container" >
          {courses.map((course, index) => (
            <div className="col-sm-6" key={index} >
              <Card sx={{ display: 'flex', width: 450, marginLeft: 25, marginTop: 15, color: 'grey' }} >
                <CardMedia

                  component="img"
                  sx={{ width: 150, marginLeft: 1 }}
                  image={course.thumbnailimage}
                  alt={course.title}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto', marginLeft: 10 }}>
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

export default connect(mapStateToProps)(LearnerDashboard);

