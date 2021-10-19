import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import Layout from "../Component/Layout";

const ContactUs = () => {
  const Contact = [
    {
      city: "Madhya Pradesh - Bhopal",
      Address:
        "5/B,F  irst Floor,Gurukripa plaza M P Nagar zone -2, Bhopal (M.P.) INDIA",
        landline: "+91 7553563821",
        Phone: "+91 9926355801",

      Gmail: "caamitchouksey@gmail.com",
    },
   
  ];

  return (
    <Layout>
      <div className="bg-[#f9f9f9]">
        <div className="flex justify-center flex-col items-center pt-28 ">
          <h3 className=" text-sm font-semibold text-[#686669]">CONTACT US</h3>
          <h1 className="text-4xl font-normal text-[#25252d]">Get In Touch</h1>
        </div>
        <div className=" flex  flex-col md:flex-row items-center justify-evenly  py-10 h-[90vh]">
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3666.341060912143!2d77.4358513!3d23.2306729!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4242b4c32195%3A0xea0b3c5c11408f45!2sGurukripa%20Plaza!5e0!3m2!1sen!2sin!4v1633011923063!5m2!1sen!2sin"
              className="lg:h-96  "
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center gap-5 text-center"></div>

            {/* <div className="grid md:grid-cols-3 gap-10 mx-5 md:mx-40 mt-10 text-center "> */}
            <div className="flex    items-center justify-center mt-5 md:mt-1 text-center ">
              {Contact.map((contactus, index) => {
                return (
                  <div key={index} className="">
                    <i className="justify-center flex items-center">
                      <FaMapMarkedAlt className="h-7 w-7  text-[#222325]" />
                    </i>
                    <p className="text-xl my-2">Address</p>
                    <h4 className="text-base mb-2   text-[#6e6653] font-semibold">
                      {contactus.city}
                    </h4>
                    <p className="text-base font-light mx-3">
                      {contactus.Address}
                    </p>
                    <h4 className="my-2 text-[#6e6653] font-semibold">
                      Contact
                    </h4>
                    <p className="font-light text-base">
                      Phone : {contactus.Phone}
                      <br />
                      landline number : {contactus.landline}
                      <br />
                
                
                
                      Gmail : {contactus.Gmail}
                      
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
