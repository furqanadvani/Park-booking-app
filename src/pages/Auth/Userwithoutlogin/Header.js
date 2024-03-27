import React from 'react'
import './Header.css'
import { Button , Container ,Col , Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



function Header() {

  const Navigate = useNavigate();
  const HandleLogin = () => Navigate('/loginUser')
  const handleSignup = () => Navigate('/Sign-Up')
  const handlehome = () => Navigate('/')


  return (
    <>
{/* <nav class="navbar navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
        <Button onClick={handleSignup}>SignUp</Button>
        </li>
        <li class="nav-item">
              <Button onClick={HandleLogin}>Login</Button>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
{/* <div className='header'> */}


<nav class="navbar navbar-expand-lg ">
  <div class="container">
    <a class="navbar-brand fs-1 text bold nav-logo" href="#">Heaven<spam className='navlogo-span'>.com</spam></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
      <ul class="navbar-nav  mb-2 mb-lg-0 gap-2 ">
        <li class="nav-item">
              <Button onClick={handleSignup}>SignUp</Button>
        </li>
        <li class="nav-item">
              <Button onClick={HandleLogin}>Login</Button>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>

{/* 
  <Col  sm={12} md={12} xl={12} lg={12}>
   <Container>
    <Row>
          <div className='navbar-main'>
            <div className='nav-logo'>
              <h1 className='m-0 p-0' onClick={handlehome}>Heaven<spam className='navlogo-span'>.com</spam></h1>
            </div>
           
          </div>
    </Row>
 </Container>
</Col> */}
{/* </div> */}

</>

  )
}

export default Header
