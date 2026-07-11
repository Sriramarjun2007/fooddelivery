import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginlogo from "../assets/loginlogo.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

function LoginPage() {
  const [activeTab, setActiveTab] = useState("login");
  const navigate = useNavigate();

  // Login
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      alert("Login Successful");
      navigate("/home");
} else {
      alert("Invalid Email or Password");
    }
  };

  // Sign Up
  const handleSignup = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExists = users.find((user) => user.email === email);

    if (alreadyExists) {
      alert("Email already registered");
      return;
    }

    users.push({
      name,
      email,
      phone,
      password,
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account Created Successfully!");

    setActiveTab("login");
  };

  return (
    <div className="fixed inset-0 overflow-y-auto md:hidden bg-white">
      <div className="flex justify-center mt-2">
        <img src={loginlogo} alt="Logo" className="w-20 h-20" />
      </div>

      <div className="text-center mt-2 text-xl font-bold">
        Welcome to Food Flow
      </div>

      <div className="text-center mt-1 text-sm">
        {activeTab === "login"
          ? "Log in to continue ordering"
          : "Create your Food Flow account"}
      </div>

      {/* Tabs */}
      <div className="flex gap-3 justify-center bg-gray-300 mx-3 mt-3 p-2 rounded-xl">
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

      <div className="ml-5 mr-5 mt-4">
        {activeTab === "login" ? (
          <form onSubmit={handleLogin}>
            <label>Email</label>

            <input
              name="email"
              type="email"
              placeholder="Enter your Email"
              required
              className="w-full p-2 bg-gray-200 rounded-lg border border-transparent focus:border-gray-300 focus:outline-none"
            />

            <label className="block mt-3">Password</label>

            <input
              name="password"
              type="password"
              placeholder="Enter your Password"
              required
              className="w-full p-2 bg-gray-200 rounded-lg border border-transparent focus:border-gray-300 focus:outline-none"
            />

            <p className="text-red-500 text-right mt-2 cursor-pointer">
              Forgot Password?
            </p>

            <button
              type="submit"
              className="w-full bg-[#FB5203] text-white p-3 rounded-xl mt-3"
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignup}>
            <label>Full Name</label>

            <input
              name="name"
              type="text"
              placeholder="Enter your Full Name"
              required
              className="w-full p-2 bg-gray-200 rounded-lg border border-transparent focus:border-gray-300 focus:outline-none"
            />

            <label className="block mt-3">Email</label>

            <input
              name="email"
              type="email"
              placeholder="Enter your Email"
              required
              className="w-full p-2 bg-gray-200 rounded-lg border border-transparent focus:border-gray-300 focus:outline-none"
            />

            <label className="block mt-3">Phone Number</label>

            <input
              name="phone"
              type="tel"
              placeholder="Enter your Phone Number"
              required
              className="w-full p-2 bg-gray-200 rounded-lg border border-transparent focus:border-gray-300 focus:outline-none"
            />

            <label className="block mt-3">Password</label>

            <input
              name="password"
              type="password"
              placeholder="Create Password"
              required
              className="w-full p-2 bg-gray-200 rounded-lg border border-transparent focus:border-gray-300 focus:outline-none"
            />

            <label className="block mt-3">Confirm Password</label>

            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
              className="w-full p-2 bg-gray-200 rounded-lg border border-transparent focus:border-gray-300 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-[#FB5203] text-white p-3 rounded-xl mt-5"
            >
              Create Account
            </button>
          </form>
        )}
      </div>

      <div className="flex items-center ml-5 mr-5 my-5">
        <hr className="flex-1 border-gray-300" />
        <span className="px-3 text-gray-500 text-sm">
          or continue with
        </span>
        <hr className="flex-1 border-gray-300" />
      </div>

      <div className="space-y-3 ml-5 mr-5 pb-6">
        <button className="w-full flex items-center justify-center gap-3 bg-gray-200 rounded-2xl py-3">
          <FcGoogle className="text-xl" />
          <span className="font-medium">
            Continue with Google
          </span>
        </button>

        <button className="w-full flex items-center justify-center gap-3 bg-gray-200 rounded-2xl py-3">
          <FaFacebook className="text-xl text-blue-600" />
          <span className="font-medium">
            Continue with Facebook
          </span>
        </button>

        <button className="w-full flex items-center justify-center gap-3 bg-gray-200 rounded-2xl py-3">
          <FaApple className="text-xl" />
          <span className="font-medium">
            Continue with Apple
          </span>
        </button>
      </div>
    </div>
  );
}

export default LoginPage;