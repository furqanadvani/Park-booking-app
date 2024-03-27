import dayjs from 'dayjs';
import { Formik, useFormik } from 'formik';
import React from 'react'
import { updatebookingSchema } from '../../../../Schema';
import { useParams } from 'react-router-dom';
import useSelection from 'antd/es/table/hooks/useSelection';
import { useSelector } from 'react-redux';
import { selectSearchResult } from '../../../../features/searchSlice';
import { Button, Col, Row } from 'react-bootstrap';
import { DatePicker, TimePicker } from 'antd';
import axios from 'axios';

function RescheduleBooking() {

    const { id: bookingId, parkId } = useParams();

    // console.log(parkId);



    const initialValues = {
        bookingId: bookingId,
        parkId: parkId,
        startTime: '',
        endTime: '',
        date: "",
    };

    const { values, errors, touched, handleChange, handleSubmit, setFieldValue, setFieldTouched } = useFormik({
        initialValues: initialValues,
        validationSchema: updatebookingSchema,
        onSubmit: (values) => {


            const formattedUTC = dayjs(`1970-01-01T${dayjs(values?.startTime).toISOString().split('T')[1]}`).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
            setFieldValue('starttime', formattedUTC);
            const formattedEndUTC = dayjs(`1970-01-01T${dayjs(values.endtime).toISOString().split('T')[1]}`).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
            console.log('endtime:', formattedEndUTC);
            console.log(values, "formik values")
            updatebooking(values)


        }
    });


    async function updatebooking(values) {
        try {
            const response = await axios.put(`/reschdeulebooking`, values, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('user-token')}`
                },

            })
            const apiRes = response.data.data;
            // setUsers(apiRes);
            console.log(apiRes)
        } catch (error) {
            console.log(error)
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
            <div className="form-lgn">
                    <div className="container">
                <Formik onSubmit={handleSubmit}>
                        <div className="row d-flex justify-content-center align-items-center">


                            <div className="col-md-6">
                                <div className="form-main-lgn d-flex justify-content-center align-items-center">
                                    <div className="form-container-lgn">
                                        <div className="form-heading">
                                            <h1>Heaven<span>.com</span></h1>
                                        </div>
                                      
                                        <div className="col-md-12">
                                            <div className="row">

                                                <div className="email margin">
                                                    <Col md={12}>
                                                        <div className="form-group">
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
                                                </div>
                                                <div className="phone margin">

                                                    <Col md={12} sm={12}>
                                                        <div className="form-group">
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
                                                </div>
                                                <Col md={12} sm={12}>
                                                    <div className="form-group margin">
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
                                                <div className="btn-lgn">

                                                    <Col md={12}>
                                                        <Button className='search-btn' type='submit' onClick={handleSubmit} >
                                                        Reschedule Booking
                                                        </Button>
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

    </div >
  );
}

export default RescheduleBooking
