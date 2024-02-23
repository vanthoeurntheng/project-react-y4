// import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Flix from'./component/Flix';
import Signup from './component/Signup';
import Login from './component/Login';
import Pricingplan from './component/Pricingplan';
import Detail from './component/Detail';
import Movie from './component/Movie';
import Tvshow from './component/Tvshow';
import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import logo from "./images/logoo.png"

function App() {
  return (
    <>
      {/* <Pricingplan /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Flix" component={Flix} />
        <Route path="/Pricingplan" component={Pricingplan} />
        <Route path="/Movie" component={Movie} />
        <Route path="/Tvshow" component={Tvshow} />
        <Route path="/Detail" component={Detail} />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
      </Switch>

      <div className="head w-full flex flex-col justify-center items-center fixed top-0 shadow shadow-indigo-400/20 bg-[#051923] text-gray-100 z-50 overflow-hidden px-5 z-50">
        <div className="head-item w-full md:max-w-7xl flex items-center justify-between  gap-2 py-2">
          {/* log */}
          <div className="md:w-3/12">
            <Link to={"/"} className="flex gap-1">
              <div className=''><img src={logo}></img></div>
              <span className="text-3xl font-bold text-yellow-200 tracking-wide">
                Mov<span className="text-gray-100">Flix</span>
              </span>
            </Link>
          </div>
          {/* menu */}
          <div id="mySidepanel" className="menu md:w-9/12">
            <div className="flex flex-col justify-start md:justify-end md:items-center md:flex-row text-md md:text-sm leading-5 p-4 gap-3 tracking-wider">
              <div className="flex flex-col justify-start tracking-wider md:flex-row gap-5 mt-8 md:mt-0 md:gap-8 md:px-5 font-semibold">
                <Link className="text-left link link-underline py-1.5" to={"/"}>
                  MOVFLIX
                </Link>
                <Link
                  className="text-left link link-underline py-1.5"
                  to={"/Movie"}
                >
                  MOVIE
                </Link>
                <Link
                  className="text-left link link-underline py-1.5"
                  to={"/Tvshow"}
                >
                  TV SHOW
                </Link>
                <Link
                  className="text-left link link-underline py-1.5"
                  to={"/Pricingplan"}
                >
                  PRICING
                </Link>
              </div>
        
              <div className="flex mt-5 md:mt-0">
                <Link
                  className="px-4 py-2 shadow-sm shadow-yellow-200/50 bg-gray-900 text-yellow-200 rounded-lg hover:bg-gray-700 duration-50 tracking-wide"
                  to={"/Login"}
                >
                  LOGIN | SIGNUP
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="md:hidden text-gray-800 md:mt-0">
            <Search searchInput={searchInput} search={search} />
          </div> */}
          {/* Hambuger */}
          <div class="openbtn hidden cursor-pointer text-gray-100 border  shadow rounded-full z-40 hover:bg-none">
            <Hamburger
              direction="right"
              size={20}
              border={15}
              onToggle={(toggle) => {
                if (toggle) {
                  document.getElementById("mySidepanel").style.width = "320px";
                } else {
                  document.getElementById("mySidepanel").style.width = "0%";
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;