

import React, { useEffect, useRef } from 'react'
import Dash from '../Side/Dash';
function Aboutus() {
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY;
      const container = containerRef.current;
      if (imageRef.current && container) {
        const containerRect = container.getBoundingClientRect();
        // Only apply the scroll effect when the container is in view
        if (containerRect.top >= 0 && containerRect.bottom <= window.innerHeight) {
          imageRef.current.style.marginTop = `${value * 9.5}px`;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section className="max-w-[96rem] mx-auto">
        <section className="grid grid-cols-6 gap-5">
          <section className="lg:col-span-5 col-span-6">
            <section className="">
              <div class="  bg-[url('/images/Herosection/Frame.png')] lg:h-96 md:h-[450px] h-52 bg-cover bg-center overflow-hidden" ref={containerRef}>
                <div className="max-w-[80rem] mx-auto">
                  <div className="grid grid-cols-2   items-center">
                    <p className="ml-auto text-white md:text-4xl text-lg">
                     Publication Ethic
                    </p>
                    <div className="flex justify-center">
                      <img ref={imageRef} className="w-96" id="image" src="/images/Herosection/9289258.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0  py-5">
                <div className="lg:flex md:flex ">
                  <div className="max-w-full w-full ">
                    <div className="border p-2 rounded-sm border-gray-100 bg-white">
                      <h1 className="text-black border w-fit p-2 bg-[#C0DBF8] md:text-3xl text-lg  ">
                       Publication Ethics
                      </h1>

                      <div className="max-w-full w-full leading-relaxed">
                       
                        <ul className='mt-8 list-disc list-outside pl-5'>
                          <li>All articles in the International Journal of Advanced Research in Information Technology and Management Science (IJDIII) journals are of Open Access (OA).</li>
                          <li>Authors can copy, redistribute, remix, transform, and build upon the material since all the papers are published under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license.</li>
                          <li>Community standards, rather than copyright law, will continue to provide the mechanism for enforcement of proper attribution and responsible use of the published work.</li>
                        </ul>


                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
          <section className="col-span-1mx-auto h-fit p-2 space-y-3 lg:block hidden">
            <Dash />
          </section>
        </section>
      </section>
    </>
  )
}
export default Aboutus