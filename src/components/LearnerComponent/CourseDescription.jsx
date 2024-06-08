import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../../Styles/Learner/GetEnrollment.css";
function CourseDescription({ course }) {
    return (
        <div>
            <Card
                style={{ height: '300px' }}
                id="Card"
            //   onClick={handleNavigation(course)}
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
        </div>
    )
}

export default CourseDescription;