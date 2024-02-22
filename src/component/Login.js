import React from "react";
import { Redirect } from "react-router-dom";
import siginbg from "../images/pic1.jpg";
import { FaLock } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirectToHome: false,
    };
  }

  handleLogin = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    // Check if the username and password are valid
    if (username === "admin" && password === "12345") {
      console.log("Login successful");
      this.setState({ redirectToHome: true });
    } else {
      alert("Wrong username or password");
    }
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, password, redirectToHome } = this.state;

    if (redirectToHome) {
      // Redirect to the home page
      return <Redirect to="/" />;
    }

    return (
      <header className="flex justify-center items-center min-h-screen">
          <div className="flex justify-center items-center">
            <div className="shadow shadow-yellow-300/50 bg-gray-800 rounded-lg w-full px-10">
              <div className=" flex justify-center items-center py-5">
                <BsPersonCircle className="text-9xl text-gray-400" />
              </div>

              <h1 className="mt-6 text-2xl text-gray-600 tracking-wider block text-center">
                USER LOGIN
              </h1>
              <form onSubmit={this.handleLogin}
                className="flex gap-5 flex-col px-4 py-6">
                <div className="relative">
                  <input name="username" value={username} onChange={this.handleInputChange}
                    className="w-full border rounded-lg text-[15px] text-gray-800 h-12 px-12 bg-yellow-200 focus:outline-none focus:ring-primary-300"
                    type="text" placeholder="Username" required />
                  <div className="absolute left-4 top-3 text-[25px]">
                    <FaUserTie className="text-gray-500"/>
                  </div>
                </div>

                <div className="relative">
                  <input name="password" value={password} onChange={this.handleInputChange}
                    className="w-full border rounded-lg text-[15px] h-12 px-12 bg-gray-600 focus:outline-none focus:ring-primary-300" type="password" placeholder="Password"
                    required />
                  <div className="absolute left-4 top-3 text-[25px]">
                    <FaLock className="text-gray-300"/>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <button type="submit" className="group relative h-10 w-28 overflow-hidden rounded-lg bg-white text-md shadow border border-gray-400" >
                    <div className="absolute inset-0 w-0 bg-yellow-200 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
                    <span className="relative text-gray-600 text-md font-semibold tracking-wider">
                      Login
                    </span>
                  </button>
                </div>
                <div className="flex justify-center px-1">
                  <Link to="/Signup" className="text-base text-yellow-200 hover:text-gray-800 hover:underline duration-500 tracking-wider" >
                    Signup
                  </Link>
                </div>
              </form>
            </div>
          </div>
      </header>
    );
  }
}

export default Login;
