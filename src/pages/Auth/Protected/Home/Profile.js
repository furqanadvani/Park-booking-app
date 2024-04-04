import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { logout, selectUser } from './../../../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './Profile.css'
import { selectUserProfile } from '../../../../features/userprofileSlice';
// import { AvatarScehma } from '../../../../Schema';
// import { Form, Formik, useFormik } from 'formik';

// import { PlusOutlined } from '@ant-design/icons';
// import { Modal, Upload } from 'antd';

// const getBase64 = (file) =>
//     new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = () => resolve(reader.result);
//         reader.onerror = (error) => reject(error);
//     });


function ProfileScreen() {
  // const [previewOpen, setPreviewOpen] = useState(false);
  // const [previewImage, setPreviewImage] = useState('');
  // const [previewTitle, setPreviewTitle] = useState('');
  // const [fileList, setFileList] = useState([]);

  // const handleCancel = () => setPreviewOpen(false);


  // const handlePreview = async (file) => {
  //     if (!file.url && !file.preview) {
  //         file.preview = await getBase64(file.originFileObj);
  //     }
  //     setPreviewImage(file.url || file.preview);
  //     setPreviewOpen(true);
  //     setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  // };

  //   const uploadButton = (
  //       <button
  //           style={{
  //               border: 0,
  //               background: 'none',
  //           }}
  //           type="button"
  //       >
  //           <PlusOutlined />
  //           <div
  //               style={{
  //                   marginTop: 8,
  //               }}
  //           >
  //               Upload
  //           </div>
  //       </button>
  //   );

  //   const initialValues = {
  //     avatar : {}
  //   }


  //   const { values, errors, touched, handleChange, handleSubmit, setFieldValue, setFieldTouched } = useFormik({
  //     initialValues: initialValues,
  //     validationSchema: AvatarScehma,
  //     onSubmit: async (values) => {
  //         console.log(values, "formik values");
  //         let body = new FormData();

  //         // Check if values.images exists before iterating over it
  //         if (values.images) {
  //             values.images.forEach((file) => {
  //                 console.log(`Avatar:`, file);
  //                 body.append(`avatar`, file?.originFileObj);
  //             });
  //         }

  //         UploadAvatar(body);
  //     }
  // });


  // const handleChangeImg = ({ fileList }) => {
  //   // Map the fileList to ensure it contains the actual file objects
  //   const updatedFileList = fileList.map(file => {
  //       if (file.originFileObj) {
  //           return file;
  //       } else {
  //           // If the file does not have the originFileObj property, it might be a dummy file object with only UID.
  //           // Retrieve the actual file object from the state based on the UID.
  //           const existingFile = fileList.find(f => f.uid === file.uid);
  //           return existingFile || file;
  //       }
  //   });
  //   setFieldValue('avatar', updatedFileList);
  // handleSubmit()

  //   console.log(updatedFileList)
  // };

  // async function UploadAvatar (body){
  //   try{
  //     const ApiImg = axios.put('/update/useravatar' , body ,{
  //       headers : {
  //         'Authorization': `Bearer ${localStorage.getItem('user-token')}`
  //       }
  //     })
  //   }catch(error){
  //       console.log(error);
  //   }
  // }

  const user = useSelector(selectUser);

  const navigate = useNavigate()

  const dispatch = useDispatch()
  // const handleChange = ()=> navigate('/home')


  const handleSignOut = () => {
    dispatch(logout());
    localStorage.removeItem('user-token');

    navigate('/loginUser');
  };










  return (

    <>

      <nav class="navbar navbar-expand-lg ">
        <div class="container">
          <a class="navbar-brand fs-1 text bold nav-logo" href="#" onClick={() => navigate('/searchpark')}>Heaven<spam className='navlogo-span'>.com</spam></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
            <ul class="navbar-nav  mb-2 mb-lg-0 gap-2 ">

              <li class="nav-item">
                <Button onClick={() => navigate('/allbookings')}>
                  Bookings
                </Button>
              </li>


            </ul>

          </div>
        </div>
      </nav>







      <div className="profileScreen">
        {/* <Nav /> */}
        <div className="profileScreen_body">
          <div className='profileScreen_body-main  d-flex justify-content-between flex-row'>
            <h1>Profile</h1>
            <div className=''>
              <Button onClick={() => navigate('/updateProfile', { state: { isUpdate: true } })}>Edit</Button>
            </div>
          </div>
          <div className="profileScreen_info">
            {/* <Upload
        name="avatar"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        fileList={values.avatar}
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        onChange={handleChangeImg}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: '100%',
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload> */}
            {/* <Upload
                                                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                                    listType="picture-circle"
                                                    className="avatar-uploader"
                                                    fileList={values?.avatar}
                                                    onPreview={handlePreview}
                                                    onChange={handleChangeImg}
                                                >
                                                    {fileList.length >= 1 ? null : uploadButton}
                                                </Upload>
                                                <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                                    <img
                                                        alt="example"
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                        src={previewImage}
                                                    />
                                                </Modal>
                                                {errors.avatar && touched.avatar ? (
                                                    <p className="p_msg">
                                                        {errors.avatar}
                                                    </p>
                                                ) : null} */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="" />
            <div className="profileScreen_details">
              <h2>{user.email}</h2>
              <div className="profile_plans">


                <h2>First Name : {user.firstname}{user.lastname}</h2>
                <h2>Last Name : {user.lastname}</h2>
                <h2>Email : {user.email}</h2>
                <h2>Phone no : {user.phonenumber}</h2>



                {/* <PlanScreen /> */}



                <button
                  onClick={() => handleSignOut()}
                  className="profileScreen_signOut">Sign Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default ProfileScreen;
