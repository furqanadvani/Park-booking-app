import React from 'react'
import './Company.css'
import {  Col, Container, Row } from 'react-bootstrap'


function CompanyRev() {
  return (
    <div className='Company-main section-padding'>
        <Container>
            <Row >
        <Col md={12} sm={12}>
                <Col md={12} sm={12}>
                    <div className='Company-heading m-0 p-0 d-flex justify-content-center align-content-center'>
                        <h1>You're in Good Company</h1>
                    </div>
                </Col>
                <Col md={12} sm={12}>
                    <div className='company-content-main'>
                        <p>
                        We have the most incredible customers based
                         in 57 countries around the world. Every venue is unique,
                          but every venue is passionate about bringing extraordinary 
                          experiences to life. Browse our customer success stories to 
                          learn how our software solutions empower their achievements.
                        </p>
                        <div className='Company-btn'>
                         <button>View All Success Stories</button>
                        </div>
                    </div>
                </Col>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CompanyRev
