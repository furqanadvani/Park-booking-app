import dayjs from 'dayjs';
import { useFormik } from 'formik';
import React from 'react'
import { parkbookingSchema } from '../../../../Schema';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { DatePicker, Input, TimePicker } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import parkfromimg from '../../../../Assets/pool6.png'
import './bookingform.css'

function BookingForm() {



    const userId = useSelector(state => state?.user.user._id);
    console.log(userId)

    const { cardId } = useParams();
    const parkId = cardId;

    const initialValues = {
        userId: userId,
        parkId: parkId,
        startTime: "",
        endTime: "",
        date: "",
        totalPeoples: "",
        advancePayment: "",
    };

    const { values, errors, touched, handleChange, handleSubmit, setFieldValue, setFieldTouched } = useFormik({
        initialValues: initialValues,
        validationSchema: parkbookingSchema,
        onSubmit: (values) => {



            const formattedUTC = dayjs(`1970-01-01T${dayjs(values?.startTime).toISOString().split('T')[1]}`).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
            setFieldValue('starttime', formattedUTC);
            const formattedEndUTC = dayjs(`1970-01-01T${dayjs(values?.endTime).toISOString().split('T')[1]}`).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
            console.log('endtime:', formattedEndUTC);
            console.log(values, "formik values")
            booking(values)
        }
    });

    const navigate = useNavigate()

    async function booking(values) {
        try {
            const token = localStorage.getItem('user-token');
            console.log(token)
            const response = await axios.post('/parkbooking', values, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            });

            const apiRes = response.data;

            navigate('/home')

        } catch (error) {
            console.error('Error during API call:', error);
        }
    }



    function onChange(date, val) {
        if (date) {
            const formattedDate = dayjs(date).startOf('day').toISOString();
            const formattedDateWithTime = formattedDate.replace(/T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, 'T00:00:00');
            setFieldValue('date', formattedDateWithTime);
        }
    }

    return (
        <>
            <div className='home-header'>
                <Container>
                    <Row>
                        <Col md={12} sm={12} lg={12}>
                            <div className='home-header-main'>
                                <div className='home-logo'>
                                    <h1>
                                        Heaven<span>.com</span>
                                    </h1>
                                </div>
                                <div className='home-header-links'>
                                    <button>Hotel</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>



            <div className='park-booking-body'>

                <Container>
                    <div className='park-booking-container'>

                        <Row>
                            <Col md={12} sm={12}>

                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} sm={12}>

                                <div className='park-booking-title'>
                                    <h1>Park Registration Form</h1>
                                </div>
                            </Col>
                        </Row>


                        <div className='booking-form'>

                            <Row>
                                <Col md={12} sm={12}>

                                    <Row>
                                        <Col md={12} sm={12}>
                                            <Col md={6}>
                                                <div className="form-group inpt-margin">
                                                    <label for="exampleFormControlInput1" className="form-label">Date*</label>
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
                                        </Col>

                                        <Col md={6} sm={12}>
                                            <div className="form-group inpt-margin">
                                                <label for="exampleFormControlInput1" className="form-label">Start Time*</label>
                                                <TimePicker
                                                    className="form-control"
                                                    name="startTime"
                                                    allowClear={false}
                                                    value={values.startTime ? dayjs(values.startTime) : null}
                                                    onChange={(val) => {
                                                        const formattedUTC = dayjs(`1970-01-01T${dayjs(val).toISOString().split('T')[1]}`).toISOString();
                                                        setFieldValue('startTime', formattedUTC);
                                                    }}
                                                    onBlur={() => setFieldTouched('startTime', true)}
                                                    placeholder="Start Time"
                                                />
                                                {errors.startTime && touched.startTime ? (
                                                    <p className="p_msg">
                                                        {errors.startTime}
                                                    </p>
                                                ) : null}
                                            </div>
                                        </Col>

                                        <Col md={6} sm={12}>
                                            <div className="form-group inpt-margin">
                                                <label for="exampleFormControlInput1" className="form-label">End Time*</label>

                                                <TimePicker
                                                    className="form-control"
                                                    name="endTime"
                                                    allowClear={false}
                                                    value={values.endTime ? dayjs(values.endTime) : null}
                                                    onChange={(val) => {
                                                        const formattedUTC = dayjs(`1970-01-01T${dayjs(val).toISOString().split('T')[1]}`).toISOString();
                                                        setFieldValue('endTime', formattedUTC);
                                                    }}
                                                    onBlur={() => setFieldTouched('endTime', true)}
                                                    placeholder="End Time"
                                                />
                                                {errors.endTime && touched.endTime ? (
                                                    <p className="p_msg">
                                                        {errors.endTime}
                                                    </p>
                                                ) : null}

                                            </div>
                                        </Col>
                                        <Col md={12} sm={12}>
                                            <Row>

                                                <Col md={6}>
                                                    <div className="form-group booking-inp inpt-margin">
                                                        <label for="exampleFormControlInput1" className="form-label">Total Peoples*</label>
                                                        <input type="number"
                                                            name='totalPeoples'
                                                            value={values.totalPeoples}
                                                            onChange={handleChange}
                                                            placeholder='total person'
                                                            onBlur={() => setFieldTouched('totalPeoples', true, true)}
                                                            className="form-control"
                                                        />

                                                        {errors.totalPeoples && touched.totalPeoples ? (
                                                            <p className="p_msg">
                                                                {errors.totalPeoples}
                                                            </p>
                                                        ) : null}
                                                    </div>

                                                </Col>
                                                <Col md={6}>
                                                    <div className="form-group booking-inp inpt-margin">
                                                        <label for="exampleFormControlInput1" className="form-label">Advance Payment*</label>
                                                        <input type="number"
                                                            name='advancePayment'
                                                            value={values.advancePayment}
                                                            onChange={handleChange}
                                                            placeholder='advancePayment'
                                                            onBlur={() => setFieldTouched('advancePayment', true, true)}
                                                            className="form-control"
                                                        />

                                                        {errors.advancePayment && touched.advancePayment ? (
                                                            <p className="p_msg">
                                                                {errors.advancePayment}
                                                            </p>
                                                        ) : null}
                                                    </div>

                                                </Col>
                                            </Row>

                                        </Col>
                                        <div className='booking-btn'>

                                            <Col md={12}>
                                                <Button className='search-btn booking-btn' type='submit' onClick={handleSubmit} >
                                                    Submit Form
                                                </Button>
                                            </Col>
                                        </div>

                                    </Row>


                                </Col>
                            </Row>
                        </div>

                    </div>

                </Container>

            </div>
        </>
    )
}

export default BookingForm
