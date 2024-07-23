import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Img1 from '../assets/Images/NewSilder/img1.jpeg'
import Img2 from '../assets/Images/NewSilder/Corporate Health.png'
import Img3 from '../assets/Images/NewSilder/Diagnostic Centers.png'
import Img4 from '../assets/Images/NewSilder/Health Insurance.png'
import Img5 from '../assets/Images/NewSilder/Expert Doctors.png'
import Img6 from '../assets/Images/NewSilder/Home Healthcare.png'
import Img7 from '../assets/Images/NewSilder/Hospitals.png'
import Img8 from '../assets/Images/NewSilder/Pathology.png'
import Img9 from '../assets/Images/NewSilder/Pharmacy.png'
import Img1 from '../assets/Images/NewSilder/Surgery Packages.png'

function AutoSlider() {
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", zIndex: "", marginRight: "" }}
        onClick={onClick}
      />
    );
  };

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", zIndex: "", marginLeft: "25px" }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className=" mx-1 sm:mx-0">
      <Slider {...settings}>
        <div className="relative">
          <img src={Img1} alt="" className="xl:h-[345px] w-full" />
          <button className="absolute underline underline-offset-2 bottom-1 right-1 sm:bottom-2 sm:right-2 bg-blue-500 opacity-90 text-white px-2 py-1 md:py-2 text-[10px] sm:text-sm rounded-md shadow-md">
            More Details
          </button>
        </div>
        <div className="relative">
          <img src={Img2} alt="" className="xl:h-[345px] w-full" />
          <button className="absolute underline underline-offset-2 bottom-1 right-1 sm:bottom-2 sm:right-2 bg-blue-500 opacity-90 text-white px-2 py-1 md:py-2 text-[10px] sm:text-sm rounded-md shadow-md">
            More Details
          </button>
        </div>
        <div className="relative">
          <img src={Img3} alt="" className="xl:h-[345px] w-full" />
          <button className="absolute underline underline-offset-2 bottom-1 right-1 sm:bottom-2 sm:right-2 bg-blue-500 opacity-90 text-white px-2 py-1 md:py-2 text-[10px] sm:text-sm rounded-md shadow-md">
            More Details
          </button>
        </div>
        <div className="relative">
          <img src={Img4} alt="" className="xl:h-[345px] w-full" />
          <button className="absolute underline underline-offset-2 bottom-1 right-1 sm:bottom-2 sm:right-2 bg-blue-500 opacity-90 text-white px-2 py-1 md:py-2 text-[10px] sm:text-sm rounded-md shadow-md">
            More Details
          </button>
        </div>
        <div className="relative">
          <img src={Img5} alt="" className="xl:h-[345px] w-full" />
          <button className="absolute underline underline-offset-2 bottom-1 right-1 sm:bottom-2 sm:right-2 bg-blue-500 opacity-90 text-white px-2 py-1 md:py-2 text-[10px] sm:text-sm rounded-md shadow-md">
            More Details
          </button>
        </div>
        <div className="relative">
          <img src={Img6} alt="" className="xl:h-[345px] w-full" />
          <button className="absolute underline underline-offset-2 bottom-1 right-1 sm:bottom-2 sm:right-2 bg-blue-500 opacity-90 text-white px-2 py-1 md:py-2 text-[10px] sm:text-sm rounded-md shadow-md">
            More Details
          </button>
        </div>
        <div className="relative">
          <img src={Img7} alt="" className="xl:h-[345px] w-full" />
          <button className="absolute underline underline-offset-2 bottom-1 right-1 sm:bottom-2 sm:right-2 bg-blue-500 opacity-90 text-white px-2 py-1 md:py-2 text-[10px] sm:text-sm rounded-md shadow-md">
            More Details
          </button>
        </div>
        <div className="relative">
          <img src={Img8} alt="" className="xl:h-[345px] w-full" />
          <button className="absolute underline underline-offset-2 bottom-1 right-1 sm:bottom-2 sm:right-2 bg-blue-500 opacity-90 text-white px-2 py-1 md:py-2 text-[10px] sm:text-sm rounded-md shadow-md">
            More Details
          </button>
        </div>
        <div className="relative">
          <img src={Img9} alt="" className="xl:h-[345px] w-full" />
          <button className="absolute underline underline-offset-2 bottom-1 right-1 sm:bottom-2 sm:right-2 bg-blue-500 opacity-90 text-white px-2 py-1 md:py-2 text-[10px] sm:text-sm rounded-md shadow-md">
            More Details
          </button>
        </div>
      </Slider>
    </div>
  );
}

export default AutoSlider;9