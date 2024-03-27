import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/Auth'
import ProfileScreen from '../pages/Auth/Protected/Home/Profile'
import DetailsPages from '../pages/Auth/Protected/Home/details'
import Searchs from '../pages/Auth/Protected/Home/search'
import BookingForm from '../pages/Auth/Protected/Home/bookingform'
import AllBookings from '../pages/Auth/Protected/Home/Allbookings'
import RescheduleBooking from '../pages/Auth/Protected/Home/rescheduleBooking'
import EditprofileForm from '../pages/Auth/Protected/Home/Editprofile'

function ProtectedRoute() {
  
  return (
    <Routes >
      <Route index path='/searchpark' element={<Searchs />} />
      <Route  path='/home' element={<HomePage />} />
      <Route path='/userProfile' element={<ProfileScreen />} />
      <Route path='/allbookings' element={<AllBookings />} />
      <Route path='/bookingform/:cardId' element={<BookingForm />} />
      <Route path="/detail/:cardId" element={<DetailsPages />} />
      <Route path='/updateBooking/:id/:parkId' element={<RescheduleBooking />} />
      <Route path='/updateProfile' element={<EditprofileForm />} />
      {/* <Route path='*' element={<Navigate to='/home' />} /> */}

    </Routes>

  )
}

export default ProtectedRoute
