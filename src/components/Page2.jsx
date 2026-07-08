import page2image from "../assets/page2image.png";
import { Link } from "react-router-dom";
function Page2() {
  return (
    <div className="fixed inset-0 bg-white overflow-hidden md:hidden">
      <div className="mt-10 flex justify-center item-center">
        <img
          src={page2image}
          alt="Page 2"
          className="w-50"
        />
      </div>
      <div className="text-center text-2xl mt-5">
        Discover Restaurants
      </div>
      <div className="text-center text-l p-5">
        Find Your favorite local restaurant an explore 
        cuisines from the  comfort  of your home 
      </div>
      <div className="flex justify-center gap-5 mt-2">
        <div className="w-10 h-3 bg-[#FB5203] rounded-full"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/page3"><button className="bg-[#FB5203] p-3 w-40 rounded-xl text-white ">NEXT</button></Link>
      </div>
    </div>
  );
}

export default Page2;