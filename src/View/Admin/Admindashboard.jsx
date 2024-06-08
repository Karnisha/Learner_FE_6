import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LearnersCount from '../../components/Admin/LearnerCount'
import '../../Styles/AdminDashboard.css';
import CourseCount from '../../components/Admin/CourseCount';

const Admindashboard = () => {
  return (
    <>
      {/* <Container fluid>
        <Row>
          <Col sx={12} md={4} className='mt-5'>

          <LearnersCount/>

          </Col>
          <Col sx={12} md={4} className='mt-5'>



          </Col>
          <Col sx={12} md={4} className='mt-5'>



          </Col>
        </Row>
      </Container> */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <LearnersCount />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <CourseCount />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Admindashboard
