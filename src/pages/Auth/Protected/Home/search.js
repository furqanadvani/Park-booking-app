import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { DatePicker, TimePicker } from 'antd';
import dayjs from 'dayjs';
import { Formik, useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './search.css';
import { datesreachSchema } from '../../../../Schema';
import { selectSearchResult, setSearchResult } from '../../../../features/searchSlice';
import LoaderScreen from '../../../../Loader';

function Searchs() {
  const dispatch = useDispatch();
  const [dataReceived, setDataReceived] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showTimeInputs, setShowTimeInputs] = useState(false);

  const navigate = useNavigate();
  const searchResult = useSelector(selectSearchResult);

  const initialValues = {
    starttime: "",
    endtime: "",
    date: ""
  };

  const { values, errors, touched, handleSubmit, setFieldValue, handleChange, setFieldTouched } = useFormik({
    initialValues: initialValues,
    validationSchema: datesreachSchema,
    onSubmit: (values) => {
      const hasStartTime = !!values.starttime;
      const hasEndTime = !!values.endtime;

      // Check if either starttime or endtime is provided
      if (hasStartTime || hasEndTime) {
        const formattedUTC = dayjs(`1970-01-01T${dayjs(values?.starttime).toISOString().split('T')[1]}`).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
        setFieldValue('starttime', formattedUTC);
        const formattedEndUTC = dayjs(`1970-01-01T${dayjs(values.endtime).toISOString().split('T')[1]}`).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
        console.log('endtime:', formattedEndUTC);
        console.log(values, "formik values");
        check(values);
      } else {
        console.log('Please provide either starttime or endtime');
        // Handle the case when neither starttime nor endtime is provided
      }
      // const formattedUTC = dayjs(`1970-01-01T${dayjs(values?.starttime).toISOString().split('T')[1]}`).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
      // setFieldValue('starttime', formattedUTC);
      // const formattedEndUTC = dayjs(`1970-01-01T${dayjs(values.endtime).toISOString().split('T')[1]}`).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
      // console.log('endtime:', formattedEndUTC);
      // console.log(values, "formik values")
      check(values)
    }
  });

  function onChange(date) {
    if (date) {
      const formattedDate = dayjs(date).startOf('day').toISOString();
      const formattedDateWithTime = formattedDate.replace(/T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, 'T00:00:00');
      setFieldValue('date', formattedDateWithTime);
    }
  }

  async function check(values) {
    try {
      setLoading(true);
      const response = await axios.post('/availableparks', values, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
      });

      const apiRes = response.data.data;
      dispatch(setSearchResult(apiRes)); // Update Redux store with search result
      navigate('/home');
      setDataReceived(true);
    } catch (error) {
      console.error('Error during API call:', error);
      alert(error.response?.data?.message)
    } finally {
      setLoading(false);
    }
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
                <Button onClick={() => navigate('/userProfile')}>
                  Profile
                </Button>
              </li>


            </ul>

          </div>
        </div>
      </nav>

      <Formik onSubmit={handleSubmit}>

        <div className='search-body'>
          <Container>
            <div className='search-content'>
              <h1 className='m-0 p-0'>EventEase is your go-to solution for finding and booking venues for any occasion.</h1>
            </div>
              <Row className='d-flex justify-content-center align-content-center'>

              <Col md={6} sm={12}>
            <div className='search-form-main'>
                <Col md={12} sm={12}>
                <div className="form-group ">
                          <DatePicker
                            name='date'
                            allowClear={false}
                            value={values.date ? dayjs(values.date) : null}
                            onChange={onChange}
                            onBlur={() => setFieldTouched('date', true)}
                          // onChange={onChange}
                          />
                          {errors.date && touched.date ? (
                            <p className="p_msg">
                              {errors.date}
                            </p>
                          ) : null}
                        </div>
                </Col>
                {showTimeInputs && (
                        <>
                        <Row className='date-mb'>
                          <Col md={6} sm={12}>
                            <div className="form-group date-mb">
                              <TimePicker
                                className="form-control"
                                name="starttime"
                                use12Hours={true}
                                allowClear={false}
                                value={values.starttime ? dayjs(values.starttime) : null}
                                onChange={(val) => {
                                  const formattedUTC = dayjs(`1970-01-01T${dayjs(val).toISOString().split('T')[1]}`).toISOString();
                                  setFieldValue('starttime', formattedUTC);
                                }}
                                onBlur={() => setFieldTouched('starttime', true)}
                                placeholder="Start Time"
                              />
                              {errors.starttime && touched.starttime ? (
                                <p className="p_msg">
                                  {errors.starttime}
                                </p>
                              ) : null}
                            </div>
                          </Col>
                          <Col md={6} sm={12}>
                            <div className="form-group date-mb">
                              <TimePicker
                                className="form-control"
                                name="endtime"
                                allowClear={false}
                                use12Hours={true}
                                value={values.endtime ? dayjs(values.endtime) : null}
                                onChange={(val) => {
                                  const formattedUTC = dayjs(`1970-01-01T${dayjs(val).toISOString().split('T')[1]}`).toISOString();
                                  setFieldValue('endtime', formattedUTC);
                                }}
                                onBlur={() => setFieldTouched('endtime', true)}
                                placeholder="End Time"
                              />
                              {errors.endtime && touched.endtime ? (
                                <p className="p_msg">
                                  {errors.endtime}
                                </p>
                              ) : null}
                            </div>
                          </Col>
                        </Row>

                        </>
                      )}
                        <Col md={12}>
                        <Button className='search-btn' type='submit' onClick={handleSubmit} >
                          Search Park
                        </Button>
                      </Col>
                      <Col md={12}>
                  <div className="form-group show-time">
                    <label >Search with Time</label>
                    <input
                      type="checkbox"
                      id="showTime"
                      checked={showTimeInputs}
                      onChange={() => setShowTimeInputs(!showTimeInputs)}
                    />
                  </div>
                </Col>
            </div>
              </Col>
              </Row>

           
          </Container>

        </div>
      </Formik>
      {loading && <LoaderScreen />}
      {/* {dataReceived && <HomePage />} */}
    </>
  )
}

export default Searchs
