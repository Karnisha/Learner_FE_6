// import React, { useEffect } from 'react';
// import { Container, Col, Row } from 'react-bootstrap';
// import '../Styles/Admincourse.css';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material'
// import htmlcourseimage from '../assets/Images/Htmlcourse.webp'
// import csscourseimage from '../assets/Images/csscourse.jpg'
// import bootstrapcourseimage from '../assets/Images/bootstrapcourse.jpg'
// // import Navbar from '../components/Navbar';
// // import Sidebar from '../components/Sidebar';
// import { fetchCoursesRequest } from '../actions/courseAction';
// import { connect } from 'react-redux';


// const Admincourse = ({fetchCourses,courses}) => {

//     useEffect(()=>
//     {
//         fetchCourses();
//     },[fetchCourses]);


// // const mapStateprops=(state)=>(
// //     {
// //         courses:state.courseReducer.courses,
// //     }
// // );

// // const mapDispatchTopProps=(dispatch)=({
// //     fetchCourses:()=>dispatch(fetchCoursesRequest()),
// // });

// // export default connect(mapStateprops,mapDispatchTopProps)(Admincourse);


//     return (
//         <>
//             <div>
//                 <Container  fluid>
//                     {/* <Navbar/> */}
//                     <h1>Navbar</h1>
//                 </Container>
//             </div>
//             <div className='body'>
//                 <Container  fluid  className='coursepagebody'>
//                     <Row>
//                         <Col xs={12} md={2} className='sidebar' >
//                             <h2>Sidebar</h2>
//                             {/* <Sidebar/> */}
//                         </Col>
//                         <Col xs={12} md={10} className='landingcoursepage'>
//                             <div className='scrollable-content'>
//                             <Card sx={{ maxWidth: 300 }}>
//                                 <CardActionArea>
//                                     <CardMedia
//                                         component="img"
//                                         height="150"
//                                         image={htmlcourseimage}
//                                         alt="green iguana"
//                                     />
//                                     <CardContent>
//                                         <Typography gutterBottom variant="h5" component="div">
//                                             Lizard
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary">
//                                             Lizards are a widespread group of squamate reptiles, with over 6,000
//                                             species, ranging across all continents except Antarctica
//                                         </Typography>
//                                     </CardContent>
//                                 </CardActionArea>
//                             </Card>
//                             <Card sx={{ maxWidth: 300 }}>
//                                 <CardActionArea>
//                                     <CardMedia
//                                         component="img"
//                                         height="150"
//                                         image={csscourseimage}
//                                         alt="green iguana"
//                                     />
//                                     <CardContent>
//                                         <Typography gutterBottom variant="h5" component="div">
//                                             Lizard
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary">
//                                             Lizards are a widespread group of squamate reptiles, with over 6,000
//                                             species, ranging across all continents except Antarctica
//                                         </Typography>
//                                     </CardContent>
//                                 </CardActionArea>
//                             </Card>
//                             <Card sx={{ maxWidth: 300 }}>
//                                 <CardActionArea>
//                                     <CardMedia
//                                         component="img"
//                                         height="150"
//                                         image={bootstrapcourseimage}
//                                         alt="green iguana"
//                                     />
//                                     <CardContent>
//                                         <Typography gutterBottom variant="h5" component="div">
//                                             Lizard
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary">
//                                             Lizards are a widespread group of squamate reptiles, with over 6,000
//                                             species, ranging across all continents except Antarctica
//                                         </Typography>
//                                     </CardContent>
//                                 </CardActionArea>
//                             </Card>
//                             <Card sx={{ maxWidth: 300 }}>
//                                 <CardActionArea>
//                                     <CardMedia
//                                         component="img"
//                                         height="150"
//                                         image={bootstrapcourseimage}
//                                         alt="green iguana"
//                                     />
//                                     <CardContent>
//                                         <Typography gutterBottom variant="h5" component="div">
//                                             Lizard
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary">
//                                             Lizards are a widespread group of squamate reptiles, with over 6,000
//                                             species, ranging across all continents except Antarctica
//                                         </Typography>
//                                     </CardContent>
//                                 </CardActionArea>
//                             </Card>
//                             <Card sx={{ maxWidth: 300 }}>
//                                 <CardActionArea>
//                                     <CardMedia
//                                         component="img"
//                                         height="150"
//                                         image={bootstrapcourseimage}
//                                         alt="green iguana"
//                                     />
//                                     <CardContent>
//                                         <Typography gutterBottom variant="h5" component="div">
//                                             Lizard
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary">
//                                             Lizards are a widespread group of squamate reptiles, with over 6,000
//                                             species, ranging across all continents except Antarctica
//                                         </Typography>
//                                     </CardContent>
//                                 </CardActionArea>
//                             </Card>
//                             <Card sx={{ maxWidth: 300 }}>
//                                 <CardActionArea>
//                                     <CardMedia
//                                         component="img"
//                                         height="150"
//                                         image={bootstrapcourseimage}
//                                         alt="green iguana"
//                                     />
//                                     <CardContent>
//                                         <Typography gutterBottom variant="h5" component="div">
//                                             Lizard
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary">
//                                             Lizards are a widespread group of squamate reptiles, with over 6,000
//                                             species, ranging across all continents except Antarctica
//                                         </Typography>
//                                     </CardContent>
//                                 </CardActionArea>
//                             </Card>
//                             <Card sx={{ maxWidth: 300 }}>
//                                 <CardActionArea>
//                                     <CardMedia
//                                         component="img"
//                                         height="150"
//                                         image={bootstrapcourseimage}
//                                         alt="green iguana"
//                                     />
//                                     <CardContent>
//                                         <Typography gutterBottom variant="h5" component="div">
//                                             Lizard
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary">
//                                             Lizards are a widespread group of squamate reptiles, with over 6,000
//                                             species, ranging across all continents except Antarctica
//                                         </Typography>
//                                     </CardContent>
//                                 </CardActionArea>
//                             </Card>

