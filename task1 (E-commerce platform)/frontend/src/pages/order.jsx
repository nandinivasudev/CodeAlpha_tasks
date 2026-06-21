import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { orders, currency } = useContext(ShopContext);

  return (
    <div className="border-t border-[#C9A227]/30 pt-10 min-h-[70vh]">

      <div className="text-2xl mb-8">
        <Title text1={"MY"} text2={" ORDERS"} />
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-[#8B7355] text-lg">
            No orders placed yet.
          </p>
        </div>
      ) : (
        orders.map((item, index) => (
          <div
            key={index}
            className="py-6 border-t border-[#E8D8B5] flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <div className="flex items-start gap-6">

              <img
                src={item.image[0]}
                alt=""
                className="w-24 rounded"
              />

              <div>
                <p className="font-cinzel text-lg text-[#3A2D28]">
                  {item.name}
                </p>

                <p className="mt-2 text-[#7A1E2C] font-semibold">
                  {currency}
                  {item.price.toLocaleString()}
                </p>

                <p className="text-sm text-[#8B7355] mt-2">
                  Order Date: {new Date().toLocaleDateString()}
                </p>
              </div>

            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>

              <p className="text-[#3A2D28]">
                Ready to Ship
              </p>
            </div>

          </div>
        ))
      )}
    </div>
  );
};

export default Orders;