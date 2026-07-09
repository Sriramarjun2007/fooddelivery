import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaFireAlt, FaPizzaSlice, FaHamburger, FaIceCream } from "react-icons/fa";
import { GiNoodles } from "react-icons/gi";
import { useState } from "react";
import pizza from "../assets/pizza.png"
import sushi from "../assets/sushi.png"
import Footer from "../components/Footer";
function Home(){
     const [products] = useState([
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Fresh mozzarella, tomato sauce, basil",
      price: "₹400",
      image: pizza,
    },
    {
      id: 2,
      name: "Sushi compo",
      description: "Assorted fresh sushi rools",
      price: "₹250",
      image: sushi,
    },
   
  ]);   
    return(
        <div className="pl-5 pr-5 block inset-0 md:hidden">
            <div className="mt-2 ">
                <div className="  text-gray-500">
                    Delivery to
                </div>
                <div className="flex items-center gap-1 ">
                    <FaLocationDot className="text-lg text-red-500" />
                    <span>Current Location</span>
                </div>
            </div>
            <div className="flex items-center bg-gray-200 rounded-xl px-3 py-2 mt-4">
                <FaSearch className="text-gray-500" />
                <input
                    type="text"
                    placeholder="Search restaurants for cuisines"
                    className="ml-2 bg-transparent outline-none w-full"
                />
             </div>
             <div className="h-full bg-gray-200 rounded-xl mt-5  pt-5">
                <div className="flex justify-center">
                <div className="w-80 bg-[#FB5203] h-45 rounded-2xl">
                    <div className="text-white pt-4 pl-5">
                     <p>Special offer</p>
                     <p className="text-2xl font-bold">Get 50% OFF</p>
                     <p>only your first order above <b>₹2000</b></p>
                     <button className="bg-white text-[#FB5203] font-bold p-2 rounded-2xl mt-3 w-30"> Order Now</button>
                    </div>
                </div>    
                </div>
                <div className="ml-8 mt-2 font-bold">Categories</div>
                <div>
                    <div className="flex justify-center gap-4 mt-5">

                        {/* Fire - Active */}
                        <div className="w-12 h-12 bg-[#FB5203] rounded-lg flex items-center justify-center cursor-pointer">
                            <FaFireAlt className="text-white text-2xl" />
                        </div>

                        {/* Pizza */}
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center cursor-pointer">
                            <FaPizzaSlice className="text-2xl" />
                        </div>

                        {/* Burger */}
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center cursor-pointer">
                            <FaHamburger className="text-2xl" />
                        </div>

                        {/* Noodles */}
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center cursor-pointer">
                            <GiNoodles className="text-2xl" />
                        </div>

                        {/* Ice Cream */}
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center cursor-pointer">
                            <FaIceCream className="text-2xl" />
                        </div>

                    </div>
                    <div className="grid grid-cols-1 gap-4 p-10">
                            {products.map((product) => (
                                <div
                                key={product.id}
                                className="bg-white rounded-xl overflow-hidden shadow-md"
                                >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-36 object-cover"
                                />

                                <div className="p-3">
                                    <h2 className="font-semibold text-lg">
                                    {product.name}
                                    </h2>

                                    <p className="text-gray-500 text-sm mt-1">
                                    {product.description}
                                    </p>

                                    <p className="text-[#FB5203] font-bold mt-2">
                                    {product.price}
                                    </p>
                                </div>
                                </div>
                        ))}
                </div>
                </div>
            </div>
            
             <>
             <Footer />
             </>
        </div>
        
        
    );
}
export default Home;