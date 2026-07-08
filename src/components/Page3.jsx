import page3 from "../assets/page3.png";
import { Link } from "react-router-dom";
function Page3() {
  return (
    <div className="fixed inset-0 bg-white overflow-hidden md:hidden">
      <div className="mt-10 flex justify-center item-center">
        <img
          src={page3}
          alt="Page 3"
          className="w-60"
        />
      </div>
      <div className="text-center text-2xl mt-5">
       Fresh &Quality Foods
      </div>
      <div className="text-center text-l p-5 m-3">
        Every Dish prepared with care and professional 
        chef using the finest ingredients
      </div>
      <div className="flex justify-center gap-5 mt-7">
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-10 h-3 bg-[#FB5203] rounded-full"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/page4"><button className="bg-[#FB5203] p-3 w-40 rounded-xl text-white ">NEXT</button></Link>
      </div>
    </div>
  );
}

export default Page3;