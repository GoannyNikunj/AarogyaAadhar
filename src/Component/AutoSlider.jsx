import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img2 from '../assets/Images/NewSilder/Img1.jpeg'
import Img3 from '../assets/Images/NewSilder/Img2.jpeg'
import Img4 from '../assets/Images/NewSilder/Img3.jpeg'
import Img5 from '../assets/Images/NewSilder/Img4.jpeg'
import Img6 from '../assets/Images/NewSilder/Img5.jpeg'
import Img7 from '../assets/Images/NewSilder/Img6.jpeg'
import Img8 from '../assets/Images/NewSilder/Img7.jpeg'
import Img9 from '../assets/Images/NewSilder/Img8.jpeg'
// import Img1 from '../assets/Images/NewSilder/Img9.jpeg'

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
        {/* <div className="relative">
          <img src={Img1} alt="" className="xl:h-[345px] w-full" />
          <button className="absolute underline underline-offset-2 bottom-1 right-1 sm:bottom-2 sm:right-2 bg-blue-500 opacity-90 text-white px-2 py-1 md:py-2 text-[10px] sm:text-sm rounded-md shadow-md">
            More Details
          </button>
        </div> */}
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