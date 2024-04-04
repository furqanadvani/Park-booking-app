import axios from 'axios';
import { store } from './app/store';
import { logout } from './features/userSlice';


export const interceptor = async () => {


	axios.defaults.baseURL = 'https://jolly-gold-cuttlefish.cyclic.app/api/v1';
    // 192.168.1.105 hkm
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
                console.log('response', response)
                // if(response?.data?.isExpired) {
                //     // navigate('/login')
                //     await localStorage.removeItem('user-token')
                //     store.dispatch(logout(response?.data?.message))
                // }
            })();
            
            return response;
        },
        async function (error) {
            console.log("user logout");

            if (error.respones?.data.isExpired){
                await localStorage.removeItem('user-token')
                store.dispatch(logout(error.response?.data?.message))
            }
            console.log("token error")
            console.log('error', error);
            return Promise.reject(error?.message ? error : error.response);
        }
    );
};



