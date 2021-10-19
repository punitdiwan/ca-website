import React from "react";
import Layout from "../Component/Layout";
import { Parallax } from "react-parallax";
const Services = () => {
  return (
    <Layout>
      <div>
        <Parallax
          bgImage="/image/31.jpg"
          className="h-[50vh]"
          strength={500}
          bgImageAlt="the cat"
        >
          <div className="flex flex-col   items-center text-center   justify-center mt-28">
            <h1 className="text-5xl font-light text-white">Our Services</h1>
          </div>
        </Parallax>

        <div className="p-10 grid lg:grid-cols-2  bg-white  ">
          <div className="  gap-10  mx-10">
            <div className="dropdown mb-5 ">
              <div className="border-b-2 border-solid border-[#222325] md:hover:mb-32   hover:mb-48">
                <span className="mr-1 text-[#1e2827] flex  justify-between flex-row  md:text-lg  ">
                  Corporate & Project Finance
                  <svg
                    className="fill-current h-4 w-4 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </span>

                <ul
                  className="text-left dropdown-menu mt-2 absolute hidden text-[#4d3626]  mx-5 text-base font-thin "
                  style={{ listStyle: "disc" }}
                >
                  <li>Preparation of techno-economic feasibility report</li>
                  <li>Appraisal of the project</li>
                  <li>Arrangement of finance(s)</li>
                  <li>Syndication of Equity / Term Loan(s)</li>
                  <li>
                    Liasioning with Nationalized, Private Banks & Financial
                    Institutions
                  </li>
                </ul>
              </div>
            </div>

            <div className="dropdown mb-5 ">
              <div className="border-b-2 border-solid border-[#222325] md:hover:mb-16 hover:mb-40 ">
                <span className="mr-1 text-[#1e2827] flex  justify-between flex-row  text-lg ">
                  Working Capital Finance
                  <svg
                    className="fill-current h-4 w-4 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </span>

                <ul
                  className="text-left dropdown-menu mt-2 absolute hidden text-[#4d3626]  mx-5 text-base font-thin "
                  style={{ listStyle: "disc" }}
                >
                  <li className="w-4/6">
                    Working capital finance proposal(s) of various clients with
                    Nationalized, Private Banks & Financial Institutions
                  </li>
                </ul>
              </div>
            </div>
            <div className="dropdown mb-5 ">
              <div className="border-b-2 border-solid border-[#222325] md:hover:mb-40 hover:mb-60 ">
                <span className="mr-1 text-[#1e2827] flex  justify-between flex-row  text-lg ">
                  Industry Implementation & Government Subsidy
                  <svg
                    className="fill-current h-4 w-4 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </span>

                <ul
                  className="text-left mt-2 dropdown-menu  absolute hidden text-[#4d3626]  mx-5 text-base font-thin "
                  style={{ listStyle: "disc" }}
                >
                  <li className="">
                    Acquisition of Land - with Mutation & Diversion
                  </li>
                  <li className="">Government Subsidy</li>
                  <li className="">Compliance for availing various subsidy</li>
                  <li className="">Building Plan & Structure Approval</li>
                  <li className="">
                    Power, Water, Road & other Utility Arrangements
                  </li>
                  <li className="">Any other related activity</li>
                </ul>
              </div>
            </div>
            <div className="dropdown mb-5 ">
              <div className="border-b-2 border-solid border-[#222325] md:hover:mb-24 hover:mb-36  ">
                <span className="mr-1 text-[#1e2827] flex  justify-between flex-row   text-lg ">
                  Special Economic Zone (SEZ) Advisory Services
                  <svg
                    className="fill-current h-4 w-4 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </span>

                <ul
                  className="text-left dropdown-menu mt-2  absolute hidden text-[#4d3626]  mx-5 text-base font-thin "
                  style={{ listStyle: "disc" }}
                >
                  <li className="">Establishment of Unit at SEZ</li>
                  <li className="">
                    Documentation & compliances as per SEZ Act
                  </li>
                  <li className="">
                    Preparation of detailed proposal for permission from SEZ
                  </li>
                </ul>
              </div>
            </div>
            <div className="dropdown mb-5 ">
              <div className="border-b-2 border-solid border-[#222325] md:hover:mb-28 hover:mb-36">
                <span className="mr-1 text-[#1e2827] flex  justify-between flex-row  text-lg ">
                  Audit
                  <svg
                    className="fill-current h-4 w-4 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </span>

                <ul
                  className="text-left dropdown-menu mt-2 absolute hidden text-[#4d3626]  mx-5 text-base font-thin "
                  style={{ listStyle: "disc" }}
                >
                  <li>Statutory & Internal Audit</li>
                  <li>Listed, Limited & Pvt. Limited Companies</li>
                  <li>Club & Sports associations</li>
                  <li>Charitable trust</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="  gap-10  mx-10">
            <div className="dropdown mb-5 ">
              <div className="border-b-2 border-solid border-[#222325] md:hover:mb-32 hover:mb-52   ">
                <span className="mr-1 text-[#1e2827] flex  justify-between flex-row  text-lg ">
                  Merchant Banking - Advisory Services
                  <svg
                    className="fill-current h-4 w-4 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </span>

                <ul
                  className="text-left dropdown-menu mt-2 absolute hidden text-[#4d3626]  mx-5 text-base font-thin "
                  style={{ listStyle: "disc" }}
                >
                  <li>Preparation of prospectus/ letter of offer(s)</li>
                  <li>
                    Liasioning with authorities mainly SEBI, ROC, RBI, Stock
                    exchange(s)
                  </li>
                  <li>Appointment of various intermediary agencies</li>
                  <li>Marketing of issue(s)</li>
                  <li>Marketing of issue(s)</li>
                </ul>
              </div>
            </div>

            <div className="dropdown mb-5 ">
              <div className="border-b-2 border-solid border-[#222325] md:hover:mb-20 hover:mb-44  ">
                <span className="mr-1 text-[#1e2827] flex  justify-between flex-row  text-lg ">
                  Corporate & Project Finance
                  <svg
                    className="fill-current h-4 w-4 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </span>

                <ul
                  className="text-left dropdown-menu mt-2 absolute hidden text-[#4d3626]  mx-5 text-base font-thin "
                  style={{ listStyle: "disc" }}
                >
                  <li className="w-4/6">
                    Complete advisory services in the area of controlling
                    margins & risk management systems, monitoring back office, &
                    other related functions
                  </li>
                </ul>
              </div>
            </div>
            <div className="dropdown mb-5 ">
              <div className="border-b-2 border-solid border-[#222325] md:hover:mb-32 hover:mb-48 ">
                <span className="mr-1 text-[#1e2827] flex  justify-between flex-row  text-lg ">
                  Stock Broking -Advisory Services
                  <svg
                    className="fill-current h-4 w-4 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </span>

                <ul
                  className="text-left dropdown-menu  absolute hidden text-[#4d3626]  mt-2  mx-5 text-base font-thin "
                  style={{ listStyle: "disc" }}
                >
                  <li>Company Formation & Management</li>
                  <li>Merger & Amalgamation</li>
                  <li>Merger & Amalgamation</li>
                  <li>Liasoning with SEBI, Stock Exchange, ROC etc.</li>
                  <li>Legal deeds & documentation</li>
                </ul>
              </div>
            </div>
            
            <div className="dropdown mb-5 ">
              <div className="border-b-2 border-solid border-[#222325] md:hover:mb-32 hover:mb-40">
                <span className="mr-1 text-[#1e2827] flex  justify-between flex-row  text-lg ">
                Taxation
                  <svg
                    className="fill-current h-4 w-4 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </span>

                <ul
                  className="text-left dropdown-menu mt-2 absolute hidden text-[#4d3626]  mx-5 text-base font-thin "
                  style={{ listStyle: "disc" }}
                >
                  <li className="">
                  IT assessment(s)
                  </li>
                  <li className="">
                  Appeals
                  </li>
                  <li className="">
                  Regular Income Tax matters
                  </li>
                  <li className="">
                  Goods & Service Tax - GST consultancy & e-return filing
                  </li>
                  <li className="">
                  GST Audit
                  </li>
                </ul>
              </div>
            </div>  <div className="dropdown mb-5 ">
              <div className="border-b-2 border-solid border-[#222325] md:hover:mb-20 hover:mb-32 ">
                <span className="mr-1 text-[#1e2827] flex  justify-between flex-row  text-lg ">
                Accounts
                  <svg
                    className="fill-current h-4 w-4 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </span>

                <ul
                  className="text-left dropdown-menu mt-2 absolute hidden text-[#4d3626]  mx-5 text-base font-thin "
                  style={{ listStyle: "disc" }}
                >
                  <li className="">
                  Maintenance of statutory records under various Laws
                  </li>
                  <li className="">
                  Finalisation of accounts
                  </li>
                  <li className="">
                  Preparation of MIS reports
                  </li>
                  <li className="">
                  Compliance of AS, guidance notes issued by ICAI
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
