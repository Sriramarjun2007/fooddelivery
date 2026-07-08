import { useState } from "react";
import loginlogo from "../assets/loginlogo.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
function LoginPage() {
  const [activeTab, setActiveTab] = useState("login");

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
      <div className="ml-5 mt-2 mr-5">
        <label>Email</label><br></br>
        <input
            type="email"
            placeholder="Enter your Email"
            className="w-full p-2 bg-gray-200 rounded-lg border border-transparent  focus:border-gray-300 focus:outline-none"
            />
         <label>Password</label><br></br>
        <input
            type="password"
            placeholder="Enter your Password"
            className="w-full p-2 bg-gray-200 rounded-lg border border-transparent  focus:border-gray-300 focus:outline-none"
            />  
         <p className="text-red-500 text-right cursor-pointer">Forgot password?</p>    
         <button className="bg-[#FB5203] p-3 w-full text-center rounded-xl text-white mt-5">
            Login
         </button>
      </div>
      <p className="ml-5 mr-5 p-2">──────── or continue with ─────────</p>
      <div className="space-y-2 mt-2 ml-5 mr-5">

        {/* Google */}
        <button className="w-full flex items-center gap-5 bg-gray-200 rounded-2xl px-2 py-2">
            <FcGoogle className="text-xl" />
            <span className="text-lg font-medium text-[#4B1E1E]">
            Continue with Google
            </span>
        </button>

        {/* Facebook */}
        <button className="w-full flex items-center gap-5 bg-gray-200 rounded-2xl px-2 py-2">
            <FaFacebook className="text-xl text-blue-600" />
            <span className="text-lg font-medium text-[#4B1E1E]">
            Continue with Facebook
            </span>
        </button>

        {/* Apple */}
        <button className="w-full flex items-center gap-5 bg-gray-200 rounded-2xl px-2 py-2">
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