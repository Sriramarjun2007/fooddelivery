import { useEffect, useState } from "react";
import { FaArrowLeft, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Order() {
  const [orderItems, setOrderItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("order")) || [];
    setOrderItems(data);
  }, []);

  const removeItem = (index) => {
    const updatedOrder = [...orderItems];
    updatedOrder.splice(index, 1);

    setOrderItems(updatedOrder);
    localStorage.setItem("order", JSON.stringify(updatedOrder));
  };

  const totalAmount = orderItems.reduce(
    (sum, item) => sum + item.total,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-5 md:hidden">

      {/* Header */}
      <div className="flex items-center gap-4 mb-5">
        <button onClick={() => navigate(-1)}>
          <FaArrowLeft className="text-xl" />
        </button>

        <h1 className="text-2xl font-bold">
          My Orders
        </h1>
      </div>

      {orderItems.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-gray-500 text-lg">
            No Orders Yet 📦
          </p>
        </div>
      ) : (
        <>
          {orderItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow p-4 mb-4"
            >
              <div className="flex gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 rounded-xl object-cover"
                />

                <div className="flex-1">
                  <h2 className="font-bold text-lg">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 text-sm mt-1">
                    {item.description}
                  </p>

                  <p className="mt-2">
                    Quantity: {item.quantity}
                  </p>

                  <p className="text-[#FB5203] font-bold mt-2">
                    ₹{item.total}
                  </p>

                  <p className="text-green-600 font-semibold mt-2">
                    Order Confirmed
                  </p>
                </div>

                <button
                  onClick={() => removeItem(index)}
                  className="text-red-500"
                >
                  <FaTrash />
                </button>

              </div>
            </div>
          ))}

          {/* Total */}
          <div className="bg-white rounded-2xl shadow p-4 mt-6">
            <div className="flex justify-between text-xl font-bold">
              <span>Total Amount</span>
              <span className="text-[#FB5203]">
                ₹{totalAmount}
              </span>
            </div>

            <button
              className="w-full bg-[#FB5203] text-white py-3 rounded-xl mt-5 font-semibold"
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Order;