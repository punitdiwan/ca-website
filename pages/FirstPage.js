import React from "react";
import { Parallax } from "react-parallax";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AiFillSetting } from "react-icons/ai";
import { FaRegStar, FaDesktop } from "react-icons/fa";
import { FiCodepen } from "react-icons/fi";
import { HiAdjustments } from "react-icons/hi";
import { ImOffice } from "react-icons/im";

const FirstPage = () => {
  const slides = [
    {
      title:      "/image/14.jpg",
      description:"Personal Approach",
      subdescription:"We provides always our best services for our clients and always try to achive our client's trust and satisfaction."
    },
   
    {
      title: "/image/28.jpeg",
      description:"Reliable Accounting",
      subdescription:"We provides always our best services for our clients and always try to achive our client's trust and satisfaction."
    },
    {
      title: "/image/16.jpg",
      description:"International Tax Experts",
      subdescription:"International knowledge of economic system grands you a unique business opportunities."
    },
  ];

const Industries = [
  {

  }https://github.com/punitdiwan/ca-website.git

]

  return (
    <div>
      <Carousel
         className="relative"
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        {slides.map((slide, index) => {
          return (
            <div className="carousel-inner" role="listbox" key={index}>
              <div className="carousel" role="listbox">
                <img className="h-[70vh]  " src={slide.title} alt="image" />

                <div className="legend absolute text-black mb-10  ">
                  <div className="text-left   ">
                    <p className=" text-2xl sm:text-4xl md:text-6xl font-medium text-white">
                      {slide.description} <br /> 
                    </p>
                      <p className=" w-[70vw] lg:w-[50vw] md:text-xl text-lg text-white">{slide.subdescription}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <div className="flex flex-col justify-center  items-center m-10  gap-5 ">
        <h1 className="text-md font-bold text-[#eab158] text-center">
          WELCOME TO Amit Chouksey & Company  
        </h1>
        <div className=" sm:2xl md:texl-3xl lg:text-4xl flex  flex-col justify-center  items-center  text-center">
          <h2 className="flex justify-center items-center font-normal ">
            We are a Chartered Accountant Firm with team of qualified and
            motivated professionals, offering integrated one-stop services.
          </h2>
        </div>
        <div className="    mt-10 grid  lg:grid-cols-3 gap-10 ">
          <div className="flex  gap-2">
            <i className=" ">
              <ImOffice className="h-9 w-9 text-[#222325]" />
            </i>
            <div className="">
              <h2 className="text-lg ">Industry Implementation</h2>
              <p className=" text-[#6a6965] text-sm pr-16 mt-3">
                We give advice on Company Registration in India and provide the
                complete solution for Company Formation in India, Private
                limited Company Formation and Company Incorporation in India.
              </p>
            </div>
          </div>
          <div className="flex   gap-2">
            <i className=" ">
              <FaDesktop className="h-9 w-9 text-[#222325]" />
            </i>
            <div className="">
              <h2 className="text-lg ">Corporate & Project Finance</h2>
              <p className=" text-[#6a6965] text-sm pr-16 mt-3">
                To impart the training to staff of various levels involved in
                the accounts finance department, tax department and other
                compliance management groups on various areas listed herein
              </p>
            </div>
          </div>
          <div className="flex   gap-2">
            <i className=" ">
              <AiFillSetting className="h-9 w-9 text-[#222325]" />
            </i>
            <div className="">
              <h2 className="text-lg ">Working Capital Finance</h2>
              <p className=" text-[#6a6965] text-sm pr-16 mt-3">
                India has started integrating its economy with global economy.
                This has led to increased cross border flow of goods, services,
                funds and even intangibles
              </p>
            </div>
          </div>

          <div className="flex  gap-2">
            <i className=" ">
              <FiCodepen className="h-9 w-9 text-[#222325]" />
            </i>
            <div className="">
              <h2 className="text-lg ">SEZ Advisory Services</h2>
              <p className=" text-[#6a6965] text-sm pr-16 mt-3">
                We act as one stop solution to all requirement of a SEZ/EOU/STPI
                registered unit or the unit which is proposing to become such
                unit.
              </p>
            </div>
          </div>
          <div className="flex   gap-2">
            <i className=" ">
              <HiAdjustments className="h-9 w-9 text-[#222325]" />
            </i>
            <div className="">
              <h2 className="text-lg ">Taxation</h2>
              <p className=" text-[#6a6965] text-sm pr-16 mt-3">
                Preparation and filing of Income-tax and Wealth-tax returns of
                resident and non-resident individuals, domestic and foreign
                companies and other entities/clients
              </p>
            </div>
          </div>
          <div className="flex   gap-2">
            <i className=" ">
              <FaRegStar className="h-9 w-9 text-[#222325]" />
            </i>
            <div className="">
              <h2 className="text-lg ">Audit</h2>
              <p className=" text-[#6a6965] text-sm pr-16 mt-3">
                Statutory Audit, Internal Audit, Concurrent Audit, Stock Audit,
                Due Diligence Audit & Investigation Reporting.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Parallax
          bgImage="/image/3.jpg"
          className="h-[50%] lg:h-[60%]"
          strength={500}
          bgImageAlt="the cat"
        >
          <div className="flex flex-col items-center text-center   justify-center mt-20">
            <h1 className="text-4xl  md:text-6xl text-white">
              Learn More About Our Services
            </h1>
            <Link href="#">
              <a className=" border-2 mt-10  mb-5 border-solid border-white text-white hover:bg-white px-7 py-4 rounded-full  hover:text-black">
                OUR SERVICES
              </a>
            </Link>
          </div>
        </Parallax>
        <div className=" grid lg:grid-cols-3 gap-5 mt-5 lg:mt-0 ">
          <div className=" flex flex-col gap-5 justify-center ml-5 text-center ">
            <h1 className="text-xl font-bold text-[#eab158]  ">About us</h1>
            <p className="text-7xl font-normal">
              Who <br /> We Are
            </p>
          </div>
          <p className="flex items-center text-[#7f878a] leading-7 text-lg mx-5 mb-5 ">
            The most valuable intangible assets of the organization are the
            intellectual manpower and the dedicated team of professionals and
            associates. Over the years the organization has been successful in
            retaining and exploiting their talent and providing a suitable
            platform for the manpower to develop holistically. This feat is
            achieved because of a very flat organizational structure and
            continuous training, motivational and developmental programs
            organized for its human resources.
          </p>

          <img className="hidden lg:block  " src="/image/131.jpg"></img>
        </div>
        <Parallax
          bgImage="/image/04.jpg"
          className="h-[50%] lg:h-[60%]  "
          strength={500}
          bgImageAlt="the cat"
        >
          <div className="text-white font-semibold flex flex-col justify-center   items-center text-center">
            <h3 className="text-[#c0cdd5] mt-20">CAREER</h3>
            <p className="text-4xl mt-10 mb-14 " >Join Our Team</p>
           
          </div>
        </Parallax>
      </div>
      <div className=" flex text-center flex-col text-4xl mt-10">
        Industries We Serve
        <div className="grid  grid-cols-3 gap-x-2 gap-y-1 sm:gap-x-20 md:gap-x-32 lg:gap-x-52   m-5 lg:mx-20  md:mx-14 my-20 ">
         
         
         
         
          <div className="container   text-white">
            <img className="image" src="/image/5.jpg" />
            <Link href="/Industries">
              <a>
                <div className="opacity-90   bg-[#303a1b] overlay">
                  <p className=" md:mt-10 mt-1  text-sm md:text-2xl">
                    Agriclture
                  </p>
                  <p className="  text-sm md:text-base "> and many more</p>
                </div>
              </a>
            </Link>
          </div>
          <div className="container  text-white">
            <img className="image" src="/image/6.jpg" />

            <Link href="/Industries">
              <a>
                <div className="opacity-90  bg-[#303a1b] overlay">
                  <p className=" md:mt-10 mt-1  text-sm md:text-2xl">
                    Enginnnering
                  </p>
                  <p className="  text-sm md:text-base"> and many more</p>
                </div>
              </a>
            </Link>
          </div>
          <div className="container  text-white">
            <img className="image" src="/image/7.jpg" />
            <Link href="/Industries">
              <a>
                <div className="opacity-90   overlay bg-[#303a1b]">
                  <p className="  md:mt-10 mt-1  text-sm md:text-2xl">
                    Real Estate
                  </p>
                  <p className=" text-sm md:text-base"> and many more</p>
                </div>
              </a>
            </Link>
          </div>
          <div className="container  text-white">
            <img className="image" src="/image/8.jpg" />
            <Link href="/Industries">
              <a>
                <div className=" opacity-90   overlay bg-[#303a1b]">
                  <p className=" md:mt-10 mt-1  text-sm md:text-2xl">
                    Hotels and Clubs
                  </p>
                  <p className=" text-sm md:text-base"> and many more</p>
                </div>
              </a>
            </Link>
          </div>
          <div className="container  text-white">
            <img className="image" src="/image/9.jpg" />
            <Link href="/Industries">
              <a>
                <div className="opacity-90   overlay bg-[#303a1b]">
                  <p className=" md:mt-10 mt-1  text-sm md:text-2xl">FMCG</p>
                  <p className=" text-sm md:text-base"> and many more</p>
                </div>
              </a>
            </Link>
          </div>
          <div className="container  text-white">
            <img className="image" src="/image/10.jpg" />
            <Link href="/Industries">
              <a>
                {" "}
                <div className="opacity-90   overlay bg-[#303a1b]">
                  <p className=" md:mt-10 mt-1  text-sm md:text-2xl">
                    Pharmaceuticals
                  </p>
                  <p className=" text-sm md:text-base"> and many more</p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3666.341060912143!2d77.4358513!3d23.2306729!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4242b4c32195%3A0xea0b3c5c11408f45!2sGurukripa%20Plaza!5e0!3m2!1sen!2sin!4v1633011923063!5m2!1sen!2sin"
          className="w-full h-96"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default FirstPage;
