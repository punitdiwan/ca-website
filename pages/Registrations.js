// import React from "react";
// import Layout from "../Component/Layout";
// import { Parallax } from "react-parallax";

// const Registrations = () => {
//   const Table1 = [
//     {
//       left: "Institute of CA of India",
//       right: "Firm Regn No. 06228C, Dt. 14/03/1989",
//     },
//     {
//       left: "Peer Review",
//       right: "Certificate No. 007795, Dt. 09/02/2015",
//     },
//     {
//       left: "Reserve Bank of India",
//       right: "Unique Code No. 201249, year 1992",
//     },
//   ];

//   return (
//     <Layout>
//       <div>
//         <Parallax
//           bgImage="/image/28.jpg"
//           className="h-[50vh]"
//           strength={500}
//           bgImageAlt="the cat"
//         >
//           <div className="flex flex-col items-center text-center   justify-center mt-20">
//             <h1 className="text-5xl font-light text-white">
//               Registrations & Empanelment
//             </h1>
//           </div>
//         </Parallax>
//         <div className="flex flex-col justify-center items-center my-10   mx-32">
//           <h1 className="text-4xl   ">Registrations & Empanelment</h1>
//           <div className="my-10">
//             <h1 className="md:text-3xl sm:text-2xl text-xl font-thin   mb-2     ">
//               Regulatory Bodies
//             </h1>
//             <table className="text-left  w-[80vw]">
//               <tr>
//                 <td className="py-2   md:pr-20 pr-5  w-[30vw] pl-2">
//                   Institute of CA of India
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  w-[50vw] pl-2">
//                   {" "}
//                   Firm Regn No. 06228C, Dt. 14/03/1989
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  w-[30vw]  pl-2">
//                   Peer Review
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  w-[50vw] pl-2">
//                   Certificate No. 007795, Dt. 09/02/2015
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  w-[30vw] pl-2">
//                   Reserve Bank of India
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  w-[50vw] pl-2">
//                   Unique Code No. 201249, year 1992
//                 </td>
//               </tr>
//             </table>
//           </div>
//           <div className="mx-5">
//             <h1 className=" mb-2 md:text-3xl sm:text-2xl text-xl font-thin        ">
//               Regulatory Bodies
//             </h1>
//             <table className="text-left  w-[80vw]">
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5 w-[30vw]  pl-2">MCX</td>
//                 <td className="py-2  md:pr-20 pr-5 w-[50vw] pl-2">
//                   No. MCX/Compl/NJ/SM/DP/126/13-14 Inspection of records of MCX
//                   members <br /> div III /104/0809/Audit of A/cs & records of
//                   Commodity Exchange & its Members Year 2008-09 (Earlier
//                   -Forward Market Commission, India)
//                 </td>
//               </tr>
//             </table>
//           </div>
//           <div className="my-5">
//             <h1 className="md:text-3xl sm:text-2xl text-xl font-thin     mb-2  ">
//               Govt Of India (Central Government)
//             </h1>
//             <table className="text-left  w-[80vw]">
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  w-[30vw] pl-2">
//                   Comptroller & Auditor General of India
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  w-[50vw] pl-2">
//                   Regn. No. CR 2052, Dt. 19/12/2003
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  w-[30vw] pl-2">
//                   Income Tax Department Ministry of Finance
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  w-[50vw] pl-2">
//                   Notification No 1 of 2009 Dt. 22/12/2009
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   NABARD (National Bank for Agr. & Rural Development )
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   {" "}
//                   No. NBMPB/7842/IDD/DCRR-6/2006-07 Audit of 28 PACS
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   Rashtriya Madhyamik Shiksha Abhiyan
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   No. RMSA/2012/1333 Dt. 21/11/12
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   National Rural Health Missiontd
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   No. SHS/Audit/2012-13/3444
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   National Textile Corporation
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   No. CA. V/COY/Central Government, NTCND(45)/784 Dt. 13/09/12
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">Avantika Gas Ltd.</td>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   No. AGL/INT Audit/01/2014-15, Dt 29/11/14
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   Nuclear Power Corporation of India Ltd
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   NPCIL/ AGM(F&A)/ Corp. A/c`&apos;`s/ 14/03 Dt. 14/08/2014
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   Northern Coalfields Ltd
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   NCL/SGR/IAD/ 2014-15/ 15 Dt. 01/04/2014
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   Serious Fraud Investigation office (SFIO)
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   No 2/1/2015- Admin.SFIO- Dt 08/02/2016 Ministry of Corporate
//                   Affairs
//                 </td>
//               </tr>
//             </table>
//           </div>
//           <div className="my-5 ">
//             <h1 className="md:text-3xl sm:text-2xl text-xl font-thin   mb-2     ">
//               State Government
//             </h1>
//             <table className="text-left px-2 w-[80vw]">
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  w-[30vw]  pl-2">
//                   Madhya Pradesh Govt
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  w-[50vw]  pl-2">
//                   {" "}
//                   Registrar of Co-operative Societies MP Bhopal Year – 2003
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   Audit of Mandi Samitis, MP
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   CA.V/COY/Central Govt WIASS(423)/492 Audit of Indore D.O.
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   State Project Facilitation Unit ( World Bank aided)
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   {" "}
//                   No./ SPFU/2014/269 Dt. 11/07/2014
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   M.P. Warehousing & Logistic Corp
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   Dt 02/01/13 No. MPWLC/Accounts/2013/9009
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   Madhya Pradesh Rural Road Development Authority
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   dated 07/07/2012 No.9845/22/V-12/Acctts/CA-2011-12
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   Employees Provident Fund Organisation
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   Dt. 05/02/2015 PFC/IND/MP/HRM-I/294
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   State Project Facilitation Unit, Director of Technical
//                   Education, Chattisgarh
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   No./TEQIP-II/Tech. edu/2014/2 Dt. 03/01/2015
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   M.P. Paschim Kshetra Vidyut Vitaran Co. Ltd.
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   M.P. Paschim Kshetra Vidyut Vitaran Co.
//                   Ltd.MD/WZ/06/Pur/TS-972/Ord-2121/1518 DT 31/08/2016
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   Madhya Pradesh Cooperative Society
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   No./02 /16/466 (no. 43) dated 02/07/2016
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   Madhya Pradesh Road Development Corporation Ltd.
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   12832/MPRDC/243/HR/2019 dt. 06/12/2019 and
//                   16367/MPRDC/HR/243/2020 BHOPAL dt. 05/02/2020
//                 </td>
//               </tr>
//             </table>
//           </div>
//           <div className="my-5 ">
//             <h1 className="md:text-3xl sm:text-2xl text-xl font-thin   mb-2      ">
//               Insurance Companies
//             </h1>
//             <table className="text-left w-[80vw]">
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   Life Insurance Corporation of India
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   {" "}
//                   CO/F&A/State_AUD/2013-14- dated 04/04/2014
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   New India Insurance
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  pl-2">
//                   {" "}
//                   CA.V/COY/Central Govt WIASS(423)/492 Audit of Indore D.O.
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5 w-[30vw]  pl-2">
//                   United India Insurance
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  w-[50vw]  pl-2">
//                   {" "}
//                   CA.V/COY/Central Govt UNIINS (389)/409 Dt 12/08/08 Audit of
//                   Indore D.O.
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-2  md:pr-20 pr-5  w-[30vw] pl-2">
//                   Oriental Insurance Co
//                 </td>
//                 <td className="py-2  md:pr-20 pr-5  w-[50vw]  pl-2">
//                   {" "}
//                   CA.V/COY/Central Govt ORINS (401)/705 Dt 04/08/10 Audit of
//                   Indore D.O
//                 </td>
//               </tr>
//             </table>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Registrations;
import React from 'react'

const Registrations = () => {
    return (
        <div>
            
        </div>
    )
}

export default Registrations
