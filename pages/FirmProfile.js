import React from "react";
import Layout from "../Component/Layout";
import { Parallax } from "react-parallax";
const FirmProfile = () => {
  return (
    <Layout>
      <div>
        <Parallax
          bgImage="/image/16.jpg"
          className="h-[50vh]"
          strength={500}
          bgImageAlt="the cat"
        >
          <div className="flex flex-col items-center text-center   justify-center mt-20">
            <h1 className="text-5xl font-light text-white">About Us</h1>
          </div>
        </Parallax>
        <div className="flex flex-col justify-center items-center my-10  mx-1   md:mx-32">
          <h1 className="text-4xl ">About The Firm</h1>

          <div className="grid grid-cols-2 font-thin  justify-center mt-10   text-[#656565]  gap-5 lg:gap-0 mx-10">
            <p className="">
            Amit Chouksey & Company   is  Corporate Advisory Services providing
              customized solutions for the clients.
            </p>
            <p className="">
              The firm has a track record of handling different projects and
              managing them to the best satisfaction. Our team believes in only
              one mission i.e. putting customer first, and that is quite evident
              from our past records.
            </p>
          </div>

          <h1 className="text-4xl text-[#191e21] mt-10 ">Our Vision</h1>
          <div className="grid grid-row-1 font-thin  justify-center mt-10   text-center px-5 text-[#656565]  lg:gap-0 mx-10">
            <p className="">
              Our vision is to be the most highly respected professional firm
              where we seek to build strong and lasting relationships with our
              clients by providing them quality services which are personalized,
              reliable and value driven. Where clients will be confident that
              their interests and business are being cared for by a trusted firm
              that enjoys working with them and one another
            </p>
          </div>
          <h1 className="text-4xl text-[#191e21] mt-10 ">Our Mission</h1>
          <div className="grid grid-row-1 font-thin  justify-center mt-10   text-center px-5 text-[#656565]  lg:gap-0 mx-10">
            <p className="">
            Our mission is to provide exceptional financial and professional services while
              maintaining the highest levels of integrity and professionalism.
              To meet the current and future needs of our clients and help them
              to cultivate long-term success. To respect our staff and those we
              serve as professionals and individuals. To establish trust and
              loyalty between staff members, partners, and the firm’s clients
            </p>
          </div>
        </div>
      </div>{" "}
    </Layout>
  );
};

export default FirmProfile;
