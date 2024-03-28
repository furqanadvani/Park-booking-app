import React from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
// import data from '../data.json';
import './details.css'
import { Col, Container, Row } from 'react-bootstrap';
import { IoLocationSharp, IoPeople, IoTime } from "react-icons/io5";
import FooterEnd from '../../Userwithoutlogin/footer';
import { selectSearchResult } from '../../../../features/searchSlice';
import { useSelector } from 'react-redux';




function DetailsPages() {
  const { cardId } = useParams();
  const parkData = useSelector(selectSearchResult);

  // const [parkData, setParkData] = useState(null);
  const navigate = useNavigate();
  const park = parkData.find(item => item._id === cardId);


  const backTohome = () => navigate('/home');
  if (!park) {
    console.error('Park data not found for cardId:', cardId);
    return null; 
  }


 
  const handleBooking = () => navigate(`/bookingform/${cardId}`);
  const startTime = park?.parktiming?.starttime;

  const formattedTime = startTime ? startTime.slice(11, 16) : ''; // Extracting time part (hh:mm)
  console.log(formattedTime); 
  const EndTime = park?.parktiming?.endtime;
  const formattEnddTime = EndTime ? EndTime.slice(11, 16) : ''; // Extracting time part (hh:mm)
  console.log(formattedTime); 
  return (
    <>
    <div>
      <div className='details-header'>
        <Container>
          <Row>
            <Col sm={12} md={12}>
              <div className='details-header-main'>
                <div className='logo-details'>
                  <h1 onClick={backTohome}>
                    Heaven<span>
                      .com
                    </span>
                  </h1>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>


      <Container>

        <div className='items-details-main section-padding'>



          <Col md={12} sm={12}>
            <Row>

              <Col md={7} sm={12}>

                <div className='main-img'>
                  <img src={park.images[1]} alt='' />
                </div>
              </Col>
              <Col md={5} sm={12} className='m-0 p-0'>
                <Row>

                  <Col md={6} sm={12}  >
                    <div className='side-img-box'>
                      <img src={park.images[1]} alt='' />
                      <img src={park.images[2]} alt='' />
                    </div>
                  </Col>
                  <Col md={6} sm={12} className='m-0 p-0'>
                    <div className='side-img-box'>
                      <img src={park.images[3]} alt='' />
                      <img src={park.images[4]} alt='' />
                    </div>
                  </Col>
                </Row>

              </Col>

              {/* {cardData.images.slice(1, 4).map((imageUrl, index) => (
              <Col md={4} sm={12}>
                <div className='intro-images'>
                  
                  <img key={index} src={imageUrl} alt={`Image ${index + 1}`} draggable="false" />
                </div>
              </Col>

              
            ))} */}
            </Row>
          </Col>
          <Col md={12} sm={12}>
            <div className='items-title-city-main'>
              <div className='items-title-city'>
                <div className='item-title'>
                  <h1>
                    {park.name}
                  </h1>
                </div>
                <div className='city-icon'>
                  <i>
                    <IoLocationSharp />

                  </i>
                  <p className='m-0 p-0'>{park.location},  {park.city}, {park.country}</p>
                </div>
                <div className='city-icon'>
                  <i>
                    <IoTime />
                  </i>
                  <p className='m-0 p-0'>Park Timing : {formattedTime} To {formattEnddTime} </p>
                </div>
             
              <div className='city-icon'>
                  <i>
                    <IoPeople />
                  </i>
                  <p className='m-0 p-0'>Capacity: {park.capacity} </p>
                </div>
                </div>
              <div className='rating-items'>

                <div className='box-rating'>
                  <div className='rating'>
                    <h5>8.1</h5>
                  </div>
                  <div className='rating-title'>
                    <h4>Very Good</h4>
                  </div>
                </div>
              </div>

            </div>

          </Col>

          <Col md={12} sm={12} >
<div className='book-park'>

<div className='bok-title'>
<h4>
  Exprience The Park At ${park.cost}
</h4>
</div>

  <div className='bok-btn'>

  <button onClick={handleBooking}>
    book park
  </button>
  </div>

</div>

            <div className='intro-main-details'>
              
            <div className='intro-desc'>
              <h5>
                Description :
              </h5>
              <p>
               {park.description}
              </p>
            </div>
           
            </div>

          </Col>
        </div>
      </Container>

    </div>
< FooterEnd/>
    </>
  );
}

export default DetailsPages;
