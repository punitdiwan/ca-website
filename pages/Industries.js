import React from "react";
import Layout from "../Component/Layout";
import { Parallax } from "react-parallax";
const Industries = () => {
  return (
    <Layout>
      <div>
        {" "}
        <Parallax
          bgImage="/image/bg2.jpg"
          className="h-[50vh] bg-cover"
          strength={500}
          bgImageAlt="the cat"
        >
          <div className="flex flex-col items-center text-center   justify-center mt-20">
            <h1 className="text-5xl font-light text-white">Industries</h1>
          </div>
        </Parallax>
      </div>

      <div className="flex flex-col   text-center   justify-center mt-5 mb-10 ">
        <h1 className="text-4xl text-[#191e21] mt-5">Industries We Serve</h1>
        <div className="grid grid-row-1 font-thin  justify-center mt-5  lg:mx-32 text-center px-5 text-[#656565]  lg:gap-0 mx-10">
          <p className="">
            Putting customer`&apos;`s first. As our mission, due to this objective only
            we have diversified clientele. Client turnover is a phenomenon which
            is rarely witnessed by us. Its just that our client list keep on
            growing.
          </p>
        </div>
        <h1 className="text-4xl text-[#191e21] my-5">Client Segments</h1>
        <div className=" flex lg:flex-row flex-col  justify-evenly text-justify  lg:mx-32 md:mx-20 mx-10  ">
          <div className=" text-md font-thin ">
            <ul style={{ listStyle: "disc" }}>
              <li>Agro chemicals</li>
              <li>Agriculture - Equipments & Pumps</li>
              <li>Aluminium Extrusion</li>
              <li>Aluminium Foils</li>
              <li>Amusement Theme Parks</li>
              <li>Automobiles</li>
              <li>Bitumen</li>
              <li>Broking - Commodity</li>
              <li>C&F & Distributorship</li>
              <li>Cable & Communication</li>
              <li>Cement</li>
              <li>Clubs</li>
              <li>Construction</li>
              <li>Commodity Exchange</li>
              <li>Cotton yarn</li>
              <li>Dairy - Milk & Milk Product</li>
              <li>Energy - Wind Power</li>
              <li>Engineering</li>
              <li>Engineering - Measuring Machines & Precision Tools</li>
              <li>Engineering - Metal</li>
              <li>Engineering - Electronics</li>
              <li>Engineering - Railway</li>
              <li>Engineering - Tractors</li>
              <li>Education</li>
              <li>Entertainment & Film Industry</li>
              <li>Fertilizer</li>
              <li>Financial Services</li>
              <li>FMCG</li>
              <li>Food & Bewerages</li>
              <li>Gas - LPG</li>
              <li>HDEP - Woven Sack Bag</li>
              <li>Health care & Hospital</li>
              <li>Hotels</li>
              <li>IMFL ( Indian Made Foreign Liquor ) / Breweries</li>
              <li>Insurance</li>
            </ul>
          </div>
          <div className=" text-md font-thin">
            <ul style={{ listStyle: "disc" }}>
              <li>Infrastructure</li>
              <li>Jewellery</li>
              <li>Leasing & Hire Purchase</li>
              <li>Merchant Banking</li>
              <li>Metal</li>
              <li>Metal - Copper</li>
              <li>Packaging</li>
              <li>Paints - Synthetic Resin</li>
              <li>Paper</li>
              <li>Pesticides</li>
              <li>Plastic - PET Bottles</li>
              <li>Pharmaceuticals</li>
              <li>Printing - Media</li>
              <li>Processed foods</li>
              <li>Processed Marble</li>
              <li>Power-Transformer</li>
              <li>Radio Broadcasting</li>
              <li>Real Estate</li>
              <li>Refactory Cement & Castbales</li>
              <li>Software</li>
              <li>Oil - Edible</li>
              <li>Oil - Soya</li>
              <li>School</li>
              <li>Scrap</li>
              <li> Spinning Mill</li>
              <li>Steel - MS Slab, HR, CR, GPGC & Pipes</li>
              <li>Stock Broking</li>
              <li>Turbo Charger - Automobiles & Generator Engines</li>
              <li>Tele-Marketing</li>
              <li>Textile</li>
              <li>Trading</li>
              <li>Transportation</li>
              <li>Warehousing</li>
              <li>Wood</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Industries;
