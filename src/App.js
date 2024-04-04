import React, { useEffect, useState } from 'react';
import './App.css';
import { ProtectedRoute, AuthRoute } from './Routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Loader';
import { toast } from 'react-toastify';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
 
  const fetchData = async () => {
    const token = localStorage.getItem('user-token');

    try {
      if (token) { 
        const response = await axios.get('/user/getprofile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          const userDataApi = response.data.data;
          console.log(userDataApi);
          dispatch(login(userDataApi));
          navigate('/searchpark');
        } else {
          console.log("Failed to fetch user profile data:", response.statusText);
          dispatch(logout());
          navigate('/login')
        }
      } else {
        dispatch(logout());

        navigate('/login')
         // Logout if token doesn't exist

      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
      toast.error(error?.response?.data?.message)
      dispatch(logout());
      navigate('/login')
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchData();
  }, [localStorage.getItem('user-token')]); // useEffect dependency array

  if (loading) {
    return <Loader/>;
  } 

  return (
    <>
      {user ? <ProtectedRoute /> : <AuthRoute />}
    </>
  );
}

export default App;
