import React, { useState } from 'react'
import { Button, Col } from 'react-bootstrap'
import './form.css'
import { useNavigate } from 'react-router-dom'
import { Formik, useFormik } from 'formik';
import { LoginSchema } from '../../../Schema';
// import db, { auth } from '../../../firebase';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectUser } from '../../../features/userSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../../../features/userSlice';
import { fetchData } from '../../../utiltes/getfunctions';
// import onLoginSuccess from '../../../App'

function LoginForm() {



    


    const initialValues = {
        email: "",
        password: ""
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { values, errors, touched, handleChange, handleSubmit, setFieldTouched } = useFormik({
        initialValues: initialValues,
        validationSchema: LoginSchema,
        onSubmit: (values) => {

            loginUser(values )
        }
    })


    async function loginUser(values) {
        try {
            let response = await axios.post('/user/login', values, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            });

            if (response.status === 200) {
                let responseData = response.data;
                console.log(responseData)
                localStorage.setItem('user-token', responseData.data.token);
                // console.log(responseData.data.token)
                dispatch(login(responseData));
              navigate('/searchpark')
  
                
            } else {
                console.error('Login failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    }






    return (
        <div className="form-lgn">
            <Formik onSubmit={handleSubmit}>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">


                        <div className="col-md-6">
                            <div className="form-main-lgn d-flex justify-content-center align-items-center">
                                <div className="form-container-lgn">
                                    <div className="form-heading">
                                        <h1>Heaven<span>.com</span></h1>
                                    </div>
                                    <form>


                                    </form>
                                    <div className="col-md-12">
                                        <div className="row">

                                            <div className="email margin">
                                                <div className="col-md-12 col-12">
                                                    <label for="exampleFormControlInput1" className="form-label">EmailAddress*</label>
                                                    <input type="Email"
                                                        name='email'
                                                        value={values.email}
                                                        // onChange={handleChange}
                                                        onChange={handleChange}
                                                        onBlur={() => setFieldTouched('email', true, true)}
                                                        placeholder='EmailAddress'
                                                        className="form-control"
                                                    />
                                                    {errors.email && touched.email ? (
                                                        <p className="p_msg">
                                                            {errors.email}
                                                        </p>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className="phone margin">

                                                <div className="col-md-12 col-12">
                                                    <label className="form-label">Password*</label>
                                                    <input type="Password"
                                                        name='password'
                                                        onChange={handleChange}
                                                        onBlur={() => setFieldTouched('Password', true, true)}
                                                        placeholder='Password'
                                                        value={values.password}
                                                        className="form-control"
                                                    />
                                                    {errors.password && touched.password ? (
                                                        <p className="p_msg">
                                                            {errors.password}
                                                        </p>
                                                    ) : null}
                                                </div>
                                            </div>

                                            <div className="btn-lgn">

                                                <Col md={12} sm={12}>
                                                    <Button onClick={handleSubmit}>Login</Button>
                                                </Col>

                                            </div>

                                            <Col md={12} sm={12}>
                                                <div className='link'>
                                                    <h4>
                                                        <span className="signupScreen_gray">New to Heaven.com? </span>
                                                        <span className="signupScreen_link"
                                                            onClick={() => navigate("/Sign-Up")}
                                                        > Sign Up now. </span>
                                                        {/* <span className="signupScreen_link" onClick={register}> Sign Up now. </span> */}
                                                    </h4>
                                                </div>
                                            </Col>


                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Formik>
        </div>
    )
}

export default LoginForm
