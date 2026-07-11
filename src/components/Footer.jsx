import { FaHome, FaRegUser,FaComments } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { useNavigate, useLocation } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t md:hidden">
      <div className="flex justify-around items-center py-3">

        {/* Home */}
        <div
          onClick={() => navigate("/home")}
          className={`flex flex-col items-center cursor-pointer ${
            location.pathname === "/home"
              ? "text-[#FB5203]"
              : "text-gray-500"
          }`}
        >
          <FaHome className="text-2xl" />
          <p className="text-xs mt-1">Home</p>
        </div>

        {/* Orders */}
        <div
          onClick={() => navigate("/order")}
          className={`flex flex-col items-center cursor-pointer ${
            location.pathname === "/orders"
              ? "text-[#FB5203]"
              : "text-gray-500"
          }`}
        >
          <LuClock3 className="text-2xl" />
          <p className="text-xs mt-1">Orders</p>
        </div>

        {/* Cart */}
        <div
          onClick={() => alert("feature will be update soon")}
          className={`flex flex-col items-center cursor-pointer ${
            location.pathname === "/cart"
              ? "text-[#FB5203]"
              : "text-gray-500" 
          }`}
        >
          <FaComments className="text-2xl" />
          <p className="text-xs mt-1">Chat</p>
        </div>

        {/* Profile */}
        <div
          onClick={() => navigate("/profile")}
          className={`flex flex-col items-center cursor-pointer ${
            location.pathname === "/profile"
              ? "text-[#FB5203]"
              : "text-gray-500"
          }`}
        >
          <FaRegUser className="text-2xl" />
          <p className="text-xs mt-1">Profile</p>
        </div>

      </div>
    </div>
  );
}

export default Footer;