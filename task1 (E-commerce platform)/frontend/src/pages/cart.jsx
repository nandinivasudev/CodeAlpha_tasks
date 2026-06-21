import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";



const Cart = () => {
    const {
        products,
        currency,
        cartItems,
        updateQuantity,
        getCartAmount
    } = useContext(ShopContext);
    const navigate = useNavigate();

    return (
        <div className="border-t border-[#C9A227]/30 pt-10 min-h-screen">

            {/* TITLE */}

            <div className="mb-8">
                <Title text1={"YOUR"} text2={" CART"} />
            </div>

            {/* CART ITEMS */}

            <div>

                {products.map((item) => {

                    if (!cartItems[item._id]) return null;

                    return Object.keys(cartItems[item._id]).map((size) => {

                        const quantity = cartItems[item._id][size];

                        return (
                            <div
                                key={`${item._id}-${size}`}
                                className="py-6 border-t border-b border-[#E8D8B5] text-[#3A2D28] grid grid-cols-[4fr_1fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
                            >

                                {/* PRODUCT INFO */}

                                <div className="flex items-start gap-6">

                                    <img
                                        src={item.image[0]}
                                        alt=""
                                        className="w-20 sm:w-28 rounded"
                                    />

                                    <div>

                                        <p className="font-medium text-lg">
                                            {item.name}
                                        </p>

                                        <div className="flex items-center gap-5 mt-3">

                                            <p className="text-[#7A1E2C] font-semibold">
                                                {currency}
                                                {item.price.toLocaleString()}
                                            </p>

                                            {size !== "Default" && (
                                                <span className="px-3 py-1 border border-[#C9A227]/40 bg-[#FFFBF5] text-sm">
                                                    {size}
                                                </span>
                                            )}

                                        </div>

                                    </div>

                                </div>

                                {/* QUANTITY */}

                                <input
                                    type="number"
                                    min={1}
                                    defaultValue={quantity}
                                    className="border border-[#C9A227]/30 max-w-20 px-3 py-2"
                                    onChange={(e) =>
                                        updateQuantity(
                                            item._id,
                                            size,
                                            Number(e.target.value)
                                        )
                                    }
                                />

                                {/* DELETE */}

                                <img
                                    src={assets.bin_icon}
                                    alt=""
                                    className="w-5 cursor-pointer"
                                    onClick={() =>
                                        updateQuantity(
                                            item._id,
                                            size,
                                            0
                                        )
                                    }
                                />

                            </div>
                        );
                    });
                })}

            </div>

            {/* CART TOTALS */}

            <div className="flex justify-end my-20">

                <div className="w-full sm:w-[450px]">

                    <div className="text-2xl">
                        <Title text1={"CART"} text2={" TOTALS"} />
                    </div>

                    <div className="flex flex-col gap-2 mt-6 text-sm">

                        <div className="flex justify-between border-b border-[#E8D8B5] pb-3">
                            <p>Subtotal</p>
                            <p>
                            {currency}
                            {getCartAmount().toLocaleString()}
                             </p>
                        </div>

                        <div className="flex justify-between border-b border-[#E8D8B5] pb-3">
                            <p>Shipping Fee</p>
                            <p>{currency}100</p>
                        </div>

                        <div className="flex justify-between pt-2 font-semibold text-[#7A1E2C]">
                            <p>Total</p>
                            <p>
                                {currency}
                                {(getCartAmount() + 100).toLocaleString()}
                            </p>
                        </div>

                    </div>

                    <div className="w-full text-end mt-8">

                       <button
                onClick={() => navigate("/placeOrder")}
                className="bg-[#7A1E2C] text-white px-8 py-3"
            >
                PROCEED TO CHECKOUT
            </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Cart;