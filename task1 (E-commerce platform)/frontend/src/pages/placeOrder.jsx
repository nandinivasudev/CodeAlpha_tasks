import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { currency, delivery_fee, getCartAmount, placeOrder } =
    useContext(ShopContext);

  const [method, setMethod] = useState("razorpay");
  const navigate = useNavigate();

  return (
    <div className="border-t border-[#C9A227]/30 pt-10 min-h-[80vh]">

      <div className="flex flex-col lg:flex-row gap-16">

        {/* LEFT SIDE */}

        <div className="flex flex-col gap-4 w-full lg:max-w-[550px]">

          <div className="text-2xl mb-4 font-cinzel">
            <span className="text-[#8B7355]">DELIVERY </span>
            <span className="text-[#3A2D28] font-semibold">
              INFORMATION
            </span>
          </div>

          <div className="flex gap-3">
            <input
              className="border border-[#E8D8B5] rounded px-4 py-3 w-full outline-none focus:border-[#C9A227]"
              type="text"
              placeholder="First Name"
            />
            <input
              className="border border-[#E8D8B5] rounded px-4 py-3 w-full outline-none focus:border-[#C9A227]"
              type="text"
              placeholder="Last Name"
            />
          </div>

          <input
            className="border border-[#E8D8B5] rounded px-4 py-3 outline-none focus:border-[#C9A227]"
            type="email"
            placeholder="Email Address"
          />

          <input
            className="border border-[#E8D8B5] rounded px-4 py-3 outline-none focus:border-[#C9A227]"
            type="text"
            placeholder="Street Address"
          />

          <div className="flex gap-3">
            <input
              className="border border-[#E8D8B5] rounded px-4 py-3 w-full outline-none focus:border-[#C9A227]"
              type="text"
              placeholder="City"
            />
            <input
              className="border border-[#E8D8B5] rounded px-4 py-3 w-full outline-none focus:border-[#C9A227]"
              type="text"
              placeholder="State"
            />
          </div>

          <div className="flex gap-3">
            <input
              className="border border-[#E8D8B5] rounded px-4 py-3 w-full outline-none focus:border-[#C9A227]"
              type="text"
              placeholder="Pincode"
            />
            <input
              className="border border-[#E8D8B5] rounded px-4 py-3 w-full outline-none focus:border-[#C9A227]"
              type="text"
              placeholder="Country"
            />
          </div>

          <input
            className="border border-[#E8D8B5] rounded px-4 py-3 outline-none focus:border-[#C9A227]"
            type="text"
            placeholder="Phone Number"
          />
        </div>

        {/* RIGHT SIDE */}

        <div className="flex-1">

          {/* CART TOTAL */}

          <div className="text-2xl mb-6 font-cinzel">
            <span className="text-[#8B7355]">CART </span>
            <span className="text-[#3A2D28] font-semibold">
              TOTALS
            </span>
          </div>

          <div className="border border-[#E8D8B5] rounded-lg p-6 bg-[#FFFBF5]">

            <div className="flex justify-between py-3 border-b border-[#E8D8B5]">
              <p className="text-[#3A2D28]">Subtotal</p>
              <p className="font-medium text-[#3A2D28]">
                {currency}
                {getCartAmount()}
              </p>
            </div>

            <div className="flex justify-between py-3 border-b border-[#E8D8B5]">
              <p className="text-[#3A2D28]">Shipping Fee</p>
              <p className="font-medium text-[#3A2D28]">
                {currency}
                {delivery_fee}
              </p>
            </div>

            <div className="flex justify-between py-4 text-lg font-semibold">
              <p className="text-[#7A1E2C]">Total</p>
              <p className="text-[#7A1E2C]">
                {currency}
                {getCartAmount() + delivery_fee}
              </p>
            </div>

          </div>

          {/* PAYMENT METHOD */}

          <div className="mt-10">

            <div className="text-xl mb-5 font-cinzel">
              <span className="text-[#8B7355]">PAYMENT </span>
              <span className="text-[#3A2D28] font-semibold">
                METHOD
              </span>
            </div>

            <div className="flex flex-col gap-3">

              {/* Razorpay */}

              <div
                onClick={() => setMethod("razorpay")}
                className={`border p-4 rounded cursor-pointer flex items-center gap-4 transition ${
                  method === "razorpay"
                    ? "border-[#C9A227] bg-[#FFFBF5]"
                    : "border-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full border border-[#C9A227] ${
                    method === "razorpay"
                      ? "bg-[#C9A227]"
                      : ""
                  }`}
                ></div>

                <img
                  src={assets.razorpay_logo}
                  alt="Razorpay"
                  className="h-6 object-contain"
                />
              </div>

              {/* COD */}

              <div
                onClick={() => setMethod("cod")}
                className={`border p-4 rounded cursor-pointer flex items-center gap-4 transition ${
                  method === "cod"
                    ? "border-[#C9A227] bg-[#FFFBF5]"
                    : "border-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full border border-[#C9A227] ${
                    method === "cod"
                      ? "bg-[#C9A227]"
                      : ""
                  }`}
                ></div>

                <p className="font-medium text-[#3A2D28]">
                  Cash On Delivery
                </p>
              </div>

            </div>

            {/* PLACE ORDER BUTTON */}

            <button
             onClick={() => {
                 placeOrder();
                  navigate("/order")}}
              className="
              mt-8
              w-full sm:w-auto
              bg-[#7A1E2C]
              text-white
              px-10
              py-3
              rounded
              hover:bg-[#611626]
              transition
              "
            >
              PLACE ORDER
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default PlaceOrder;