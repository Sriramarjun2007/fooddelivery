import { FaArrowLeft, FaCreditCard } from "react-icons/fa";
import { SiGooglepay } from "react-icons/si";
import { MdPayments } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Payment() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("card");

  const paymentMethods = [
    {
      id: "card",
      title: "Card",
      subtitle: "Add a new card",
      icon: <FaCreditCard className="text-4xl text-gray-600" />,
    },
    {
      id: "upi",
      title: "UPI",
      subtitle: "Pay with UPI",
      icon: <SiGooglepay className="text-4xl text-white" />,
      dark: true,
    },
    {
      id: "cod",
      title: "Cash on Delivery",
      subtitle: "Pay with cash",
      icon: <MdPayments className="text-4xl text-green-700" />,
    },
  ];

  const handlePayment = () => {
    alert("Payment Successful!");

    localStorage.removeItem("cart");

    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-white md:hidden">

      {/* Header */}
      <div className="flex items-center gap-4 p-4">
        <button onClick={() => navigate(-1)}>
          <FaArrowLeft className="text-xl" />
        </button>

        <h1 className="font-bold text-lg">Payment</h1>
      </div>

      <div className="px-5">

        <h2 className="font-bold text-lg mb-5">
          Payment Method
        </h2>

        {paymentMethods.map((method) => (
          <div
            key={method.id}
            onClick={() => setSelectedMethod(method.id)}
            className={`flex justify-between items-center p-4 rounded-2xl mb-4 cursor-pointer border-2 transition
              ${
                selectedMethod === method.id
                  ? "border-[#FB5203]"
                  : "border-transparent"
              }`}
          >
            <div>
              <h3 className="font-semibold text-lg">
                {method.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {method.subtitle}
              </p>
            </div>

            <div
              className={`w-20 h-20 rounded-xl flex items-center justify-center ${
                method.dark
                  ? "bg-[#294C52]"
                  : "bg-[#FFF2E8]"
              }`}
            >
              {method.icon}
            </div>
          </div>
        ))}

      </div>

      {/* Pay Button */}
      <div className="fixed bottom-5 left-0 right-0 px-4">
        <button
        onClick={() => navigate("/payment-success")}
        className="w-full bg-[#FB5203] text-white py-4 rounded-full font-semibold"
        >
        Pay Now
        </button>
      </div>

    </div>
  );
}

export default Payment;