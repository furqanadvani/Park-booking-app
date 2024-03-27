import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { logout, selectUser } from './../../../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './Profile.css'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';



function ProfileScreen() {

  const user = useSelector(selectUser);

const navigate = useNavigate()

const dispatch = useDispatch()
const handleChange = ()=> navigate('/home')


const handleSignOut = () => {
  dispatch(logout());
  localStorage.removeItem('user-token');

  navigate('/loginUser'); 
};






  

 
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
        <Button onClick={() => navigate('/searchpark')}>
                    Home
                  </Button>
        </li>
        <li class="nav-item">
        <Button onClick={() => navigate('/allbookings')}>
            Bookings
          </Button>
        </li>
        
       
      </ul>
      
    </div>
  </div>
</nav>

  


   


<div className="profileScreen">
    {/* <Nav /> */}
        <div className="profileScreen_body">
          <div className='profileScreen_body-main  d-flex justify-content-between flex-row'>
            <h1>Profile</h1>
            <div className=''>
            <Button onClick={() => navigate('/updateProfile')}>Edit</Button>
            </div>
          </div>
            <div className="profileScreen_info">
          
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="" />
                <div className="profileScreen_details">
                    <h2>{user.email}</h2>
                    <div className="profile_plans">

                        
                    <h2>First Name : {user.firstname}{user.lastname}</h2>
                    <h2>Last Name : {user.lastname}</h2>
                    <h2>Email : {user.email}</h2>
                    <h2>Phone no : {user.phonenumber}</h2>

                        

                   {/* <PlanScreen /> */}



                        <button
                        onClick={() => handleSignOut()}
                         className="profileScreen_signOut">Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
</div>
</>
  );
}

export default ProfileScreen;
