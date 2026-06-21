import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);

    return (
        <Link
            className="text-[#3A2D28] cursor-pointer"
            to={`/product/${id}`}
        >
            <div className="aspect-[3/4] overflow-hidden rounded-md">
            <img
            className="w-full h-full object-cover hover:scale-110 transition duration-300"
            src={image[0]}
            alt={name}
                />
                </div>

            <p className="pt-3 pb-1 text-sm font-medium text-[#3A2D28]">
                {name}
            </p>

            <p className="text-sm font-semibold text-[#7A1E2C]">
                {currency}{price}
            </p>
        </Link>
    );
};

export default ProductItem;