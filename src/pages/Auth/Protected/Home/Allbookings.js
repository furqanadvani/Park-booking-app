import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../features/userSlice';
import axios from 'axios';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Pagination, Table } from 'antd';

import './Allbookings.css'

function AllBookings() {

  const [users, setUsers] = useState([]);
  const user = useSelector(selectUser);


  const userId = user._id;
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(`/userbookings?userId=${userId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('user-token')}`
        },

      })
      const apiRes = response.data.data;
      setUsers(apiRes);
      console.log(apiRes)
    } catch (error) {
      console.log(error)
    }
  }


  const handleDelete = async (userId) => {
    try {


      console.log(userId)
      const iduser = { "bookingId": userId }

      const response = await axios.put(`/cancelbooking`, iduser);


      alert('Your booking has been canceled');
      fetchData(); 
      // console.log('User deleted successfully:', userId);
    } catch (error) {
      alert("You do not have permission to access this resource")
      console.error('Error during delete:', error.message);
    }
  };

  const navigate = useNavigate()


  const columns = [
    {
      title: 'Park',
      dataIndex: 'Park',
      key: 'Park',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'startTime',
      dataIndex: 'startTime',
      key: 'startTime',
    },



    {
      title: 'endTime',
      dataIndex: 'endTime',
      key: 'endTime',
    },
    {
      title: 'status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record, index) => (
        <span> {record.status === 'pending' && (
          <Link to={`/updateBooking/${record?.id}/${users[index]?.parkId?._id}`} className='btn btn-sm btn-success'>Edit</Link>
          )}  
          {record.status === 'pending' && (
          <button className='btn btn-sm btn-danger ms-1' onClick={() => handleDelete(record.id)}>cancel</button>
        )}
        </span>
      ),
    },
  ];
  //   console.log(record)
  //   const parkname = user.parkId.name;
  //   console.log(parkname)
  const dataSource = Array.isArray(users)


    ? users.map((user) => ({
      id: user?._id,
      Park: user?.parkId.name,
      date: user?.date.split('T')[0],
      startTime: user.startTime.slice(11, 16),
      endTime: user.endTime.slice(11, 16),
      status: user.status
    }))
    : [];

  return (
    <div>

<nav class="navbar navbar-expand-lg ">
  <div class="container">
    <a class="navbar-brand fs-1 text bold nav-logo" href="#">Heaven<spam className='navlogo-span'>.com</spam></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
      <ul class="navbar-nav  mb-2 mb-lg-0 gap-2 ">
        <li class="nav-item">
        <Button onClick={() => navigate('/home')}>
                    Home
                  </Button>
        </li>
        
       
      </ul>
      
    </div>
  </div>
</nav>
    
      <Col md={12} sm={12} lg={12} xl={12}>
        <div className='user-list section-padding'>
          <h1>All Booking's</h1>

          <div className='user-box'>
            <Table columns={columns} dataSource={dataSource} pagination={false} />

          </div>

        </div>

      </Col>
    </div>
  )
}

export default AllBookings
