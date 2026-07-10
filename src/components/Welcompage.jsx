import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../assets/icon.png";

function WelcomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/page2"); 
    }, 2000)
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-[#FB5203] h-screen block md:hidden">
      <div className="flex justify-center pt-25">
        <img src={icon} alt="Icon" className="w-40" />
      </div>

      <div className="text-white pt-10 text-center text-xl font-bold">
        Food Flow
      </div>

      <div className="text-white pt-5 text-center text-xl">
        Delicious Food, Delivered Fast
      </div>

      <div className="flex justify-center gap-8 mt-15">
        <div className="w-5 h-5 bg-white rounded-full"></div>
        <div className="w-5 h-5 bg-white rounded-full"></div>
        <div className="w-5 h-5 bg-white rounded-full"></div>
      </div>
    </div>
  );
}

export default WelcomePage;