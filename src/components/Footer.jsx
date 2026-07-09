import { FaHome, FaRegUser } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";
function Footer() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-100  ml-2 mr-2 shadow-md md:hidden">
      <div className="flex justify-around items-center py-3">

        {/* Home */}
        <div className="flex flex-col items-center text-[#FB5203]">
          <FaHome className="text-2xl" />
          <p className="text-xs mt-1">Home</p>
        </div>

        {/* Order */}
        <div className="flex flex-col items-center text-black">
          <LuClock3 className="text-2xl" />
          <p className="text-xs mt-1">Order</p>
        </div>

        {/* Chats */}
        <div className="flex flex-col items-center text-black">
          <IoChatbubbleOutline className="text-2xl" />
          <p className="text-xs mt-1">Chats</p>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center text-black">
          <FaRegUser className="text-2xl" />
          <p className="text-xs mt-1">Profile</p>
        </div>

      </div>
    </div>
  );
}

export default Footer;