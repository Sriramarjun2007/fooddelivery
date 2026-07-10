import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { products } from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const totalPrice = product.price * quantity;

  return (
    <div className="min-h-screen bg-gray-100 fixed inset-0 md:hidden">

      {/* Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover"
        />

        <button
          onClick={() => window.history.back()}
          className="absolute top-4 left-4 bg-white p-2 rounded-full shadow"
        >
          <FaArrowLeft />
        </button>
      </div>

      {/* Details */}
      <div className="bg-white rounded-t-3xl -mt-6 relative p-6">

        <h1 className="text-3xl font-bold">
          {product.name}
        </h1>

        <div className="flex items-center gap-2 mt-2">
          <FaStar className="text-yellow-500" />
          <span className="font-semibold">4.8</span>
          <span className="text-gray-500">(220 Reviews)</span>
        </div>

        <p className="text-gray-600 mt-4 leading-7">
          {product.description}
        </p>
            <div className="mt-6 flex justify-between items-center">
            <div>
                <p className="text-gray-500">Price</p>

                <h2 className="text-3xl font-bold text-[#FB5203]">
                ₹{totalPrice}
                </h2>
            </div>

            <div>
                <p className="text-gray-500 mb-2">Quantity</p>

                <div className="flex items-center bg-gray-100 rounded-xl">
                <button
                    onClick={decrease}
                    className="px-4 py-2 text-2xl font-bold"
                >
                    −
                </button>

                <span className="px-6 font-bold text-lg">
                    {quantity}
                </span>

                <button
                    onClick={increase}
                    className="px-4 py-2 text-2xl font-bold"
                >
                    +
                </button>
                </div>
            </div>
            </div>

        <button className="w-full bg-[#FB5203] text-white py-4 rounded-xl text-lg font-semibold mt-10">
          Order Now
        </button>

        <button className="w-full border-2 border-[#FB5203] text-[#FB5203] py-4 rounded-xl text-lg font-semibold mt-4">
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductDetails;