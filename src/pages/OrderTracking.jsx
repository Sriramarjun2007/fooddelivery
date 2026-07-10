import { useEffect, useState } from "react";
import { FaArrowLeft, FaPhoneAlt } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function OrderTracking() {
  const navigate = useNavigate();

  const [status, setStatus] = useState("Preparing");

  // Update Status Automatically
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStatus("On the Way");
    }, 10000);

    const timer2 = setTimeout(() => {
      setStatus("Delivered");
    }, 20000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Save Status in LocalStorage
  useEffect(() => {
    const trackingOrder =
      JSON.parse(localStorage.getItem("trackingOrder")) || {};

    trackingOrder.status = status;

    localStorage.setItem(
      "trackingOrder",
      JSON.stringify(trackingOrder)
    );
  }, [status]);

  // Tracking Steps
  const steps = [
    {
      title: "Order Confirmed",
      done: true,
    },
    {
      title: "Preparing",
      done:
        status === "Preparing" ||
        status === "On the Way" ||
        status === "Delivered",
    },
    {
      title: "On the Way",
      done:
        status === "On the Way" ||
        status === "Delivered",
    },
    {
      title: "Delivered",
      done: status === "Delivered",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 md:hidden pb-20">

      {/* Header */}
      <div className="flex items-center p-4 bg-white shadow">
        <button onClick={() => navigate(-1)}>
          <FaArrowLeft className="text-lg" />
        </button>

        <h1 className="flex-1 text-center font-bold text-xl mr-6">
          Order Tracking
        </h1>
      </div>

      {/* Map */}
      <div className="p-4">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1000"
          alt="Map"
          className="w-full h-56 rounded-2xl object-cover"
        />
      </div>

      {/* Current Status */}
      <div className="bg-white mx-4 rounded-2xl p-5 shadow">

        <h2 className="text-xl font-bold">
          Current Status
        </h2>

        <p className="text-[#FB5203] font-bold text-lg mt-2">
          {status}
        </p>

      </div>

      {/* Tracking Steps */}
      <div className="bg-white mx-4 mt-4 rounded-2xl p-5 shadow">

        {steps.map((step, index) => (
          <div key={index} className="flex">

            <div className="flex flex-col items-center mr-4">

              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center ${
                  step.done
                    ? "bg-green-500 text-white"
                    : "border-2 border-gray-400 bg-white"
                }`}
              >
                {step.done && "✓"}
              </div>

              {index !== steps.length - 1 && (
                <div
                  className={`w-1 h-12 ${
                    step.done
                      ? "bg-green-500"
                      : "bg-gray-300"
                  }`}
                ></div>
              )}

            </div>

            <div className="pt-1">
              <h3 className="font-semibold text-lg">
                {step.title}
              </h3>
            </div>

          </div>
        ))}

      </div>

      {/* Delivery Details */}
      <div className="bg-white mx-4 mt-4 rounded-2xl p-5 shadow">

        <h3 className="font-bold text-lg">
          Delivery Partner
        </h3>

        <p className="text-gray-500 mt-2">
          Rahul Kumar ⭐ 4.9
        </p>

        <h3 className="font-bold text-lg mt-5">
          Estimated Arrival
        </h3>

        <p className="text-gray-500 mt-2 ">
          {status === "Preparing" && "20-25 Minutes"}

          {status === "On the Way" && "5-10 Minutes"}

          {status === "Delivered" &&
            "Delivered Successfully 🎉"}
        </p>

      </div>

      {/* Bottom Buttons */}
      <div className="fixed bottom-5 left-0 right-0 px-4">

        <div className="flex gap-3">

          {/* Call */}
          <button
            onClick={() =>
              (window.location.href = "tel:123456789")
            }
            className="flex-1 bg-orange-100 text-[#FB5203] py-3 rounded-full flex items-center justify-center gap-2 font-semibold"
          >
            <FaPhoneAlt />
            Call
          </button>

          {/* Chat */}
          <button
            onClick={() =>
              alert("Chat feature coming soon!")
            }
            className="flex-1 bg-orange-100 text-[#FB5203] py-3 rounded-full flex items-center justify-center gap-2 font-semibold"
          >
            <IoChatbubbleEllipsesOutline />
            Chat
          </button>

          {/* View Order */}
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