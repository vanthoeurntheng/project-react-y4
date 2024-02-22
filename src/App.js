// import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './component/Login';
import Signup from './component/Signup';
import Pricingplan from './component/Pricingplan';
import Movie from './component/Movie';
import Detail from './component/Detail';

import { Link } from "react-router-dom";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.jpg";
import pic3 from "./images/pic3.jpg";
import pic4 from "./images/pic4.jpg";
import pic5 from "./images/pic5.jpg";
import background from "./images/banner_bg.jpg";
import { TiMediaPlay } from "react-icons/ti";
import { FcCheckmark } from "react-icons/fc";
import { FiX } from "react-icons/fi";

function App() {
  return (
    <>
      <Home />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Pricingplan" component={Pricingplan} />
        <Route path="/Movie" component={Movie} />
        <Route path="/Detail" component={Detail} />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
      </Switch>

      <div className="flex flex-col justify-center items-center relative">
        <div className='flex justify-center items-center'>
          <img src={background} className='relative'></img>
          <div className='flex flex-col absolute mdtop-[25%] left-20 text-gray-100 tracking-wider'>
            <span className='text-xl font-bold'>MoveFlix</span>
            <span className='text-2xl md:text-6xl sm:mt-3 font-bold'>Unlimited <span className='text-yellow-200'>Movie,</span></span>
            <span className='text-3xl md:text-6xl sm:mt-3 font-bold'>TVs Shows, & More.</span>
            <div className='mt-5 flex flex-wrap items-center gap-3 tracking-wider text-sm'>
              <span className='bg-gray-100 px-2 py-0.5 text-gray-800'>PG18</span>
              <span className='border px-3 py-0.5 text-gray-100'>HD</span>
              <span className=''>Action, Comedy</span>
              <span className=''>2021, 120min</span>
            </div>
            <div className='mt-8 text-sm'>
              <button className='px-6 py-1.5 sm:py-2.5  border-2 bg-gray-900 border-yellow-200 rounded-full'>WATCH NOW</button>
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
      <div className="mt-5 flex flex-col justify-center items-center p-3 bg-gray-950">
        <div className="w-full mt-20 text-gray-100 tracking-wider z-10 p-3">
          <span className="text-3xl font-bold text-yellow-500 tracking-wider">
            Hot
            <span className="text-gray-100">Flix - Best Place for Movies</span>
          </span>
          <p className="tracking-wider font-light mt-10">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy.
          </p>

          <p className="tracking-wider font-light mt-5">
            Content here, content here, making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </p>

          <div className="">
            <div className="mt-10 grid md:grid-cols-3 gap-7 text-gray-100 font-light">
              <div className="py-10 px-7 bg-gray-800 rounded">
                <div className="flex justify-between text-xl font-semibold">
                  <span>Basic</span>
                  <span className="text-yellow-500">Free</span>
                </div>
                <div className="py-4 mt-3 flex gap-2 items-center text-lg border-b border-gray-900">
                  <FcCheckmark className="text-xl" />
                  <span> 7days</span>
                </div>
                <div className="py-4 flex gap-2 items-center text-lg border-b border-gray-900">
                  <FcCheckmark className="text-xl" />
                  <span> 720 Resolution</span>
                </div>
                <div className="py-4 flex gap-2 items-center text-lg border-b border-gray-900">
                  <FiX className="text-xl text-red-500" />
                  <span> Limited Availability</span>
                </div>
                <div className="py-4 flex gap-2 items-center text-lg border-b border-gray-900">
                  <FiX className="text-xl text-red-500" />
                  <span> Desktop Only</span>
                </div>
                <div className="py-4 flex gap-2 items-center text-lg">
                  <FiX className="text-xl text-red-500" />
                  <span> Limited Support</span>
                </div>
                <div className="mt-5 flex gap-2 items-center justify-center text-lg bg-yellow-500 hover:bg-yellow-600 rounded p-2.5 cursor-pointer">
                  <span className="block text-center text-gray-700 font-semibold">
                    {" "}
                    CHOOSE PLANE
                  </span>
                </div>
              </div>

              {/* 2 */}
              <div className="py-10 px-7 bg-gray-800 rounded">
                <div className="flex justify-between text-xl font-semibold">
                  <span>Premium</span>
                  <span className="text-green-500">$34.99 / month</span>
                </div>
                <div className="py-4 mt-3 border-b border-gray-900 flex gap-2 items-center text-lg">
                  <FcCheckmark className="text-xl" />
                  <span> 1Month</span>
                </div>
                <div className="py-4 border-b border-gray-900 flex gap-2 items-center text-lg">
                  <FcCheckmark className="text-xl" />
                  <span> Full HD</span>
                </div>
                <div className="py-4 border-b border-gray-900 flex gap-2 items-center text-lg">
                  <FcCheckmark className="text-xl" />
                  <span> Lifetime Availability</span>
                </div>
                <div className="py-4 border-b border-gray-900 flex gap-2 items-center text-lg">
                  <FiX className="text-xl text-red-500" />
                  <span> TV&Desktop</span>
                </div>
                <div className="py-4 flex gap-2 items-center text-lg">
                  <FiX className="text-xl text-red-500" />
                  <span> 24/7 Support</span>
                </div>
                <div className="mt-5 flex gap-2 items-center justify-center text-lg bg-green-500 hover:bg-green-600 rounded p-2.5 cursor-pointer">
                  <span className="block text-center text-gray-700 font-semibold">
                    {" "}
                    CHOOSE PLANE
                  </span>
                </div>
              </div>

              {/* 3 */}
              <div className="py-10 px-7 bg-gray-800 rounded">
                <div className="flex justify-between text-xl font-semibold">
                  <span>Cinematic</span>
                  <span className="text-yellow-500">$49.99 / month</span>
                </div>
                <div className="py-4 mt-3 border-b border-gray-900 flex gap-2 items-center text-lg">
                  <FcCheckmark className="text-xl" />
                  <span> 2Month</span>
                </div>
                <div className="py-4 border-b border-gray-900 flex gap-2 items-center text-lg">
                  <FcCheckmark className="text-xl" />
                  <span> Ultra HD</span>
                </div>
                <div className="py-4 border-b border-gray-900 flex gap-2 items-center text-lg">
                  <FcCheckmark className="text-xl" />
                  <span> Limited Availability</span>
                </div>
                <div className="py-4 border-b border-gray-900 flex gap-2 items-center text-lg">
                  <FcCheckmark className="text-xl" />
                  <span>Any Device</span>
                </div>
                <div className="py-4 flex gap-2 items-center text-lg">
                  <FcCheckmark className="text-xl" />
                  <span>24/7 Support</span>
                </div>
                <div className="mt-5 flex gap-2 items-center justify-center text-lg bg-yellow-500 hover:bg-yellow-600 rounded p-2.5 cursor-pointer">
                  <span className="block text-center text-gray-700 font-semibold">
                    {" "}
                    CHOOSE PLANE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center bg-gray-900 p-5 w-full">
        <div className="flex justify-center gap-5 md:justify-between flex-wrap items-center text-gray-100 w-full">

          <div className="flex gap-5">
            <span className="text-3xl font-bold text-yellow-200 tracking-wide">
              Move<span className="text-gray-100">Flix</span>
            </span>
            <div className="flex flex-col text-sm">
              <span className="">© HOTFLIX, 2019—2021</span>
              <span className="">Create by Dmitry Volkov</span>
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

export default App;