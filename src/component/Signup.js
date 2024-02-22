import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaUserShield } from "react-icons/fa";
import { IoMdKey } from "react-icons/io";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSignupClick = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log("Sign up " + userData.username + " " + userData.password);
    alert ("Signup Successful")
    this.setState({ redirectToHome: true });
  };


  render() {
    const { redirectToHome } = this.state;

    if (redirectToHome) {
      // Redirect to the home page
      return <Redirect to="/Login" />;
    }
    return (
      <header className="flex justify-center items-center min-h-screen">
          <div className="flex justify-center items-center">
            <div className="shadow shadow-yellow-300/50 bg-gray-800 rounded-lg w-full px-10">
              <div className=" flex justify-center items-center py-5">
                <SiGnuprivacyguard className="text-9xl text-gray-400" />
              </div>

              <h1 className=" mt-6 text-2xl text-gray-600 tracking-wider block text-center">
                USER SIGNUP
              </h1>
              <form onSubmit={this.onSignupClick}
                className="flex gap-5 flex-col px-4 py-6">
                <div className="relative">
                  <input name="username" value={this.state.username} onChange={this.onChange}
                    className="w-full border rounded-lg text-[15px] text-gray-800 h-12 px-12 bg-yellow-200 focus:outline-none focus:ring-primary-300"
                    type="text" placeholder="Username" required />
                  <div className="absolute left-4 top-3 text-[25px]">
                    <FaUserShield className="text-gray-500"/>
                  </div>
                </div>

                <div className="relative">
                  <input name="password" value={this.state.password} onChange={this.onChange}
                    className="w-full border rounded-lg text-[15px] h-12 px-12 bg-gray-600 focus:outline-none focus:ring-primary-300" type="password" placeholder="Password"
                    required />
                  <div className="absolute left-4 top-3 text-[25px]">
                    <IoMdKey className="text-gray-300"/>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <button type="submit" className="group relative h-10 w-28 overflow-hidden rounded-lg bg-white text-md shadow border border-gray-400" >
                    <div className="absolute inset-0 w-0 bg-yellow-400 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
                    <span className="relative text-gray-600 text-md font-semibold tracking-wider">
                      Signup
                    </span>
                  </button>
                </div>
                <div className="flex gap-1 justify-center px-1 text-gray-100 tracking-wider">
                    Already have account? <Link className="text-yellow-200 hover:text-yellow-100" to="/login"> Login</Link>
                </div>
              </form>
            </div>
          </div>
      </header>
    );
  }
}

export default Signup;
