import React from 'react'
import star from '../../../Assets/momentus-logo-mark-full-color-rgb-864px 72ppi (1).png'
import './moments.css'
import { Col, Container, Row } from 'react-bootstrap'

function Moments() {
  return (
    <div className='moment-main-container section-padding'>
      <Container>
        <Row>
          <Col sm={12} md={8}>
            <div className='moment-content-main'>
              <div className='moment-heading'>
                <h1 className='m-0 p-0'>The only platform you need to create extraordinary moments</h1>
              </div>
              <div className='moment-content'>
                <p className='p-0 m-0'>
                Access the best resources, all in one place. The Momentus 
                Platform empowers you with an integrated suite of solutions including 
                CRM, booking, event management, accounting, reporting and API.
                </p>
                <div className='moment-btn'>
                  <button>View More</button>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4}>
              <div className='moment-img'>
                <img src={star} alt='star' draggable="false" />
              </div>
          </Col>
        </Row>
    <div className='card-container'>

            <Row>
          
                <Col md={6} sm={12} xl={6}>
                    <div className='card-box margin-top'>
                        <div className='card-content'>
                            <div className='card-heading'>
                              <h1 className='m-0 p-0 '>Access</h1>
                              <h2 className='m-0 p-0 '>Anywhere</h2>
                            </div>
                            <div className='card-main'>
                              <p className='m-0 p-0 '>
                              Work on the go across all your devices on a cloud-based platform to ensure your team can share data, optimize processes and deliver exceptional event experiences.
                              </p>
                            </div>
                        </div>
                      </div>
                </Col>
                <Col md={6} sm={12} xl={6}>
                <div className='card-box margin-top'>
                        <div className='card-content'>
                            <div className='card-heading'>
                              <h1 className='m-0 p-0 '>Access</h1>
                              <h2 className='m-0 p-0 '>Anywhere</h2>
                            </div>
                            <div className='card-main'>
                              <p className='m-0 p-0 '>
                              Work on the go across all your devices on a cloud-based platform to ensure your team can share data, optimize processes and deliver exceptional event experiences.
                              </p>
                            </div>
                        </div>
                      </div>
                </Col>
                </Row>
                <Row>
                <Col md={6} sm={12} xl={6}>
                <div className='card-box'>
                        <div className='card-content'>
                            <div className='card-heading'>
                              <h1 className='m-0 p-0 '>Access</h1>
                              <h2 className='m-0 p-0 '>Anywhere</h2>
                            </div>
                            <div className='card-main'>
                              <p className='m-0 p-0 '>
                              Work on the go across all your devices on a cloud-based platform to ensure your team can share data, optimize processes and deliver exceptional event experiences.
                              </p>
                            </div>
                        </div>
                      </div>
                </Col>
                <Col md={6} sm={12} xl={6}>
                <div className='card-box'>
                        <div className='card-content'>
                            <div className='card-heading'>
                              <h1 className='m-0 p-0 '>Access</h1>
                              <h2 className='m-0 p-0 '>Anywhere</h2>
                            </div>
                            <div className='card-main'>
                              <p className='m-0 p-0 '>
                              Work on the go across all your devices on a cloud-based platform to ensure your team can share data, optimize processes and deliver exceptional event experiences.
                              </p>
                            </div>
                        </div>
                      </div>
                </Col>
            </Row>
    </div>

      </Container>
    </div>
  )
}

export default Moments
