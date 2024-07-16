import React, { useRef, useState } from "react";
import Ambulance_Service from "../assets/Images/Book-Ambulance.png";
import { IoMdLocate } from "react-icons/io";
import MobileNavbar from "./MobileNavabr";
import Navbar from "./Navbar";
import OurPolicies from "./OurPolicies";
import Footer from "./Footer";
import ScrollingTagline from "./ScrollingTagline";

const BookAmbulance = () => {
  const fileInputRef = useRef(null);
  const [selectedAmbulance, setSelectedAmbulance] = useState("");
  const [selectedAmbulanceType, setSelectedAmbulanceType] = useState("");
  const [selectedHospital, setSelectedHospital] = useState("");

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className="xl:hidden">
        <MobileNavbar />
      </div>
      <div className="hidden xl:flex">
        <Navbar />
      </div>
      <div className="flex xl:hidden fixed top-[83px] sm:top-[105px] bg-white">
        <ScrollingTagline />
      </div>
      <div className="mt-[135px] xl:mt-36 pt-4 py-3">
        <h2 className="text-4xl font-bold text-center text-blue-900">
          Book Ambulance
        </h2>
        <hr className="mt-1 mx-4" />
        <div className="grid grid-cols-12 gap-4 px-3">
          <div className="col-span-12 md:col-span-4 pt-2">
            <div className="sm:flex">
              <div className="flex justify-center text-wrap">
                <img
                  src={Ambulance_Service}
                  alt="Book Free Appointment"
                  className="h-52 w-full"
                />
              </div>
              <div className="leading-6">
                <p className="text-center text-[19px]  text-red-500 font-bold">
                  Emergency Need ?<br />
                  Call on +91 79-7272-7498
                </p>
                <p className="text-center text-blue-900">24/7 Available</p>
                <p className="text-center text-lg text-blue-900 font-semibold">
                  If any accident case please follow below protocol and save
                  life.
                </p>
                <p className="text-center text-lg text-blue-900 font-semibold">
                  Aarogya Aadhar is taking all responsibilities.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-2 mt-1">
              <div className="flex flex-col">
                <label
                  htmlFor="file-input"
                  className="font-semibold text-blue-900 leading-4"
                >
                  Upload Live Photo <span className="text-red-500">*</span>
                </label>
                <button
                  type="button"
                  onClick={handleButtonClick}
                  className="mt-2 p-2 bg-blue-900 text-white rounded"
                >
                  Take Image
                </button>
                <input
                  type="file"
                  id="file-input"
                  ref={fileInputRef}
                  accept="image/*"
                  capture
                  style={{ display: "none" }}
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="pin-code"
                  className="font-semibold text-blue-900"
                >
                  Pin Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="pin-code"
                  placeholder="Enter Pin Code"
                  className="border border-blue-500 h-12 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="mobile-no"
                  className="font-semibold text-blue-900"
                >
                  Mobile No. <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="mobile-no"
                  placeholder="Enter Mobile No."
                  className="border border-blue-500 h-12 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                />
              </div>

              <div className="flex flex-col relative">
                <label
                  htmlFor="patient-otp"
                  className="font-semibold text-blue-900"
                >
                  Enter OTP <span className="text-red-500">*</span>
                </label>
                <div className="relative border border-blue-500 rounded-md px-3 max-w-[85%]">
                  <input
                    type="text"
                    id="patient-otp"
                    placeholder="Enter OTP"
                    className="h-12 outline-none rounded-md placeholder-text flex-grow"
                  />
                  <button className="absolute inset-y-0 right-0 bg-blue-900 text-white rounded-md px-3">
                    GET OTP
                  </button>
                </div>
              </div>

              <button className="flex justify-center items-center bg-blue-900 mt-6 text-white h-12 rounded-md w-full">
                Locate Me{" "}
                <span className="ml-2">
                  <IoMdLocate className="h-5 w-5" />
                </span>
              </button>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-3 gap-2">
              <div className="flex flex-col">
                <label
                  htmlFor="first-name"
                  className="font-semibold text-blue-900"
                >
                  First Name <span className="text-red-500">*</span>{" "}
                </label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="Enter First Name"
                  className="border border-blue-500 h-12 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="middle-name"
                  className="font-semibold text-blue-900"
                >
                  Middle Name <span className="text-red-500">*</span>{" "}
                </label>
                <input
                  type="text"
                  id="middle-name"
                  placeholder="Enter Middle Name"
                  className="border border-blue-500 h-12 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="last-name"
                  className="font-semibold text-blue-900"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Enter Last Name"
                  className="border border-blue-500 h-12 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="dob" className="font-semibold text-blue-900">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="dob"
                  className="border border-blue-500 h-12 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="gender" className="font-semibold text-blue-900">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  id="gender"
                  className="border border-blue-500 h-12 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="transgender">Transgender</option>
                </select>
              </div>

              <div className="flex flex-col relative">
                <label
                  htmlFor="patient-mobile-no"
                  className="font-semibold text-blue-900"
                >
                  Mobile No <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="patient-mobile-no"
                  placeholder="Enter Mobile No."
                  className="border border-blue-500 h-12 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                />
              </div>

              <div className="flex flex-col relative">
                <label
                  htmlFor="patient-email"
                  className="font-semibold text-blue-900"
                >
                  Email ID
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative border border-blue-500 rounded-md px-3 max-w-[85%]">
                  <input
                    type="text"
                    id="patient-email"
                    placeholder="Enter Email ID"
                    className="h-12 outline-none rounded-md placeholder-text flex-grow"
                  />
                  <button className="absolute inset-y-0 right-0 bg-blue-900 text-white rounded-md px-3">
                    GET OTP
                  </button>
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="patient-email-otp"
                  className="font-semibold text-blue-900"
                >
                  Enter Email OTP
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative border border-blue-500 rounded-md px-3 max-w-[85%]">
                  <input
                    type="text"
                    id="patient-email-otp"
                    placeholder="Enter Email OTP"
                    className="h-12 outline-none rounded-md placeholder-text flex-grow"
                  />
                  <button className="absolute inset-y-0 right-0 bg-blue-900 text-white rounded-md px-2">
                    VERIFY OTP
                  </button>
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="select-ambulance"
                  className="font-semibold text-blue-900"
                >
                  Select Ambulance <span className="text-red-500">*</span>
                </label>
                <select
                  id="select-ambulance"
                  className="border border-blue-500 h-12 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                  value={selectedAmbulance}
                  onChange={(e) => setSelectedAmbulance(e.target.value)}
                >
                  <option value="">Select Ambulance</option>
                  <option value="govt-108">Government 108</option>
                  <option value="private">Private Ambulance</option>
                  <option value="hospital">Hospital Ambulance</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="ambulance-type"
                  className="font-semibold text-blue-900"
                >
                  Ambulance Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="ambulance-type"
                  className="border border-blue-500 h-12 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                  value={selectedAmbulanceType}
                  onChange={(e) => setSelectedAmbulanceType(e.target.value)}
                >
                  <option value="">Select Ambulance Type</option>
                  <option value="basic">Basic Ambulance</option>
                  <option value="o2">O2 Ambulance</option>
                  <option value="cardiac">Cardiac Ambulance</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="hospital"
                  className="font-semibold text-blue-900"
                >
                  Hospital <span className="text-red-500">*</span>
                </label>
                <select
                  id="hospital"
                  className="border border-blue-500 h-12 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                  value={selectedHospital}
                  onChange={(e) => setSelectedHospital(e.target.value)}
                >
                  <option value="">Select Hospital</option>
                  <option value="private">Private Hospital</option>
                  <option value="government">Government Hospital</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="city" className="font-semibold text-blue-900">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter City Name"
                  className="border border-blue-500 h-12 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="patient-pin-code"
                  className="font-semibold text-blue-900"
                >
                  Pin Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="patient-pin-code"
                  placeholder="Enter Pin Code"
                  className="border border-blue-500 h-12 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="aadhar" className="font-semibold text-blue-900">
                  Aadhar Card No. <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="aadhar"
                  placeholder="Enter Aadhar No."
                  className="border border-blue-500 h-12 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                />
              </div>
            </div>
            <div className="flex justify-end mt-4 xl:mt-0">
              <button className="text-white bg-blue-900 px-3 py-2 rounded-md">
                Book your Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
      <OurPolicies />
      <Footer />
    </>
  );
};

export default BookAmbulance;
