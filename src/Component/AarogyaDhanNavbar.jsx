import React from 'react';
import "../css/style.css";
import Aarogya_Aadhar_logo from "../assets/Images/Aarogya_Aadhar_logo.png";
import { NavLink, useNavigate } from 'react-router-dom';


const AarogyaDhanNavbar = () => {
    const navigate=useNavigate()
    return (
        <>
            <div className="navbar-container">
                <div className="top-banner">
                    <div className="flex items-center space-x-2">
                        <p className="text-lg font-bold text-blue-900 " style={{alignItems:'center'}}>
                            Be a savior for many. Donate monthly to help save invaluable lives in India
                        </p>
                        <span className="double-arrow">»</span>
                        <button className="donate-button">
                            <span>Donate Now</span>
                        </button>
                    </div>
                </div>
                <div className="main-navbar" style={{padding:30}}>
                    <ul className="flex space-x-8 ml-5 mr-5 items-center">
                        <li onClick={()=>navigate('/')}><img src={Aarogya_Aadhar_logo} alt="Logo" className='logo h-12  w-32 cursor-pointer'/></li>
                        <li><img src={Aarogya_Aadhar_logo} alt="Logo" className='logo h-12  w-32 ' /></li>
                        <li className="cursor-pointer text-blue-900">Start a Free Fundraiser</li>
                        <li className="cursor-pointer text-blue-900"><NavLink to='/howitwork'>How it Works</NavLink></li>
                        <li className="cursor-pointer text-blue-900">Browse Fundraisers</li>
                        <li className="cursor-pointer text-blue-900">Top Fundraisers</li>
                    </ul>
                    <div className="flex items-center space-x-4 mr-5 ml-5">
                        <button className="help-button">Help</button>
                        <button className="help-button ">Login</button>
                        <select className="bg-transparent py-1 px-3 rounded">
                            <option value="INR text-blue-900">INR</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AarogyaDhanNavbar;