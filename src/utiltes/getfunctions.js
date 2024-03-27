import axios from "axios";
import { login, logout, selectUser } from "../features/userSlice";



  

// export const getProfile = (CB) 
// const dispatch = useDispatch() 

// export const getProfile = (CB) => async (dispatch) => {
//     let token = await localStorage.getItem('user-token');
//     if (token) {
//         dispatch({ type: AUTH.GET_USER_PROFILE, loading: true, isLoggedIn: true });
//         axios.get(`/user/getprofile`)
//             .then(async ({ data }) => {
//                 if (!data.error) {
//                     dispatch({ type: AUTH.GET_USER_PROFILE, loading: false, user: data?.data, isLoggedIn: true });
//                     CB && CB();
//                 } else {
//                     handleError(data?.data?.message || 'Something went wrong!');
//                     dispatch({ type: AUTH.GET_USER_PROFILE, loading: false, isLoggedIn: true });
//                 }
//             })
//             .catch((error) => {
//                 dispatch({ type: AUTH.GET_USER_PROFILE, loading: false, isLoggedIn: false });
//                 handleError(error?.data?.message || error?.message);

//             });
//     } else {
//         dispatch(logout())
//     }
// // }