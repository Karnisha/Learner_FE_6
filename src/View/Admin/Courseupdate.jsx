import React, { useState, useEffect } from 'react';
import '../../Styles/Courseupdate.css'
import { Container, Row, Col, Card, Form, Modal, Button } from 'react-bootstrap';
import { useDispatch, connect, useSelector } from 'react-redux';
import { GiCancel } from 'react-icons/gi';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { updateCoursesRequest } from '../../actions/Admin/Updatecourse';
import { useParams } from 'react-router-dom';
import { validateForm } from '../../utils/Admin/ValidationUpdatecourse';



const Courseupdate = () => {

    // const navigate = useNavigate();
    const { courseId } = useParams(); // Destructure the courseId from the URL

    const dispatch = useDispatch();
    const [coursecategory, setCategory] = useState([]);
    const [courselevel, setLevel] = useState([]);
    const [show, setShow] = useState(false);
    const [category, setAddCategory] = useState({
        category: '',
        modifiedby: 'kavin'
    });


    const [errors, setErrors] = useState({});
    const [course, setCourse] = useState({
        title: '',
        level: '',
        category: '',
        description: '',
        duration: '',
        modifiedby: 'Kavin',
        thumbnailimage: null,
        courseId: courseId
    });


    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoryResponse = await axios.get('http://localhost:5199/lxp/course/category');

                console.log("categoryresponses", categoryResponse.data.data);
                setCategory(categoryResponse.data.data);

                const levelResponse = await axios.get('http://localhost:5199/lxp/course/courselevel/kavin');
                console.log("courselevels", levelResponse.data.data)

                setLevel(levelResponse.data.data);

                const course = await axios.get(`http://localhost:5199/api/Course/GetById/get/course/${courseId}`);
                console.log(course);
                setCourse(course.data.data);
                console.log(course.data.data);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [courseId]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const isFormvalid = validateForm(course, setErrors)

        // if(isFormvalid)
        // {
        const formData = new FormData();
        formData.append('CourseId', course.courseId);
        formData.append('Title', course.title);
        formData.append('LevelId', course.level);
        console.log("k" + course.category);
        formData.append('CategoryId', course.category);
        formData.append('Description', course.description);
        formData.append('Duration', course.duration);
        formData.append('ModifiedBy', course.modifiedby);

        if (course.thumbnailimage) {
            formData.append('Thumbnailimage', course.thumbnailimage);
        }

        try {
            console.log("form", formData);
            console.log('Action payload:', { courseId: course.courseId, formData });

            dispatch(updateCoursesRequest({ courseId: course.courseId, formData }));
            // navigate('/adminviewallcourse'); // Navigate to the next page on success
        } catch (error) {
            console.error('Error updating course:', error);
        }
        // }
    };


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCourse({ ...course, [name]: value });


        if (name === "category" && value === "Add category") {
            handleShow();
        }
    };
    const handleInputCategory = (e) => {
        setAddCategory({ ...category, [e.target.name]: e.target.value })
    }

    const handleThumbnailChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setCourse((prevCourse) => ({ ...prevCourse, thumbnailimage: event.target.files[0] }));
        }
    };

    const removeThumbnail = () => {
        setCourse((prevCourse) => ({ ...prevCourse, thumbnailimage: null }));
    };

    console.log('courseId from useParams:', courseId);
    console.log('courseId in state:', course.courseId);

    return (
        <>
            <Row>
                <Col md={12}>
                    <Container className='courseForm mt-5'>
                        <h3>Update Course</h3>
                        {/* <hr /> */}
                        <Card className="course-form">
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <div className="addcourse">
                                        <Row>
                                            <label>
                                                Course Title:
                                                <input
                                                    type="text"
                                                    name="title"
                                                    placeholder="Course title"
                                                    value={course.title}
                                                    onChange={handleInputChange}
                                                />
                                            </label>
                                            {errors.title && <p className="error">{errors.title}</p>}
                                        </Row>
                                        <Row>
                                            <Col>
                                                <label>
                                                    Course Category:
                                                    <select name="category" onChange={handleInputChange}>
                                                        <option value="">Select category</option>
                                                        {coursecategory.map((category) => (
                                                            <option key={category.categoryId} value={category.categoryId}>
                                                                {category.category}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </label>
                                                {errors.category && <p className="error">{errors.category}</p>}
                                            </Col>
                                        </Row>

                                        <Row>
                                            <label>
                                                Course Level:
                                                <select name="level" onChange={handleInputChange}>
                                                    <option value="">Select level</option>
                                                    {courselevel.map((level) => (
                                                        <option key={level.levelId} value={level.levelId}>
                                                            {level.level}
                                                        </option>
                                                    ))}
                                                </select>
                                            </label>
                                            {errors.level && <p className="error">{errors.level}</p>}
                                        </Row>
                                        {/* Course Duration */}
                                        <Row>
                                            <label>
                                                Course Duration (in Hrs):
                                                <input
                                                    className='inputnumber'
                                                    // type="number"
                                                    // min="0"
                                                    placeholder="Enter no. of hours"
                                                    name="duration"
                                                    value={course.duration}
                                                    onChange={handleInputChange}
                                                />
                                            </label>
                                            {errors.duration && <p className="error">{errors.duration}</p>}
                                        </Row>
                                        {/* Course Description */}
                                        <Row>
                                            <label>
                                                Course Description:
                                                <textarea
                                                    placeholder="Enter your description"
                                                    name="description"
                                                    value={course.description}
                                                    onChange={handleInputChange}
                                                ></textarea>
                                            </label>
                                            {errors.description && <p className="error">{errors.description}</p>}
                                        </Row>
                                        {/* Course Thumbnail */}
                                        <Row>
                                            <label htmlFor="thumbnail">Course Thumbnail:</label>
                                            <div className="course-thumbnail">
                                                <input
                                                    type="file"
                                                    id="thumbnailimage"
                                                    onChange={handleThumbnailChange}
                                                    accept="image/*"
                                                />
                                                {course.thumbnailimage && (
                                                    <div className="uploaded-file">
                                                        <img
                                                            src={URL.createObjectURL(course.thumbnailimage)}
                                                            alt="uploaded thumbnail"
                                                            className="thumbnail-image"
                                                        />
                                                        <GiCancel
                                                            onClick={removeThumbnail}
                                                            className="cancel-icon"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                            {errors.thumbnailimage && <p className="error">{errors.thumbnailimage}</p>}
                                        </Row>
                                        {/* Submit Button */}
                                        {/* <Row> */}
                                        <button type='submit' className='btn btn-primary'>UPDATE COURSE</button>
                                        {/* <input type="submit" value="UPDATE COURSE" /> */}
                                        {/* </Row> */}
                                    </div>
                                </Form>

                            </Card.Body>
                        </Card>
                    </Container>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <Form>
                    {/* <Form onSubmit={handleCategory}> */}
                    <Modal.Body>

                        <input
                            type="text"
                            placeholder="Enter new category"
                            value={category.category}
                            onChange={handleInputCategory}
                            name="category"
                        />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type='submit'>
                            Add
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};


export default Courseupdate;