//                             <Card sx={{ maxWidth: 300 }}>
//                                 <CardActionArea>
//                                     <CardMedia
//                                         component="img"
//                                         height="150"
//                                         image={bootstrapcourseimage}
//                                         alt="green iguana"
//                                     />
//                                     <CardContent>
//                                         <Typography gutterBottom variant="h5" component="div">
//                                             Lizard
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary">
//                                             Lizards are a widespread group of squamate reptiles, with over 6,000
//                                             species, ranging across all continents except Antarctica
//                                         </Typography>
//                                     </CardContent>
//                                 </CardActionArea>
//                             </Card>
//                             <Card sx={{ maxWidth: 300 }}>
//                                 <CardActionArea>
//                                     <CardMedia
//                                         component="img"
//                                         height="150"
//                                         image={bootstrapcourseimage}
//                                         alt="green iguana"
//                                     />
//                                     <CardContent>
//                                         <Typography gutterBottom variant="h5" component="div">
//                                             Lizard
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary">
//                                             Lizards are a widespread group of squamate reptiles, with over 6,000
//                                             species, ranging across all continents except Antarctica
//                                         </Typography>
//                                     </CardContent>
//                                 </CardActionArea>
//                             </Card>
//                             </div>

//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//         </>
//     );
// };

// export default Admincourse;




import React, { useEffect } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import '../Styles/Admincourse.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { connect } from 'react-redux';
import { fetchCoursesRequest } from '../actions/courseAction';
import Navigationbar from '../components/Navbar';
import { Link } from 'react-router-dom';
const Admincourse = ({ fetchCourses, courses }) => {

    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);




    if (courses.length === 0) {
        return <div>Loading courses...</div>;
    }
    
    return (
        <>

            <Container fluid className='coursepagebody'>
                <Row className='mb-5'>
                    <Col xs={12}>
                        {/* <Navigationbar /> */}
                    </Col>
                </Row>
                <Row className='pt-3 contentbody'>
                    {/* <Col xs={12} md={1} className='sidebar  mb-5'>

                    </Col> */}
                    <Col xs={12} md={12} className='landingcoursepage  mb-5'>
                        <Row>
                            <Col><b><h4>Recently Added Courses</h4></b></Col>
                            <Col className='text-end  mt-2'><Link to='/adminviewallcourse'><Button variant="outline-primary">View All courses</Button></Link></Col>
                        </Row>
                        <div className='scrollable-content'>
                            {courses.map((course) => (
                                // <Card key={index} sx={{ maxWidth: 250, maxHeight: 250, mb:5,borderRadius:1}}>

                                <Card key={course.courseId} sx={{maxWidth: 250, maxHeight: 300, mb:5,borderRadius:2,display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            // width="80"
                                            image={course.thumbnailimage}
                                            alt={course.title || 'Course image'}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {course.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {course.category}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

const mapStateToProps = (state) => ({
    courses: state.course.courses,
});

const mapDispatchToProps = (dispatch) => ({
    fetchCourses: () => dispatch(fetchCoursesRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Admincourse);

