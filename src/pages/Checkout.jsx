import { FaArrowLeft, FaRegClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white md:hidden flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-center relative py-4 border-b">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4"
        >
          <FaArrowLeft />
        </button>

        <h1 className="font-bold text-lg">
          Checkout
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 p-5">

        {/* Delivery Address */}
        <div className="flex justify-between items-center">

          <div>
            <p className="text-gray-500 text-sm">
              Delivery
            </p>

            <h2 className="font-semibold">
              123 Elm Street, Apt 4B
            </h2>

            <p className="text-gray-500 text-sm">
              New York, NY 10001
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200"
            alt="House"
            className="w-20 h-20 rounded-xl object-cover"
          />

        </div>

        {/* Summary */}
        <div className="mt-8">
          <h2 className="font-bold text-xl">
            Order Summary
          </h2>

          <div className="flex items-center gap-4 mt-5">

            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <FaRegClock className="text-[#FB5203]" />
            </div>

            <div>
              <p className="font-medium">
                25–35 min
              </p>

              <p className="text-gray-500 text-sm">
                Estimated delivery time
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Button */}
      <div className="p-4">
        <button
          className="w-full bg-[#FB5203] text-white py-4 rounded-full font-semibold"
        >
          Proceed to Payment
        </button>
      </div>

    </div>
  );
}

export default Checkout;