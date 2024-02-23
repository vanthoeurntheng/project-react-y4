import React from 'react'
import { Link } from "react-router-dom";
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import img4 from "../images/img4.png"
import img5 from "../images/img5.png"
import img6 from "../images/img6.png"
import img7 from "../images/img7.png"
import img8 from "../images/img8.png"

function Tvshow() {
  return (
    <section className="flex flex-col justify-center items-center mt-20">
      <div className="max-w-7xl mt-10 text-gray-100 tracking-wider z-10 p-3">
        <span className="text-xs font-semibold text-yellow-200">
          ONLINE STREAMING
        </span>
        <span className="text-3xl font-semibold block">New Tv Shows</span>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 py-5">
          <div className="flex flex-col">
            <div className="relative content">
              <img src={img1} className="rounded-lg" />
              <div className="overlay cursor-pointer text-sm bg-yellow-200 rounded-full px-4 py-2 text-gray-800 font-semibold border border-yellow-600 absolute top-[45%] left-[30%]  duration-500">
                <span className="">Watch Now</span>
              </div>
            </div>
            <div className="">
              <div className="text-sm flex justify-between mt-3">
                <span className="">Mad Starhop Girl</span>
                <span className="text-yellow-200">2020</span>
              </div>
              <div className="text-xs text-yellow-200 flex justify-between items-center mt-3">
                <span className="border px-2 py-0.5 bg-gray-900">4K</span>
                <span className="">120min | rate 8.5</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative content">
              <img src={img2} className="rounded-lg" />
              <div className="overlay cursor-pointer text-sm bg-yellow-200 rounded-full px-4 py-2 text-gray-800 font-semibold border border-yellow-600 absolute top-[45%] left-[30%]  duration-500">
                <span className="">Watch Now</span>
              </div>
            </div>

            <div className="">
              <div className="text-sm flex justify-between mt-3">
                <span className="">The Twilight Zone</span>
                <span className="text-yellow-200">2021</span>
              </div>
              <div className="text-xs text-yellow-200 flex justify-between items-center mt-3">
                <span className="border px-2 py-0.5 bg-gray-900">4K</span>
                <span className="">120min | rate 9.3</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative content">
              <img src={img3} className="rounded-lg" />
              <div className="overlay cursor-pointer text-sm bg-yellow-200 rounded-full px-4 py-2 text-gray-800 font-semibold border border-yellow-600 absolute top-[45%] left-[30%]  duration-500">
                <span className="">Watch Now</span>
              </div>
            </div>
            <div className="">
              <div className="text-sm flex justify-between mt-3">
                <span className="">I Love Lucky</span>
                <span className="text-yellow-200">2018</span>
              </div>
              <div className="text-xs text-yellow-200 flex justify-between items-center mt-3">
                <span className="border px-2 py-0.5 bg-gray-900">4K</span>
                <span className="">120min | rate 8.1</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative content">
              <img src={img4} className="rounded-lg" />
              <div className="overlay cursor-pointer text-sm bg-yellow-200 rounded-full px-4 py-2 text-gray-800 font-semibold border border-yellow-600 absolute top-[45%] left-[30%]  duration-500">
                <span className="">Watch Now</span>
              </div>
            </div>

            <div className="">
              <div className="text-sm flex justify-between mt-3">
                <span className="">Six Feet Under</span>
                <span className="text-yellow-200">2019</span>
              </div>
              <div className="text-xs text-yellow-200 flex justify-between items-center mt-3">
                <span className="border px-2 py-0.5 bg-gray-900">4K</span>
                <span className="">120min | rate 8.5</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative content">
              <img src={img5} className="rounded-lg" />
              <div className="overlay cursor-pointer text-sm bg-yellow-200 rounded-full px-4 py-2 text-gray-800 font-semibold border border-yellow-600 absolute top-[45%] left-[30%]  duration-500">
                <span className="">Watch Now</span>
              </div>
            </div>

            <div className="">
              <div className="text-sm flex justify-between mt-3">
                <span className="">The Cosby Show</span>
                <span className="text-yellow-200">2020</span>
              </div>
              <div className="text-xs text-yellow-200 flex justify-between items-center mt-3">
                <span className="border px-2 py-0.5 bg-gray-900">4K</span>
                <span className="">120min | rate 8.8</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative content">
              <img src={img6} className="rounded-lg" />
              <div className="overlay cursor-pointer text-sm bg-yellow-200 rounded-full px-4 py-2 text-gray-800 font-semibold border border-yellow-600 absolute top-[45%] left-[30%]  duration-500">
                <span className="">Watch Now</span>
              </div>
            </div>

            <div className="">
              <div className="text-sm flex justify-between mt-3">
                <span className="">The Star Trek</span>
                <span className="text-yellow-200">2018</span>
              </div>
              <div className="text-xs text-yellow-200 flex justify-between items-center mt-3">
                <span className="border px-2 py-0.5 bg-gray-900">4K</span>
                <span className="">120min | rate 9.3</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative content">
              <img src={img7} className="rounded-lg" />
              <div className="overlay cursor-pointer text-sm bg-yellow-200 rounded-full px-4 py-2 text-gray-800 font-semibold border border-yellow-600 absolute top-[45%] left-[30%]  duration-500">
                <span className="">Watch Now</span>
              </div>
            </div>

            <div className="">
              <div className="text-sm flex justify-between mt-3">
                <span className="">The Wonder Years</span>
                <span className="text-yellow-200">2020</span>
              </div>
              <div className="text-xs text-yellow-200 flex justify-between items-center mt-3">
                <span className="border px-2 py-0.5 bg-gray-900">4K</span>
                <span className="">120min | rate 8.7</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative content">
              <img src={img8} className="rounded-lg" />
              <div className="overlay cursor-pointer text-sm bg-yellow-200 rounded-full px-4 py-2 text-gray-800 font-semibold border border-yellow-600 absolute top-[45%] left-[30%]  duration-500">
                <span className="">Watch Now</span>
              </div>
            </div>

            <div className="">
              <div className="text-sm flex justify-between mt-3">
                <span className="">The Hunter Two</span>
                <span className="text-yellow-200">2022</span>
              </div>
              <div className="text-xs text-yellow-200 flex justify-between items-center mt-3">
                <span className="border px-2 py-0.5 bg-gray-900">4K</span>
                <span className="">120min | rate 9.1</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="flex justify-center items-center bg-gray-900 p-5 w-full">
        <div className="w-full flex justify-center gap-5 md:justify-between flex-wrap items-center text-gray-100">
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
    </section>
  );
}

export default Tvshow;
