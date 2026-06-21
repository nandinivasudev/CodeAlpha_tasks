import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

    const [visible, setVisible] = useState(false);

    const location = useLocation();

    useEffect(() => {

        if (location.pathname.includes("collection") ) {
            setVisible(true);
        }
        else {
            setVisible(false);
        }

    }, [location, showSearch]);

    return showSearch && visible ? (

        <div className="border-t border-b border-[#C9A227]/30 bg-[#FFFBF5] text-center">

            <div className="inline-flex items-center justify-center border border-[#C9A227] px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">

                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 outline-none bg-inherit text-sm text-[#3A2D28] placeholder:text-[#8B7355]"
                    type="text"
                    placeholder="Search Miraya Collections..."
                />

                <img
                    className="w-4"
                    src={assets.search_icon}
                    alt="search"
                />

            </div>

            <img
                onClick={() => setShowSearch(false)}
                className="inline w-3 cursor-pointer mb-1"
                src={assets.cross_icon}
                alt="close"
            />

        </div>

    ) : null;
}

export default SearchBar;