import React from 'react'
import Header from './Header'
import './withoutlogin.css'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CompanyRev from './Company'
import Platform from './platform'
import Become from './become'
import FooterEnd from './footer'
import Moments from './moments'
import Testimonial from './Testimonial'

function Withoutlogin() {

  const Navigate = useNavigate()
  const HandleLogin = () => Navigate('/loginUser')

  return (
    <>
      <Header />
      <div className='hero-section'>
        <Container>

          <Row className='d-flex justify-content-center align-items'>
            <Col sm={10} xl={8} md={6}>

              <div className='hero-content'>
                <h1 className='m-0 p-0'>EventEase is your go-to solution for finding and booking venues for any occasion.</h1>
                <div className='Input-btn'>
                  <input type='text' placeholder='Enter Your Location' />
                  <button onClick={HandleLogin}>Submit</button>
                </div>
              </div>
            </Col>

          </Row>
        </Container>

      </div>
      <Platform />
      <CompanyRev />
      <Moments />
      <Testimonial />
      <Become />
      <FooterEnd />
    </>
  )

}

export default Withoutlogin
