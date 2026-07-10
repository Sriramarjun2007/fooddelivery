import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PaymentSuccess() {
  const navigate = useNavigate();

  // Random Order ID
  const orderId = Math.floor(
    100000000 + Math.random() * 900000000
  );

  useEffect(() => {
    // Save tracking details
    const trackingData = {
      orderId,
      status: "Preparing",
      estimatedTime: "25-30 mins",
    };

    localStorage.setItem(
      "tracking",
      JSON.stringify(trackingData)
    );

    // Clear Order after successful payment
    localStorage.removeItem("order");
  }, []);
  const currentOrder =
  JSON.parse(localStorage.getItem("order")) || [];

const activeOrders =
  JSON.parse(localStorage.getItem("activeOrders")) || [];

activeOrders.push({
  id: Date.now(),
  items: currentOrder,
  status: "Preparing",
  date: new Date().toLocaleString(),
});

localStorage.setItem(
  "activeOrders",
  JSON.stringify(activeOrders)
);

  return (
    <div className="min-h-screen bg-white md:hidden">

      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <button onClick={() => navigate(-1)}>
          <FaArrowLeft className="text-lg" />
        </button>

        <h1 className="flex-1 text-center text-lg font-bold mr-6">
          Payment Successful
        </h1>
      </div>

      {/* Success Image */}
      <div className="px-5 mt-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
          alt="Success"
          className="w-full h-56 object-contain bg-green-50 rounded-2xl"
        />
      </div>

      {/* Details */}
      <div className="px-6 mt-6">

        <h2 className="text-2xl font-bold text-center">
          🎉 Order Placed Successfully
        </h2>

        <p className="text-center text-gray-500 mt-3 leading-7">
          Thank you for your purchase.
          Your payment has been received and your food is now being prepared.
        </p>

        <div className="bg-gray-100 rounded-2xl p-5 mt-8">

          <div className="flex justify-between">
            <span className="font-semibold">
              Order ID
            </span>

            <span className="text-[#FB5203] font-bold">
              #{orderId}
            </span>
          </div>

          <div className="flex justify-between mt-4">
            <span className="font-semibold">
              Status
            </span>

            <span className="text-green-600 font-semibold">
              Preparing 🍕
            </span>
          </div>

          <div className="flex justify-between mt-4">
            <span className="font-semibold">
              Estimated Delivery
            </span>

            <span className="font-bold">
              25 - 30 mins
            </span>
          </div>

        </div>

      </div>

      {/* Bottom Buttons */}
      <div className="fixed bottom-5 left-0 right-0 px-5">

        <button
          onClick={() => navigate("/tracking")}
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