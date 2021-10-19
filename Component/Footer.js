import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Footer = () => {
  return (
    <div className="  bg-[#222325] flex sm:flex-row flex-col justify-between  p-5  md:p-0   ">

      <div className="text-[#f4f5f7] md:p-10   ">
        <span className="font-medium text-base md:text-lg ">
          Amit Chouksey & Company
        </span>
        <p className="text-xs font-thin  text-justify ">Chartered Accountants</p>
      </div> 
     <div className=" md:p-10   sm:flex-row flex  text-[#f4f5f7] font-medium  text-base md:text-lg  ">Made with <BsFillHeartFill className="  w-6   text-red-600  mt-2 " /> by Maitretech</div>
    </div>
  );
}; 
export default Footer;
