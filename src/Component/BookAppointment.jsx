import React, { useState } from "react";
import Book_Free_Appointment from "../assets/Images/Book-Free-Appointment.png";
import MobileNavbar from "./MobileNavabr";
import Navbar from "./Navbar";
import OurPolicies from "./OurPolicies";
import Footer from "./Footer";
import ScrollingTagline from "./ScrollingTagline";

const BookAppointment = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [aadhar, setAadhar] = useState("");

  const ExpertDoctor = [
    "Select-Your-Service",
    "General Physician",
    "Chest Physician",
    "Pediatricians",
    "Obstetrician / Gynecologists",
    "IVF Consultant",
    "Otolaryngologists / ENT",
    "Ophthalmologists / Eye Specialist",
    "Cardiologists",
    "Nephrologists",
    "General Surgeons",
    "Proctologist",
    "Orthopedics / Joint Replacement Surgeon",
    "Physiotherapist",
    "Oncologists / Cancer",
    "Radiologists",
    "Urologists",
    "Dermatologists",
    "Neurologists",
    "Psychiatrists",
    "Dentist",
    "Dietitian",
    "Sexologist",
    "Gastroenterologists",
    "Geriatric Medicine",
    "Allergists",
    "Endocrinologists",
    "Cardiac Surgeons",
    "Rheumatologists",
    "Pulmonologists",
    "Anesthesiologists",
    "Ayurvedic",
    "Homeopathy",
    "Chiropractor",
  ];

  const [firstNameError, setFirstNameError] = useState("");
  const [middleNameError, setMiddleNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [pinCodeError, setPinCodeError] = useState("");
  const [aadharError, setAadharError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setFirstNameError("");
    setMiddleNameError("");
    setLastNameError("");
    setMobileError("");
    setPinCodeError("");
    setAadharError("");

    if (!isCapitalized(firstName)) {
      setFirstNameError("First name should start with a capital letter.");
    }

    if (!isCapitalized(middleName)) {
      setMiddleNameError("Middle name should start with a capital letter.");
    }

    if (!isCapitalized(lastName)) {
      setLastNameError("Last name should start with a capital letter.");
    }

    if (mobile.length !== 10) {
      setMobileError("Mobile number must be 10 digits.");
    }

    if (pinCode.length !== 6) {
      setPinCodeError("Pin code must be 6 digits.");
    }

    if (aadhar.length !== 12) {
      setAadharError("Aadhaar number must be 12 digits.");
    }

    if (
      firstNameError ||
      middleNameError ||
      lastNameError ||
      mobileError ||
      pinCodeError ||
      aadharError
    ) {
      return;
    }

    console.log("Form submitted:", {
      firstName,
      middleName,
      lastName,
      dob,
      gender,
      category,
      mobile,
      email,
      otp,
      city,
      pinCode,
      aadhar,
    });
  };

  const isCapitalized = (name) => {
    return /^[A-Z]/.test(name);
  };

  const handleCategoryChange = (e) => {
    if (e.target.value === "Select-Your-Service") {
      setCategory("");
    } else {
      setCategory(e.target.value);
    }
  };

  const handleGenderChange = (e) => {
    if (e.target.value === "Select-Gender") {
      setGender("");
    } else {
      setGender(e.target.value);
    }
  };

  return (
    <>
      <div className=" lg:hidden">
        <MobileNavbar />
      </div>
      <div className=" hidden lg:flex">
        <Navbar />
      </div>
      <div className=" flex lg:hidden fixed top-[83px] sm:top-[100px] bg-white">
        <ScrollingTagline />
      </div>
      <div className="mt-[135px] xl:mt-[145px] pt-3 py-3">
        <h2 className="text-4xl font-bold text-center mx-2 py-2 text-blue-900">
          Book Free Appointment
        </h2>
        <hr className="mt-[1px] mx-4" />
        <div className="grid md:grid-cols-12 gap-3 py-4 px-3">
          <div className="col-span-12 md:col-span-4 w-full pt-0 flex flex-col justify-center items-center">
            <img src={Book_Free_Appointment} alt="Book Free Appointment" />
          </div>
          <div className="col-span-12 md:col-span-8">
            <form onSubmit={handleSubmit}>
              {/* <p className="font-semibold text-2xl py-1 mb-2 text-blue-900">
                Patient Details:
              </p> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
                <div className="flex flex-col">
                  <label
                    htmlFor="firstName"
                    className="font-semibold text-blue-900"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter First Name"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                    required
                  />
                  {firstNameError && (
                    <span className="text-red-500 text-sm">
                      {firstNameError}
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="middleName"
                    className="font-semibold text-blue-900"
                  >
                    Middle Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="middleName"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                    placeholder="Enter Middle Name"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                    required
                  />
                  {middleNameError && (
                    <span className="text-red-500 text-sm">
                      {middleNameError}
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="lastName"
                    className="font-semibold text-blue-900"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter Last Name"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                    required
                  />
                  {lastNameError && (
                    <span className="text-red-500 text-sm">
                      {lastNameError}
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dob" className="font-semibold text-blue-900">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="gender"
                    className="font-semibold text-blue-900"
                  >
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="gender"
                    value={gender}
                    onChange={handleGenderChange}
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                    required
                  >
                    {!gender && (
                      <option disabled hidden value="">
                        Select Gender
                      </option>
                    )}
                    <option value="Select-Gender">Select-Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="category"
                    className="font-semibold text-blue-900"
                  >
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    value={category}
                    onChange={handleCategoryChange}
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                    required
                  >
                    {!category && (
                      <option disabled hidden value="">
                        Select Your Service
                      </option>
                    )}
                    {ExpertDoctor.map((doctor, index) => (
                      <option key={index} value={doctor} className="text-sm">
                        {doctor}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="mobile"
                    className="font-semibold text-blue-900"
                  >
                    Mobile <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter Mobile Number"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                    required
                  />
                  {mobileError && (
                    <span className="text-red-500 text-sm">{mobileError}</span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="font-semibold text-blue-900">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email Address"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="otp" className="font-semibold text-blue-900">
                    OTP
                  </label>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="city" className="font-semibold text-blue-900">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter City Name"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="pinCode"
                    className="font-semibold text-blue-900"
                  >
                    Pin Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="pinCode"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                    placeholder="Enter Pin Code"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                    required
                  />
                  {pinCodeError && (
                    <span className="text-red-500 text-sm">{pinCodeError}</span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="aadhar"
                    className="font-semibold text-blue-900"
                  >
                    Aadhar Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="aadhar"
                    value={aadhar}
                    onChange={(e) => setAadhar(e.target.value)}
                    placeholder="Enter Aadhar Number"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                    required
                  />
                  {aadharError && (
                    <span className="text-red-500 text-sm">{aadharError}</span>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-auto block"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
      <OurPolicies />
      <Footer />
    </>
  );
};

export default BookAppointment;