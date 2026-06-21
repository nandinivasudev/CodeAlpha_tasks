import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Product = () => {
    const { productId } = useParams();
    const { products, currency,addToCart , buyNow } = useContext(ShopContext);

    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState("");
    const [size, setSize] = useState("");
    const navigate = useNavigate();


    const fetchProductData = () => {
        products.forEach((item) => {
            if (item._id === productId) {
                setProductData(item);
                setImage(item.image[0]);
            }
        });
    };
    
    

    const handleBuyNow = () => {

        if (
            productData.category === "Women Ethnic Wear" &&
            !size
        ) {
            toast.error("Please select a size");
            return;
        }

        buyNow(
            productData._id,
            productData.category === "Women Ethnic Wear"
                ? size
                : "Default"
        );

        navigate("/cart");
    };

useEffect(() => {
    fetchProductData();
}, [productId, products]);


   
    

    return productData ? (
        <div className="border-t border-[#C9A227]/30 pt-10">

            <div className="flex flex-col lg:flex-row gap-10">

                {/* PRODUCT IMAGES */}

                <div className="flex-1 flex flex-col-reverse sm:flex-row gap-4">

                    <div className="hidden sm:flex sm:flex-col gap-3 overflow-y-auto sm:w-[18%]">

                        {productData.image.map((item, index) => (
                            <img
                                key={index}
                                onClick={() => setImage(item)}
                                src={item}
                                alt=""
                                className={`cursor-pointer rounded border ${
                                    image === item
                                        ? "border-[#C9A227]"
                                        : "border-[#E8D8B5]"
                                }`}
                            />
                        ))}

                    </div>

                    <div className="w-full sm:w-[82%]">
                        <img
                            className="w-full rounded-lg"
                            src={image}
                            alt={productData.name}
                        />
                    </div>

                </div>

                {/* PRODUCT INFO */}

                <div className="flex-1">

                    <h1 className="font-cinzel text-3xl text-[#3A2D28]">
                        {productData.name}
                    </h1>

                    {/* Rating */}

                    <div className="flex items-center gap-1 mt-3">

                        <img src={assets.star_icon} alt="" className="w-4" />
                        <img src={assets.star_icon} alt="" className="w-4" />
                        <img src={assets.star_icon} alt="" className="w-4" />
                        <img src={assets.star_icon} alt="" className="w-4" />
                        <img src={assets.star_icon} alt="" className="w-4" />

                        <p className="pl-2 text-[#8B7355] text-sm">
                            (122 Reviews)
                        </p>

                    </div>

                    {/* Price */}

                    <p className="mt-5 text-3xl font-semibold text-[#7A1E2C]">
                        {currency}
                        {productData.price.toLocaleString()}
                    </p>

                    {/* Description */}

                    <p className="mt-5 text-[#8B7355] leading-relaxed md:w-4/5">
                        {productData.description}
                    </p>

                    {/* SIZE ONLY FOR WOMEN ETHNIC WEAR */}

                    {productData.category === "Women Ethnic Wear" && (

                        <div className="flex flex-col gap-4 my-8">

                            <p className="font-medium text-[#3A2D28]">
                                Select Size
                            </p>

                            <div className="flex gap-3 flex-wrap">

                                {productData.sizes.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSize(item)}
                                        className={`border py-2 px-4 transition ${
                                            item === size
                                                ? "bg-[#7A1E2C] text-white border-[#7A1E2C]"
                                                : "border-[#C9A227] text-[#3A2D28] hover:bg-[#C9A227] hover:text-white"
                                        }`}
                                    >
                                        {item}
                                    </button>
                                ))}

                            </div>

                        </div>

                    )}

                    {/* BUTTONS */}

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">

                                                    <button
                                onClick={() =>
                                    addToCart(
                                        productData._id,
                                        productData.category === "Women Ethnic Wear"
                                            ? size
                                            : "Default"
                                    )
                                }
                                className="
                                bg-[#7A1E2C]
                                text-white
                                px-8
                                py-3
                                rounded
                                hover:bg-[#611626]
                                transition
                                "
                            >
                                ADD TO CART
                            </button>

                        <button
                            onClick={handleBuyNow}

                            className="
                            border
                            border-[#C9A227]
                            text-[#C9A227]
                            px-8
                            py-3
                            rounded
                            hover:bg-[#C9A227]
                            hover:text-white
                            transition
                            "
                        >
                            BUY NOW
                        </button>

                    </div>

                    {/* FEATURES */}

                    <div className="mt-10 flex flex-col gap-3 text-sm text-[#8B7355] border-t border-[#E8D8B5] pt-6">

                        <p>✓ 100% Authentic Miraya Design</p>
                        <p>✓ Free Shipping Across India</p>
                        <p>✓ Easy Exchange Available</p>
                        <p>✓ Secure Payments</p>

                    </div>

                </div>

            </div>

        </div>
    ) : (
        <div className="opacity-0"></div>
    );
};

export default Product;