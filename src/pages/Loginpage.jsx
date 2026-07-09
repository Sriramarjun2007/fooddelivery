import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginlogo from "../assets/loginlogo.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

function LoginPage() {
  const [activeTab, setActiveTab] = useState("login");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // Demo validation
    if (email === "admin@gmail.com" && password === "123456") {
      navigate("/home");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="fixed inset-0 md:hidden">
      <div className="flex justify-center mt-2">
        <img src={loginlogo} alt="Logo" className="w-20 h-20" />
      </div>

      <div className="text-center mt-2 text-xl font-bold">
        Welcome to Food Flow
      </div>

      <div className="text-center mt-1 text-sm">
        Log in to continue ordering
      </div>

      <div className="flex gap-3 justify-center bg-gray-300 mx-3 mt-3 p-2 rounded-xl">

        {/* Login */}
        <button
          onClick={() => setActiveTab("login")}
          className={`w-35 p-1 rounded-lg transition ${
            activeTab === "login"
              ? "bg-white font-semibold"
              : "bg-transparent"
          }`}
        >
          Login
        </button>

        {/* Sign Up */}
        <button
          onClick={() => setActiveTab("signup")}
          className={`w-35 p-1 rounded-lg transition ${
            activeTab === "signup"
              ? "bg-white font-semibold"
              : "bg-transparent"
          }`}
        >
          Sign Up
        </button>
      </div>

      {/* Login Form */}
      <form className="ml-5 mt-2 mr-5" onSubmit={handleLogin}>
        <label>Email</label>

        <input
          name="email"
          type="email"
          placeholder="Enter your Email"
          required
          className="w-full p-2 bg-gray-200 rounded-lg border border-transparent focus:border-gray-300 focus:outline-none"
        />

        <label className="block mt-1">Password</label>

        <input
          name="password"
          type="password"
          placeholder="Enter your Password"
          required
          className="w-full p-2 bg-gray-200 rounded-lg border border-transparent focus:border-gray-300 focus:outline-none"
        />

        <p className="text-red-500 text-right cursor-pointer mt-1">
          Forgot Password?
        </p>
          
        <button
          type="submit"
          className="w-full bg-[#FB5203] text-white p-3 rounded-xl mt-2"
        >
          Login
        </button>
      </form>

      <div className="flex items-center ml-5 mr-5 my-4">
        <hr className="flex-1 border-gray-300" />
        <span className="px-3 text-gray-500 text-sm">
          or continue with
        </span>
        <hr className="flex-1 border-gray-300" />
      </div>

      <div className="space-y-2 mt-2 ml-5 mr-5">

        <button className="w-full flex items-center pl-20 gap-2 bg-gray-200 rounded-2xl px-2 py-2">
          <FcGoogle className="text-xl" />
          <span className="text-lg font-medium text-[#4B1E1E]">
            Continue with Google
          </span>
        </button>

        <button className="w-full flex items-center justify-center gap-2 bg-gray-200 rounded-2xl px-2 py-2">
          <FaFacebook className="text-xl text-blue-600" />
          <span className="text-lg font-medium text-[#4B1E1E]">
            Continue with Facebook
          </span>
        </button>

        <button className="w-full flex items-center pl-20 gap-2 bg-gray-200 rounded-2xl px-2 py-2">
          <FaApple className="text-xl text-black" />
          <span className="text-lg font-medium text-[#4B1E1E]">
            Continue with Apple
          </span>
        </button>

      </div>
    </div>
  );
}

export default LoginPage;