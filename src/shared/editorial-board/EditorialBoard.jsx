import React, { useState } from 'react'
import Dash from '../Side/Dash';
import HeroSection from '../HeroSection/HeroSection';
function Aboutus() {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <section className="max-w-[96rem] mx-auto">
        <section className="grid grid-cols-6 gap-5">
          <section className="lg:col-span-5 col-span-6  ">
            <section className="">
              <HeroSection
                isActive={isActive}
                activeText="Editorial Board"

              />
              <div className="max-w-screen-xl mx-auto w-full px-3 2xl:px-0  py-5">
                <div className="lg:flex md:flex ">
                  <div className="max-w-full w-full ">
                    <div className="border p-2 rounded-sm border-gray-100 bg-white">
                      <h1 className="text-black border w-fit p-2 bg-[#C0DBF8] md:text-3xl text-lg  ">
                        Editorial Board
                      </h1>
                      <div className="text-center h-40 mt-10">
                        Update Will Come Soon.......
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
          <section  className="col-span-1 mx-auto h-fit p-2 space-y-3 sticky top-20 lg:block hidden">
            <Dash />
          </section>
        </section>
      </section>
    </>
  )
}
export default Aboutus