import React from 'react'

import { Link } from "react-router-dom";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";
import pic5 from "../images/pic5.jpg";
import background from "../images/banner_bg.jpg";
import { TiMediaPlay } from "react-icons/ti";
function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center relative">
        <div className="flex justify-center items-center mt-16">
          <img src={background} className="relative"></img>
          <div className="flex flex-col absolute md:top-[25%] md:left-20 text-gray-100 tracking-wider">
            <span className="text-xl font-bold">MoveFlix</span>
            <span className="text-2xl md:text-6xl sm:mt-3 font-bold">
              Unlimited <span className="text-yellow-200">Movie,</span>
            </span>
            <span className="text-2xl md:text-6xl sm:mt-3 font-bold">
              TVs Shows, & More.
            </span>
            <div className="mt-5 flex flex-wrap items-center gap-3 tracking-wider text-sm">
              <span className="bg-gray-100 px-2 py-0.5 text-gray-800">
                PG18
              </span>
              <span className="border px-3 py-0.5 text-gray-100">HD</span>
              <span className="">Action, Comedy</span>
              <span className="">2021, 120min</span>
            </div>
            <div className="mt-3 md:mt-8 text-sm">
              <button className="px-6 py-1.5 sm:py-2.5  border-2 bg-gray-900 border-yellow-200 rounded-full">
                WATCH NOW
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mt-10 text-gray-100 tracking-wider z-10 p-3">
          <span className="text-3xl font-semibold ">Expected premiere</span>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5 py-5">
            <div className="flex flex-col">
              <div className="relative content">
                <img src={pic1} className="rounded-lg" />
                <div className="cursor-pointer text-4xl bg-gray-300 rounded-full p-1.5 border-[5px] border-gray-600 absolute top-[40%] left-[40%] hover:border-yellow-500 hover:bg-white duration-500">
                  <TiMediaPlay className="text-orange-400" />
                </div>
              </div>
              <span className="mt-3">Dream in Anorder Land</span>
            </div>

            {/* 2 */}
            <div className="flex flex-col">
              <div className="relative content">
                <img src={pic2} className="rounded-lg" />
                <div className="cursor-pointer text-4xl bg-gray-300 rounded-full p-1.5 border-[5px] border-gray-600 absolute top-[40%] left-[40%] hover:border-yellow-500 hover:bg-white duration-500">
                  <TiMediaPlay className="text-orange-400" />
                </div>
              </div>
              <span className="mt-3">Benched</span>
            </div>

            {/* 3 */}
            <div className="flex flex-col">
              <div className="relative content">
                <img src={pic5} className="rounded-lg" />
                <div className="cursor-pointer text-4xl bg-gray-300 rounded-full p-1.5 border-[5px] border-gray-600 absolute top-[40%] left-[40%] hover:border-yellow-500 hover:bg-white duration-500">
                  <TiMediaPlay className="text-orange-400" />
                </div>
              </div>
              <span className="mt-3">Whiteny</span>
            </div>

            {/* 4 */}
            <div className="flex flex-col">
              <div className="relative content">
                <img src={pic3} className="rounded-lg" />
                <Link
                  to={"Detail"}
                  className="cursor-pointer text-4xl bg-gray-300 rounded-full p-1.5 border-[5px] border-gray-600 absolute top-[40%] left-[40%] hover:border-yellow-500 hover:bg-white duration-500"
                >
                  <TiMediaPlay className="text-orange-400" />
                </Link>
              </div>
              <span className="mt-3">Benched</span>
            </div>

            {/* 5 */}
            <div className="flex flex-col">
              <div className="relative content">
                <img src={pic4} className="rounded-lg" />
                <div className="cursor-pointer text-4xl bg-gray-300 rounded-full p-1.5 border-[5px] border-gray-600 absolute top-[40%] left-[40%] hover:border-yellow-500 hover:bg-white duration-500">
                  <TiMediaPlay className="text-orange-400" />
                </div>
              </div>
              <span className="mt-3">Blindshorting</span>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="flex justify-center items-center bg-gray-900 p-5 w-full">
        <div className="flex justify-center gap-5 md:justify-between flex-wrap items-center text-gray-100 w-full">
          <div className="flex gap-5">
            <span className="text-3xl font-bold text-yellow-200 tracking-wide">
              Mov<span className="text-gray-100">Flix</span>
            </span>
            <div className="flex flex-col text-sm">
              <span className="">© MOVFLIX, 2023—2024</span>
              <span className="">Create by Movflix</span>
            </div>
          </div>

          <div className="flex gap-5">
            <span className="">About</span>
            <span className="">Contact</span>
            <span className="">Privacy Policy</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
