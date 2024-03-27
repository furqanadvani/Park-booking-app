import { Button } from 'antd';
import axios from 'axios';
import { Form, Formik, useFormik } from 'formik';
import React from 'react'
import { Col } from 'react-bootstrap';
import { updateFormSchema } from '../../../../Schema';
import { useNavigate } from 'react-router-dom';

function EditprofileForm() {

const Navigate = useNavigate()

    const initialValues = {
        firstname: "",
        lastname: "",
        phonenumber: ""
      };

      const { values, errors, touched, handleChange, handleSubmit, setFieldTouched } = useFormik({
        initialValues: initialValues,
        validationSchema: updateFormSchema,
        onSubmit:  (values) => {
            updateUser(values)
            console.log(values)
            console.log(errors, "formik errors")
        }

    
    });

    async function updateUser (values) {
        try{
            const api = await axios.put('/update/userprofile' , values,  {
                headers : {
                    'Authorization': `Bearer ${localStorage.getItem('user-token')}`
                } 
            })

            const apiRes = api.data ;
            console.log(apiRes)
            Navigate('/userProfile')
        }catch(error){
            console.log(error);
            alert(error.respones.data.message)
        }

    }

  return (
    <div>
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

                                   <div className="col-md-12 col-12">
                                       <label for="exampleFormControlInput1" className="form-label">First Name*</label>
                                       <input type="name" 
                                       name='firstname'
                                      value={values.firstname}
                                      onChange={handleChange}
                                      onBlur={() => setFieldTouched('firstname', true, true)}
                                      className="form-control" 
                                       />

                                         {errors.firstname && touched.firstname ? (
                                                <p className="p_msg">
                                                    {errors.firstname}
                                                </p>
                                                   ) : null}
                                   </div>
                                   <div className="fst-lst col-md-12 col-12">
                                    <label for="exampleFormControlInput1" className="form-label">Last Name*</label>
                                    <input type="name" 
                                    name='lastname'
                                    value={values.lastname}
                                    onChange={handleChange}
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
                            
                            <div className="phone margin">

                                <div className="col-md-12 col-12">
                                    <label for="exampleFormControlInput1" className="form-label">Phone Number*</label>
                                    <input type="text" 
                                    name='phonenumber'
                                    class="form-control" 
                                    value={values.phonenumber}
                                    onChange={handleChange}
                                    onBlur={() => setFieldTouched('phonenumber', true, true)}
                                    id="John"/>
                                      {errors.phonenumber && touched.phonenumber ? (
                                                <p className="p_msg"> {errors.phonenumber} </p>
                                       ) : null}
                                </div>
                            </div>
                          

                                <div class="btn-sign">

                                <Col md={12} sm={12}>
                                    <button onClick={handleSubmit}>Update Profile</button>
                                </Col>
                            </div>
                           

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
    </div>
  )
}

export default EditprofileForm
