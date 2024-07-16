import React from 'react'
import "../css/style.css"
import Aarogya_Aadhar_logo from "../assets/Images/Aarogya_Aadhar_logo.png";
const HowItWorks_Navbar = () => {
    return (
        <>
            <div className="navbar-container ">
            <div className="top-banner-howitworks">
                    <div className="flex space-x-2">
                    <img src={Aarogya_Aadhar_logo} alt="Logo" className='logo h-14 w-32 ' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowItWorks_Navbar