import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {  Login, Signup, Withoutlogin } from '../pages/Auth'


function AuthRoutes() {
  return (
    <Routes>
      <Route index path='/' element={<Withoutlogin />} />
      <Route path='/loginUser' element={<Login />} />
      <Route path='/Sign-Up' element={<Signup />} />
      {/* <Route path='*' element={<Navigate to='/loginUser' />} /> */}
    </Routes>
  )
}

export default AuthRoutes
