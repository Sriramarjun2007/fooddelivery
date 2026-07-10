import { useEffect, useState } from "react";
import { FaArrowLeft, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
function Order() {
  const navigate = useNavigate();

  const [orderItems, setOrderItems] = useState([]);
  const [activeOrders, setActiveOrders] = useState([]);
  const [pastOrders, setPastOrders] = useState([]);
  const [tab, setTab] = useState("active");

  useEffect(() => {
    const order =
      JSON.parse(localStorage.getItem("order")) || [];

    setOrderItems(order);

    const tracking =
      JSON.parse(localStorage.getItem("trackingOrder"));

    if (tracking) {
      setActiveOrders([tracking]);
    }

    const history =
      JSON.parse(localStorage.getItem("orderHistory")) || [];

    setPastOrders(history);
  }, []);

  const removeItem = (index) => {
    const updated = [...orderItems];

    updated.splice(index, 1);

    setOrderItems(updated);

    localStorage.setItem(
      "order",
      JSON.stringify(updated)
    );
  };

  const totalAmount = orderItems.reduce(
    (sum, item) => sum + item.total,
    0
  );

  const placeOrder = () => {
    if (orderItems.length === 0) return;

    const trackingOrder = {
      id: Date.now(),
      items: orderItems,
      total: totalAmount,
      status: "Preparing",
      estimatedTime: "25-30 mins",
      orderedAt: new Date().toLocaleString(),
    };

    localStorage.setItem(
      "trackingOrder",
      JSON.stringify(trackingOrder)
    );

    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5 pb-32 md:hidden">

      {/* Header */}

      <div className="flex items-center gap-4 mb-5">

        <button onClick={() => navigate(-1)}>
          <FaArrowLeft className="text-xl" />
        </button>

        <h1 className="text-2xl font-bold">
          My Orders
        </h1>

      </div>

      {/* Current Order */}

      {orderItems.length > 0 && (
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
                  className="w-24 h-24 rounded-xl object-cover"
                />

                <div className="flex-1">

                  <h2 className="font-bold">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 text-sm mt-1">
                    {item.description}
                  </p>

                  <p className="mt-2">
                    Qty : {item.quantity}
                  </p>

                  <p className="text-[#FB5203] font-bold mt-2">
                    ₹{item.total}
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

          <div className="bg-white rounded-2xl p-5 shadow mb-6">

            <div className="flex justify-between font-bold text-lg">

              <span>Total</span>

              <span className="text-[#FB5203]">
                ₹{totalAmount}
              </span>

            </div>

            <button
              onClick={placeOrder}
              className="w-full bg-[#FB5203] text-white py-3 rounded-xl mt-5"
            >
              Place Order
            </button>

          </div>
        </>
      )}

      {/* Tabs */}

      <div className="flex bg-white rounded-full p-1 shadow mb-5">

        <button
          onClick={() => setTab("active")}
          className={`flex-1 py-2 rounded-full ${
            tab === "active"
              ? "bg-[#FB5203] text-white"
              : "text-gray-600"
          }`}
        >
          Active ({activeOrders.length})
        </button>

        <button
          onClick={() => setTab("past")}
          className={`flex-1 py-2 rounded-full ${
            tab === "past"
              ? "bg-[#FB5203] text-white"
              : "text-gray-600"
          }`}
        >
          Past ({pastOrders.length})
        </button>

      </div>

      {/* Active Orders */}

      {tab === "active" ? (
        activeOrders.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">
            No Active Orders
          </div>
        ) : (
          activeOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl shadow p-5 mb-4"
            >
              <h2 className="font-bold text-lg">
                Order #{order.id}
              </h2>

              <p className="text-[#FB5203] mt-2 font-semibold">
                {order.status}
              </p>

              <p className="text-gray-500 mt-1">
                ETA : {order.estimatedTime}
              </p>

              <button
                onClick={() => navigate("/tracking")}
                className="w-full bg-[#FB5203] text-white py-3 rounded-xl mt-4"
              >
                Track Order
              </button>

            </div>
          ))
        )
      ) : pastOrders.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          No Past Orders
        </div>
      ) : (
        pastOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-2xl shadow p-5 mb-4"
          >
            <h2 className="font-bold text-lg">
              Order #{order.id}
            </h2>

            <p className="text-green-600 font-semibold mt-2">
              Delivered
            </p>

            <p className="text-gray-500 mt-1">
              {order.orderedAt}
            </p>

            <button
              className="w-full border-2 border-[#FB5203] text-[#FB5203] py-3 rounded-xl mt-4"
            >
              Reorder
            </button>

          </div>
        ))
      )}
        <>
                <div className="pl-5 pr-5 pb-24 md:hidden">
                {/* Your entire Home page content goes here */}
                </div>

                <Footer />
            </>
    </div>
  );
}

export default Order;