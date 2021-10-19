import React  from 'react'
import Footer from './Footer'
import Header from './Header'
import Head from "next/head";
const Layout = ({children}) => {
    return (
        <div>
               <Head>
        <title>Amit Chouksey & Coumpany</title>
      <link rel="shortcut icon" href="/image/favicon.png"/>
      </Head>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
    
export default Layout
