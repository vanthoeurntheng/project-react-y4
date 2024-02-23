import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { FiX } from "react-icons/fi";

function Pricingplan() {
    return (
      <>
        <div className="flex justify-center items-center">
          <div className="max-w-7xl mt-5 flex flex-col justify-center items-center p-3 shadow-xl">
            <div className="w-full mt-20 text-gray-100 tracking-wider z-10 p-3">
              <span className="text-3xl font-bold text-yellow-200 tracking-wider">
                Move
                <span className="text-gray-100">
                  Flix - Best Place for Movies
                </span>
              </span>
              <p className="tracking-wider font-light mt-10">
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using. Many desktop
                publishing packages and web page editors now use Lorem Ipsum as
                their default model text, and a search for 'lorem ipsum' will
                uncover many web sites still in their infancy.
              </p>

              <p className="tracking-wider font-light mt-5">
                Content here, content here, making it look like readable English.
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy. Various
                versions have evolved over the years, sometimes by accident,
                sometimes on purpose (injected humour and the like).
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
        </div>

        {/* footer */}
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

export default Pricingplan