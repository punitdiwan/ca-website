import React from 'react'
import Layout from "../Component/Layout";
import { SRLWrapper } from 'simple-react-lightbox'
const Gallery = () => {

    const image = [
        {
            title: "/image/Gallery4.jpeg",
        }, {
            title: "/image/Gallery3.jpeg",
        }, {
            title: "/image/Gallery1.jpeg",
        }, {
            title: "/image/Gallery2.jpeg",
        },
   ]

    return (
        <Layout className="  " >
            <div
                className="flex flex-col text-center justify-center bg-[#fafafa] pb-14  md:h-[85vh] lg:h-[90vh] ">
                <div>

                    <h2 className="text-[#575b5e]  font-bold  text-3xl mt-40 md:mt-24">
                        Gallery 

                    </h2>

                    <SRLWrapper>
                        <div className="grid  grid-rows-1 gap-4 md:grid-cols-4 justify-center mt-5  md:gap-10 my-2 mx-5">
                            {image.map((photo, index) => {
                                return (

                                    <div key="index">

                                        <img className="h-[40vh] w-[80vw] border-2 border-solid " src={photo.title} />
                                     </div>
                                );
                            })}
                        </div>
                    </SRLWrapper>

                </div>
            </div></Layout>
    )
}

export default Gallery
