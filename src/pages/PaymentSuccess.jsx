
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PaymentSuccess() {
  const navigate = useNavigate();

  // Random Order ID
  const orderId = Math.floor(
    100000000 + Math.random() * 900000000
  );

  return (
    <div className="min-h-screen bg-white md:hidden">

      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <button onClick={() => navigate(-1)}>
          <FaArrowLeft className="text-lg" />
        </button>

        <h1 className="flex-1 text-center font-bold text-lg mr-6">
          Payment Successful
        </h1>
      </div>

      {/* Success Image */}
      <div className="px-4 mt-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
          alt="Success"
          className="w-full h-56 object-contain bg-[#E8F6F3] rounded-xl"
        />
      </div>

      {/* Content */}
      <div className="px-6 mt-6">

        <h2 className="text-2xl font-bold text-center">
          Order Placed Successfully
        </h2>

        <p className="text-center text-gray-500 mt-3 leading-6">
          Your order has been placed successfully.
          You can track your order status in the app.
        </p>

        <div className="mt-8">
          <p className="font-bold text-lg">
            Order ID
          </p>

          <p className="text-gray-500 mt-2">
            {orderId}
          </p>
        </div>

      </div>

      {/* Bottom Buttons */}
      <div className="fixed bottom-5 left-0 right-0 px-4">

        <button
          onClick={() => navigate("/order")}
          className="w-full bg-[#FB5203] text-white py-4 rounded-full font-semibold"
        >
          Track Order
        </button>

        <button
          onClick={() => navigate("/home")}
          className="w-full mt-3 border-2 border-[#FB5203] text-[#FB5203] py-4 rounded-full font-semibold"
        >
          Back to Home
        </button>

      </div>

    </div>
  );
}

export default PaymentSuccess;