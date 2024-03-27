import React   from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, useFormik } from 'formik';
import { subscriptionSchema } from '../../../Schema';
import './footer.css'
// import subscriptionSchema from '../Schema';
// import { subscriptionSchema } from '../Schema';




function FooterEnd() {


const initialValues = {
    mail : "",
}
    





   const { values, errors, touched, handleSubmit, setFieldTouched, setFieldValue } = useFormik({
    initialValues : initialValues,
    validationSchema : subscriptionSchema,
        onSubmit : (values) => {

            
            const emailBody = `
            mail: ${values.mail}
          `;

          const mailtoLink = `mailto:furqanmemon200@gmail.com?subject=Subscribe-to-Newsletter&body=${encodeURIComponent(emailBody)}`;
            window.location.href = mailtoLink;
            console.log(values);
        }
    })



    return (

<>
        <div className="sub-footer">


                <Container>
                    <Row>

                        <Col lg={6}>
                            <div className="footer-logo">
                                {/* <img src={FooterLogo} alt="" className='main-logo' /> */}
                                <div className='foo-logo'>
              <h1 className='m-0 p-0'>Heaven<spam className='foo-span'>.com</spam></h1>
            </div>
                                <div className='parent-link'>
                                    <div className='facebook'>
                                        <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} style={{ color: "#000000", }} /></a>
                                    </div>
                                    <div className='facebook'>
                                        <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} style={{ color: "#000000", }} /></a>
                                    </div>
                                    <div className='facebook'>
                                        <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} style={{ color: "#000000", }} /></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className='sub-footer-lable'>
                                <ul>
                                    <li><h4>Community</h4></li>
                                    <li><a href="*">Discord</a></li>
                                    <li><a href="*">Software</a></li>
                                </ul>

                            </div>
                        </Col>
                        <Col lg={4}>
                        <Formik  validateOnChange={true}>
                            <div className='sub-footer-lable'>
                                <ul>
                                    <li><h4>Subscribe to Newsletter</h4></li>
                                    <li><p className='m-0'>Sign up today for our exclusive newsletter giving helpful knowledge, tips, and more for your trading journey.</p></li>
                                    <li>

                                        <InputGroup className="mb-3 d-flex">
                                            <Form.Control
                                                placeholder="Email address"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                                className='sub-footer-input'
                                                name='mail'
                                                // value={values.mail}
                                                // value={values.emailfooter}
                                                value={values.mail}
                                                onBlur={() => setFieldTouched('mail', true, true)}
                                                onChange={(e) => setFieldValue('mail',e.target.value)}
                                            />
                                            <Button
                                                variant="outline-secondary"
                                                id="button-addon2 "
                                                onClick={handleSubmit}
                                                className='input-button'>
                                                    Subscribe
                                                </Button>
                                        </InputGroup>
                                    </li>
                                    {errors.mail && touched.mail ? (
                                        <p className='p_msg m-0'>{errors.mail}</p>
                                    ) : null}
                                </ul>

                            </div>
                            </Formik>


                        </Col>

                    </Row>
                </Container>
                {/* <hr className='line'/> */}
            </div>

            <div className='footer-top'>
                <div className='container'>
                    <div className='row d-flex justify-content-around flex-row align-items-center'>

                        <div className='col-md-6 col-sm-6 col-xl-6 col-lg-6' >
                            <div className='footer'>

                                <p className='m-0'>© 2023.All Rights Reserved</p>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-6 col-xl-6 col-lg-6'>
                            <div className="foter-main justify-content-end align-items-end">
                                <p> <a href="*"> Terms & Conditions</a></p>
                                <span className='sub'>•</span>
                                <p> <a href="*">Privacy Policy</a> </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            
            </>

        
    )
}

export default FooterEnd