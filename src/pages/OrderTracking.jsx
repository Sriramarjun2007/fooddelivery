import { FaArrowLeft, FaPhoneAlt } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function OrderTracking() {
  const navigate = useNavigate();

  const steps = [
    { title: "Order Confirmed", done: true },
    { title: "Preparing", done: true },
    { title: "On the Way", done: true },
    { title: "Delivered", done: false },
  ];

  return (
    <div className="min-h-screen bg-white md:hidden">

      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <button onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>

        <h1 className="flex-1 text-center font-bold text-lg mr-6">
          Order Tracking
        </h1>
      </div>

      {/* Map */}
      <div className="p-4">
        <img
          src="https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png"
          alt="Map"
          className="w-full h-44 rounded-xl object-cover"
        />
      </div>

      {/* Tracking Steps */}
      <div className="px-6">

        {steps.map((step, index) => (
          <div key={index} className="flex">

            <div className="flex flex-col items-center mr-4">

              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  step.done
                    ? "bg-green-500 text-white"
                    : "border-2 border-gray-400"
                }`}
              >
                {step.done && "✓"}
              </div>

              {index !== steps.length - 1 && (
                <div className="w-1 h-10 bg-gray-300"></div>
              )}
            </div>

            <div className="pt-1 pb-8">
              <h3 className="font-semibold">{step.title}</h3>
            </div>

          </div>
        ))}

        {/* Delivery Info */}

        <div className="mt-2">

          <p className="font-semibold">
            Delivery Partner
          </p>

          <p className="text-gray-500 mt-1">
            Rahul Kumar
          </p>

          <p className="mt-5 font-semibold">
            Estimated arrival
          </p>

          <p className="text-gray-500">
            15-20 minutes
          </p>

        </div>

      </div>

      {/* Bottom Buttons */}

      <div className="fixed bottom-5 left-0 right-0 px-5">

        <div className="flex justify-between gap-3">

          <button className="flex-1 bg-orange-100 text-[#FB5203] py-3 rounded-full flex items-center justify-center gap-2 font-semibold">
            <FaPhoneAlt />
            Call
          </button>

          <button className="flex-1 bg-orange-100 text-[#FB5203] py-3 rounded-full flex items-center justify-center gap-2 font-semibold">
            <IoChatbubbleEllipsesOutline />
            Contact
          </button>

          <button
            onClick={() => navigate("/order")}
            className="flex-1 bg-[#FB5203] text-white py-3 rounded-full font-semibold"
          >
            View Order
          </button>

        </div>

      </div>

    </div>
  );
}

export default OrderTracking;