import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Bell,
  Heart,
  HelpCircle,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";

const ORANGE = "#FB5203";
const ORANGE_LIGHT = "#FFE4D6";

const addresses = [
  {
    id: "home",
    label: "Home",
    tag: "Default",
    detail: "123 Main street, 43B Apt, New York",
  },
  {
    id: "work",
    label: "Work",
    tag: null,
    detail: "463 office 23th floor, New York",
  },
  {
    id: "other",
    label: "Other",
    tag: null,
    detail: "786, park Avenue, New York",
  },
];

const accountItems = [
  { icon: User, title: "Personal info", subtitle: "Edit your personal information" },
  { icon: Bell, title: "Notifications", subtitle: "Manage notification settings" },
  { icon: Heart, title: "Favorites", subtitle: "View your favorite restaurants" },
];

const supportItems = [
  { icon: HelpCircle, title: "Help center", subtitle: "Get help and support" },
  { icon: Settings, title: "Settings", subtitle: "App preferences and settings" },
];

function StatBlock({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-xl font-semibold text-gray-900">{value}</span>
      <span className="text-xs text-gray-500 mt-1">{label}</span>
    </div>
  );
}

function MenuRow({ icon: Icon, title, subtitle, onClick, danger }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 rounded-2xl px-4 py-3 mb-3 text-left transition-colors ${
        danger ? "hover:bg-red-50" : "hover:bg-gray-50"
      }`}
      style={{ backgroundColor: danger ? "transparent" : "#F7F6F4" }}
    >
      {Icon && (
        <span
          className="flex items-center justify-center w-10 h-10 rounded-full shrink-0"
          style={{
            backgroundColor: danger ? "transparent" : ORANGE_LIGHT,
            color: danger ? "#E23636" : ORANGE,
          }}
        >
          <Icon size={18} />
        </span>
      )}
      <span className="flex-1">
        <span
          className={`block text-sm font-medium ${
            danger ? "text-red-500" : "text-gray-900"
          }`}
        >
          {title}
        </span>
        {subtitle && (
          <span className="block text-xs text-gray-500 mt-0.5">{subtitle}</span>
        )}
      </span>
      {!danger && <ChevronRight size={16} className="text-gray-300" />}
    </button>
  );
}

export default function ProfilePage() {
  const navigate = useNavigate();
  const [screen, setScreen] = useState("profile"); // "profile" | "account"
  const [tab, setTab] = useState("addresses"); // "orders" | "addresses" | "payments"

  const [user, setUser] = useState({
    name: "Guest",
    email: "",
    orders: 0,
    favorites: 0,
    sent: 0,
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("currentUser"));
    if (stored) {
      setUser((prev) => ({
        ...prev,
        name: stored.name,
        email: stored.email,
        orders: stored.orders ?? 0,
        favorites: stored.favorites ?? 0,
        sent: stored.sent ?? 0,
      }));
    } else {
      // No one logged in, send back to login
      navigate("/loginpage");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/loginpage");
  };

  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen font-sans">
      {screen === "profile" ? (
        <>
          {/* Header */}
          <div
            className="rounded-b-[32px] px-6 pt-8 pb-16"
            style={{ backgroundColor: ORANGE }}
          >
            <h1 className="text-white text-3xl font-semibold">Profile</h1>
            <p className="text-white/80 text-sm mt-1">Manage your account</p>
          </div>

          {/* Identity card */}
          <div className="px-6 -mt-10">
            <div className="bg-white rounded-2xl shadow-sm px-4 py-4 flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#F1F1F1" }}
              >
                <User size={30} className="text-gray-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 truncate">{user.name}</p>
                <p className="text-sm text-gray-500 truncate">{user.email}</p>
                <span
                  className="inline-block mt-2 text-xs font-medium px-3 py-1 rounded-full"
                  style={{ backgroundColor: ORANGE_LIGHT, color: ORANGE }}
                >
                  Premium member
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-around px-6 mt-6">
            <StatBlock value={user.orders} label="Orders" />
            <StatBlock value={user.favorites} label="Favorites" />
            <StatBlock value={user.sent} label="Sent" />
          </div>

          {/* Tabs */}
          <div className="px-6 mt-6">
            <div className="flex bg-gray-100 rounded-full p-1">
              {["orders", "addresses", "payments"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex-1 text-sm py-2 rounded-full capitalize transition-colors ${
                    tab === t ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="px-6 mt-4 pb-8">
            {tab === "addresses" &&
              addresses.map((a) => (
                <div
                  key={a.id}
                  className="rounded-2xl px-4 py-4 mb-3"
                  style={{ backgroundColor: "#F7F6F4" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">{a.label}</span>
                      {a.tag && (
                        <span
                          className="text-xs font-medium"
                          style={{ color: ORANGE }}
                        >
                          {a.tag}
                        </span>
                      )}
                    </div>
                    <button
                      className="text-sm font-medium"
                      style={{ color: ORANGE }}
                    >
                      Edit
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{a.detail}</p>
                </div>
              ))}

            {tab === "orders" && (
              <p className="text-sm text-gray-400 text-center py-10">
                Your order history will appear here.
              </p>
            )}

            {tab === "payments" && (
              <p className="text-sm text-gray-400 text-center py-10">
                Your saved payment methods will appear here.
              </p>
            )}
          </div>

          {/* Link to account/support menu */}
          <div className="px-6 pb-8">
            <button
              onClick={() => setScreen("account")}
              className="w-full text-sm font-medium text-center py-3 rounded-2xl border border-gray-200 text-gray-700"
            >
              Account and support settings
            </button>
          </div>
        </>
      ) : (
        <div className="px-6 pt-8 pb-8">
          <button
            onClick={() => setScreen("profile")}
            className="text-sm text-gray-500 mb-6"
          >
            ← Back to profile
          </button>

          <h2 className="text-gray-400 text-sm font-medium tracking-wide mb-3">
            ACCOUNT
          </h2>
          {accountItems.map((item) => (
            <MenuRow key={item.title} {...item} />
          ))}

          <h2 className="text-gray-400 text-sm font-medium tracking-wide mt-6 mb-3">
            SUPPORT
          </h2>
          {supportItems.map((item) => (
            <MenuRow key={item.title} {...item} />
          ))}

          <div className="mt-6">
            <MenuRow icon={LogOut} title="Logout" danger onClick={handleLogout} />
          </div>
        </div>
      )}
    </div>
  );
}