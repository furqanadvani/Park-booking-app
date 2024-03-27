import axios from 'axios';
import { store } from './app/store';
import { logout } from './features/userSlice';



export const interceptor = async () => {
	axios.defaults.baseURL = 'http://192.168.105.33:5000/api/v1';
    console.log("mogo")
    axios.interceptors.request.use(
        function (config) {
            const token = localStorage.getItem('user-token');
            
            if (token) {
              config.headers['Authorization'] = `Bearer ${token}`;
            }
      
            return config;
        },
        function (error) {
            console.log('error a', error);
            return Promise.reject(error.response);
        }
    );
    axios.interceptors.response.use(
        function (response) {
            (async () => {
                if(response?.data?.error && response?.data?.data?.message === 'Session expired.') {
                    store.dispatch(logout(true, 'expire', response?.data?.data?.message))
                }

            })();

            return response;
        },
        async function (error) {
            console.log('error', error);
            return Promise.reject(error?.message ? error : error.response);
        }
    );
};



