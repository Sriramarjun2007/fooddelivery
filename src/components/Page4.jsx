import page4 from "../assets/page4.png";
import { Link } from "react-router-dom";
function Page4() {
  return (
    <div className="fixed inset-0 bg-white overflow-hidden md:hidden">
      <div className="mt-10 flex justify-center item-center">
        <img
          src={page4}
          alt="Page 2"
          className="w-50"
        />
      </div>
      <div className="text-center text-2xl mt-5">
        Fast Delivery
      </div>
      <div className="text-center text-l p-5 m-5">
        Get your food Deliverd hot and freshto
              your doorsteps in minits
      </div>
      <div className="flex justify-center gap-5 mt-10 mb-8">
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-10 h-3 bg-[#FB5203] rounded-full"></div>
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/loginpage"><button className="bg-[#FB5203] p-3 w-40 rounded-xl text-white ">NEXT</button></Link>
      </div>
    </div>
  );
}

export default Page4;