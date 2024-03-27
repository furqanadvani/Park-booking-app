import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './home.css'
import { useNavigate } from 'react-router-dom';
import FooterEnd from '../../Userwithoutlogin/footer';
import HeroSection from '../../Userwithoutlogin/hero-section';
import { useSelector } from 'react-redux';
import { selectSearchResult } from '../../../../features/searchSlice';
import { Loader } from 'semantic-ui-react';

function HomePage() {

  const navigate = useNavigate();


  const parkData = useSelector(selectSearchResult);

  console.log(parkData)


  if (parkData === null){
  
  }

 




  const handleViewMore = (cardId , item) => {
    navigate(`/detail/${cardId}` , { state: { cardData: item } });
    console.log(cardId)
  };

  const HandleProfile = () => navigate('/userProfile')

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

 

  return (
    <>
<nav class="navbar navbar-expand-lg ">
  <div class="container">
    <a class="navbar-brand fs-1 text bold nav-logo" href="#">Heaven<spam className='navlogo-span'>.com</spam></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
      <ul class="navbar-nav  mb-2 mb-lg-0 gap-2 ">
      
        <li class="nav-item">
        <Button onClick={HandleProfile}>
        Profile
          </Button>
        </li>
        
       
      </ul>
      
    </div>
  </div>
</nav>

 



{/* 
<div className='Our-parks section-padding'>
  <Container>
    <Row>
        <Col md={12} sm={12}>
            <div className='our-park-heading'>
              <h1>
                Our Park
              </h1>
            </div>
        </Col>
   </Row>
  </Container>

</div> */}

      {/* <div className='home-display-main section-padding'>
        <Container>
            <Row>
              <Col md={12} sm={12}>
                <div className='home-display'>
                    <div className='home-banner'>
                      <Col md={12} sm={12}>
                        <h1>
                          Parks
                        </h1>
                      </Col>
                    </div>
                </div>
              </Col>

            </Row>
          </Container>

      </div> */}

      <div className='box-container section-padding'>
        <Container>
          <Row>
            
          {parkData ? (
                 parkData.map((item) => {
                  return (
                    <Col sm={12} md={4}>
                      <div className='park-box' key={item._id}>
                        <Col md={12} sm={12}>

                          <div className='box-img'>
                            <img src={item?.images[0]} alt='' />
                          </div>
                        </Col>

                        <Col md={12}>

                          <div className='box-content'>
                            <div className='park-park'>
                              <p>Park</p>
                            </div>

                            <div className='title-city'>
                              <div className='box-title'>
                                <h3 className='m-0 p-0'>{item.name}</h3>
                               
                              </div>

                              <div className='city'>
                              <h5 className='m-0 p-0'> {item.city} , {item.country} </h5>
                              </div>
                            </div>

                            <div className='box-rating'>
                              <div className='rating'>
                                <h5>8.1</h5>
                              </div>
                              <div className='rating-title'>
                                <h4>Very Good</h4>
                              </div>
                            </div>

                            <div className='box-desc'>
                              <p className='m-0 p-0'>
                                {truncate(item?.description, 110)}
                              </p>
                            </div>

                            <div className='box-stock'>
                              <h5 className='m-0 p-0'>
                              capacity : {item?.capacity}
                              </h5>
                            </div>
                          </div>



                        </Col>
                        <Col md={12} sm={12}>
                          <div className='more-details'>
                            <button onClick={() => handleViewMore(item._id , item)}>Reserve this park</button>
                          </div>
                        </Col>
                      </div>


                    </Col>
                  )
                })
              
              ) : (
                <Col sm={12}>
                  <div className='error-park'>
                  <div className='fs-1 text'>No parks available at this time</div>

                  </div>
                </Col>
              )}
          </Row>
        </Container>

      </div>
      <FooterEnd/>
    </>

  )
}

export default HomePage

