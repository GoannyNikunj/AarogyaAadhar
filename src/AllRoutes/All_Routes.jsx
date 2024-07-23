import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import AarogyaDhan from '../Pages/AarogyaDhan'
import BookAppointment from '../Component/BookAppointment'
import BedBooking from '../Component/BedBooking'
import BookAmbulance from '../Component/BookAmbulance'
import ApplyHealthCard from '../Component/ApplyHealthCard'
import HowItWorks from '../Component/HowItWorks'

const All_Routes = () => {
  return (  
    <div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bookappointment' element={<BookAppointment/>}/>
        <Route path='/bedBooking' element={<BedBooking/>}/>
        <Route path='/AmbulanceBooking' element={<BookAmbulance/>}/> 
        <Route path='/apply-health-card' element={<ApplyHealthCard/>}/>
        <Route path="/aarogyadhan" element={<AarogyaDhan/>}/>
        <Route path='/howitwork' element={<HowItWorks/>}/>
      </Routes>
    </div>
  )
}

export default All_Routes
