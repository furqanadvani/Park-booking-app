import React from 'react';
import sideimg from '../../../Assets/pool 3.jpeg'
import { Col, Container, Row } from 'react-bootstrap';
import './platform.css'





function Platform() {
  return (
    <div className='Platform-main section-padding '>
    <Container>
        <Row className='d-flex justify-content-center align-items-center'>
            <Col md={6} sm={12}>
                <div className='side-main '>
                    <img src={sideimg} draggable="false" alt='' />
                </div>
            </Col>
            <Col md={6} sm={12}>
                <div className='platform-cotent-container'>
                    <div className='platform-header'>
                        <h4 className='m-0 p-0'>WHO WE ARE</h4>    
                        <h1 className='m-0 p-0'>
                        This isn’t venue management —
                        </h1>
                        <h2 className='m-0 p-0'>it’s so much more.</h2>
                    </div>    
                    <div className='platform-content'>
                        <p>
                        We connect the people who make extraordinary moments possible with the solutions 
                        to make them Momentus. By uniting the industry’s leading technologies and innovators 
                        under one name and mission, we can deliver the most comprehensive venue and event management
                         software solutions to manage the world’s greatest spaces. 
                        </p>
                        <div className='platform-btn'>
                            <button>Learn More </button>
                        </div>
                    </div>  
                </div>    
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Platform
