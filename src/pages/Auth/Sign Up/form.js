import React, { useState } from 'react'
import { Button, Col, } from 'react-bootstrap'
import './form.css'
import { useNavigate } from 'react-router-dom'
import { Form, Formik, useFormik } from 'formik'
import { SignUpSchema } from '../../../Schema'
import axios from 'axios'
import { login } from '../../../features/userSlice'
import { useDispatch } from 'react-redux'







function SignupForm() {


    const [firstname , SetFirstName]=useState()
    const [lastname , SetLastName]=useState()
    const [email , SetEmail]=useState()
    const [phonenumber , SetPhone]=useState()
    const [password , SetPassword_sign]=useState()

    const navigate = useNavigate();
    const dispatch = useDispatch();
  



  
    const initialValues = {
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: '',
        password: '',
        Confirm_Password: '',
      };






    const { values, errors, touched, handleChange, handleSubmit, setFieldTouched } = useFormik({
        initialValues: initialValues,
        validationSchema: SignUpSchema,
        onSubmit:  (values) => {
            signUp(values)
            console.log(values)
            console.log(errors, "formik errors")
        }

    
    });

   
    async function signUp(values) {
        try {
            const response = await axios.post('/user/signup', values);
    
            if (response.error === false || response.status === 200) {
                const responseData = response.data;
                const res = response.data;
                const token = responseData.data.token;
                localStorage.setItem("user-token", token);
                console.log(token);
                alert(response.data.message)
                dispatch(login(responseData)); 
                navigate('/searchpark');
               
            } else {
                alert('Signup failed:', response.statusText );
                alert(response?.message)
            }
        } catch (error) {
            console.error('Error during signup:', error);
        }
    }

   

    



  return (


    <div className="form ">

<Formik>


    <div className="container">

        <Form onSubmit={handleSubmit}  validateOnChange={true}>

        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6">
                <div className="form-main d-flex justify-content-center align-items-center">
                    <div className="form-container">
                        <div className="form-heading">
                            <h1>Heaven<span>.com</span></h1>
                        </div>
                        <form>
                          

                        </form>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="fst-lst margin">
                                    <div className="col-md-12">
                                        <div className="row">

                                   <div className="col-md-6 col-12">
                                       <label for="exampleFormControlInput1" className="form-label">First Name*</label>
                                       <input type="name" 
                                       name='firstname'
                                      value={firstname || values.firstname}
                                      onChange={(e) => {
                                        handleChange(e);
                                        SetFirstName(e.target.value);
                                      }}
                                      onBlur={() => setFieldTouched('firstname', true, true)}
                                      className="form-control" 
                                       />

                                         {errors.firstname && touched.firstname ? (
                                                <p className="p_msg">
                                                    {errors.firstname}
                                                </p>
                                                   ) : null}
                                   </div>
                                   <div className="fst-lst col-md-6 col-12">
                                    <label for="exampleFormControlInput1" className="form-label">Last Name*</label>
                                    <input type="name" 
                                    name='lastname'
                                    value={lastname || values.lastname}
                                    onChange={(e) => {
                                        handleChange(e);
                                        SetLastName(e.target.value);
                                      }}
                                      onBlur={() => setFieldTouched('lastname', true, true)}
                                      className="form-control" 
                                    />
                                    {errors.lastname && touched.lastname ? (
                                                <p className="p_msg">
                                                    {errors.lastname}
                                                </p>
                                                   ) : null}
                                </div>

                                </div>
                            </div>

                            </div> 
                            <div className="email margin">
                                <div className="col-md-12 col-12">
                                    <label for="exampleFormControlInput1" className="form-label">EmailAddress*</label>
                                    <input type="name" 
                                    name='email'
                                    value={email  || values.email}
                                    onChange={(e) => {
                                        handleChange(e);
                                        SetEmail(e.target.value);
                                      }}
                                    onBlur={() => setFieldTouched('email', true, true)}
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
                                    <label for="exampleFormControlInput1" className="form-label">Phone Number*</label>
                                    <input type="text" 
                                    name='phonenumber'
                                    class="form-control" 
                                    value={phonenumber || values.phonenumber}
                                    onChange={(e) => {
                                        handleChange(e);
                                        SetPhone(e.target.value);
                                      }}
                                    onBlur={() => setFieldTouched('phonenumber', true, true)}
                                    id="John"/>
                                      {errors.phonenumber && touched.phonenumber ? (
                                                <p className="p_msg"> {errors.phonenumber} </p>
                                       ) : null}
                                </div>
                            </div>
                            <div className="password margin">
                                <div className="col-md-12">
                                    <div className="row">

                                <div className=" col-md-6 col-12">
                                <label for="exampleFormControlInput1" className="form-label">Password*</label>
                                    <input
                                    type="password"
                                    name='password'
                                    value={password}
                                    onBlur={() => setFieldTouched('password', true, true)}
                                    onChange={(e) => {
                                        handleChange(e);
                                        SetPassword_sign(e.target.value);
                                      }}
                                    class="form-control"
                                   
                                    />
                                    {errors.password && touched.password ? (
                                    <p className='p_msg'>{errors.password}</p>
                                    ) : null}
                                    </div>


                                <div className=" col-md-6 col-12">
                                    <label for="exampleFormControlInput1" className="form-label">Confirm Password*</label>
                                    <input
                                     type="password" 
                                    name='Confirm_Password'
                                    value={values.Confirm_Password}
                                    onBlur={() => setFieldTouched('Confirm_Password' , true , true)}
                                    onChange={handleChange}
                                    className="form-control" 
                                    />
                                    {errors.Confirm_Password && touched.Confirm_Password ? (
                                      <p className='p_msg'>{errors.Confirm_Password}</p>
                                    ) : null}
                                </div>
                                    </div>
                                </div>
                            </div>

                                <div class="btn-sign">

                                <Col md={12} sm={12}>
                                    <Button onClick={handleSubmit}>Sign Up</Button>
                                </Col>
                            </div>
                            <Col md={12} sm={12}>
                                          <div className='link'>
                                              <h4>
                                                  <span className="signupScreen_gray">Already Have an Account? </span>
                                                  <span className="signupScreen_link"
                                                      onClick={() => navigate("/Login")}
                                                  > Login Now. </span>  
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
        </Form>
    </div>
</Formik>

</div>


      
  
  )
}

export default SignupForm
