import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Modal, Button } from 'react-bootstrap';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableContainer, Switch } from '@mui/material';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchallCoursesRequest } from '../actions/Adnimviewcourse';
import { deleteCoursesRequest } from '../actions/Admin/DeletecourseAction';
import Navigationbar from '../components/Navbar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import '../Styles/Adminviewcourse.css';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Link } from 'react-router-dom';


const Adminviewcourse = ({ fetchCourses, deleteCourse, courses }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCourseId, setSelectedCourseId] = useState(null);


    // State to control the open status of the dialog
    const [open, setOpen] = React.useState(false);
    const [dialogMessage, setDialogMessage] = useState('');

    // Delete Failure Message 
    const istrue = useSelector((state) => state.deletecourse.isdeleted);
    const mes = useSelector((state) => state.deletecourse.message);
    console.log("message", istrue);

    const isfalse = useSelector((state) => state.deletecourse.isnotdelete);
    const failuremessage = useSelector((state) => state.deletecourse.message);
    console.log("failure message", isfalse);


    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (istrue) {
            setDialogMessage(mes);
            setOpen(true);                      
            fetchCourses();
        } else if (isfalse) {
            setDialogMessage(failuremessage);
            setOpen(true);
        }
    }, [istrue, mes, isfalse, failuremessage, fetchCourses]);

    // useEffect(() => {
    //     if (istrue) {
    //         window.alert(mes);
    //         fetchCourses();
    //         // window.location.reload();
    //     }
    // }, [istrue, mes,fetchCourses]);

    // Delete Success Message 


    // useEffect(() => {

    //     if (isfalse) {
    //         window.alert(failuremessage);
    //         // window.location.reload();
    //     }
    // }, [isfalse, failuremessage]);






    // For Fetch course 
    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);

    // Filter by course title 
    useEffect(() => {
        setFilteredCourses(
            courses.filter(course =>
                course.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [courses, searchTerm]);

    const dispatch = useDispatch();

    const handleDeleteClick = (courseId) => {
        setSelectedCourseId(courseId);
        setShowModal(true);
    };

    const confirmDeletion = () => {
        deleteCourse(selectedCourseId);
        setShowModal(false);
    };

    return (
        <>
            <Container fluid>
                <Row className='mt-5'>
                    {/* <Col xs={12} md={1} className='mt-5'></Col> */}
                    <Col xs={12} md={12} className='mt-2'>
                        <Row>
                            <Col xs={12} md={6}>
                                <form className="form-inline my-2 my-lg-0">
                                    <input
                                        className="form-control mr-sm-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </form>
                            </Col>
                        </Row>
                        <Row>
                            <Paper style={{ width: '100%' }}>
                                <TableContainer style={{ maxHeight: 640 }}>
                                    <Table stickyHeader aria-label="sticky table" style={{ backgroundColor: '#f3f3f3' }}>
                                        <TableHead style={{ backgroundColor: 'black' }}>
                                            <TableRow >
                                                <TableCell>Title</TableCell>
                                                <TableCell>Category</TableCell>
                                                <TableCell>Duration</TableCell>
                                                <TableCell>Level</TableCell>
                                                <TableCell>Created Date</TableCell>
                                                <TableCell align='right'>View</TableCell>
                                                <TableCell align='right'>Edit</TableCell>
                                                <TableCell align='right'>Delete</TableCell>
                                                <TableCell align='right'>Enable/Disable</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {filteredCourses.map((course) => (
                                                <TableRow key={course.courseId}>
                                                    <TableCell component="th" scope="row">
                                                        {course.title}
                                                    </TableCell>
                                                    <TableCell>{course.category}</TableCell>
                                                    <TableCell>{course.duration}</TableCell>
                                                    <TableCell>{course.level}</TableCell>
                                                    <TableCell>{course.createdAt}</TableCell>
                                                    <TableCell align='right'><Button><GridViewIcon /></Button></TableCell>
                                                    <TableCell align='right'><Button variant="outlined" color="primary"><Link to={`/admindupdatecourse/${course.courseId}`}><EditIcon /></Link></Button></TableCell>
                                                    <TableCell align='right'>
                                                        <Button variant="danger" color="error" onClick={() => handleDeleteClick(course.courseId)}>
                                                            <DeleteForeverOutlinedIcon />
                                                        </Button>
                                                    </TableCell>
                                                    <TableCell align='right'>
                                                        <Switch
                                                            checked={course.enabled}
                                                            // onChange={() => handleToggle(course.id)}
                                                            color="primary"
                                                        />
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this course?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={confirmDeletion}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Notification"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {dialogMessage}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

const mapStateToProps = (state) => ({
    courses: state.allcourse.courses,
});

const mapDispatchToProps = (dispatch) => ({
    fetchCourses: () => dispatch(fetchallCoursesRequest()),
    deleteCourse: (courseId) => dispatch(deleteCoursesRequest(courseId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Adminviewcourse);

