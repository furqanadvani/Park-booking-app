import React, { useEffect, useState } from 'react';
import './App.css';
import { ProtectedRoute, AuthRoute } from './Routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BookingForm from './pages/Auth/Protected/Home/bookingform';
import Loader from './Loader';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const fetchData = async () => {
    
    try {
      const response = await axios.get('/user/getprofile', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('user-token')}`
        }
      });

      if (response.status === 200) {
        const userDataApi = response.data.data;
        console.log(userDataApi);

        dispatch(login(userDataApi));
        // navigate('/searchpark')
      } else {
        console.log("Failed to fetch user profile data:", response.statusText);
        dispatch(logout());
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
      dispatch(logout());
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
      fetchData();
  },[]);


 

  if (loading) {
    return
    <Loader/>;
   
  } 

  return (
    <>
      {user ? <ProtectedRoute /> : <AuthRoute />}
      {/* <BookingForm/> */}
      {/* <Loader/> */}
    </>
  );
}

export default App;
