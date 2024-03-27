import React from 'react'
import './withoutlogin.css';
import { Col, Container, Row } from 'react-bootstrap';





function HeroSection() {
  return (
    <div>
        <div className='hero-section'>
        <Container>

          <Row className='d-flex justify-content-center align-items'>
            <Col sm={10} xl={8} md={6}>

              <div className='hero-content'>
                <h1 className='m-0 p-0'>EventEase is your go-to solution for finding and booking venues for any occasion.</h1>
                <div className='Input-btn'>
                  <input type='text' placeholder='Enter Your Location' />
                  <button >Submit</button>
                </div>
              </div>
            </Col>

          </Row>
        </Container>

      </div>
    </div>
  )
}

export default HeroSection
