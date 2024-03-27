import React from 'react'
import './become.css'
import { Col, Container, Row } from 'react-bootstrap'

function Become() {
  return (
    <div className='become-main section-padding-be'>
        <Container>
            <Row className='d-flex justify-content-center align-content-center'>
                
                <Col md={8} sm={12}>
                    <div className='become-heading'>
                        <h1>Ready to Become <span>Momentus?</span></h1>
                    </div>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col sm={12} md={8}>
                    <div className='become-content'>
                            <p>
                            A powerful, end-to-end venue and event management platform t
                            hat empowers organizations to create extraordinary moments.
                            </p>
                            <div className='demo-btn'>
                                <button>Request Demo</button>
                            </div>
                    </div>
                </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default Become
