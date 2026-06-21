import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
    return (
        <div className="mt-40 border-t border-[#C9A227]">

            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">

                <div>
                    <img
                        src={assets.logo}
                        className="mb-5 w-40"
                        alt="Miraya Logo"
                    />

                    <p className="w-full md:w-2/3 text-[#8B7355] leading-6">
                        MIRĀYA celebrates the timeless beauty of Indian fashion,
                        bringing together exquisite ethnic wear and handcrafted
                        jewelry inspired by royal heritage and modern elegance.
                    </p>
                </div>

                <div>
                    <p className="text-xl font-medium mb-5 text-[#3A2D28] font-cinzel">
                        COMPANY
                    </p>

                    <ul className="flex flex-col gap-2 text-[#8B7355]">
                        <li className="hover:text-[#7A1E2C] cursor-pointer">Home</li>
                        <li className="hover:text-[#7A1E2C] cursor-pointer">About Us</li>
                        <li className="hover:text-[#7A1E2C] cursor-pointer">Delivery</li>
                        <li className="hover:text-[#7A1E2C] cursor-pointer">Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className="text-xl font-medium mb-5 text-[#3A2D28] font-cinzel">
                        GET IN TOUCH
                    </p>

                    <ul className="flex flex-col gap-2 text-[#8B7355]">
                        <li>+91 98765 43210</li>
                        <li>hello@miraya.in</li>
                    </ul>
                </div>

            </div>

            <div>
                <hr className="border-[#C9A227]" />

                <p className="py-5 text-sm text-center text-[#8B7355]">
                    © 2026 MIRĀYA. All Rights Reserved.
                </p>
            </div>

        </div>
    );
};

export default Footer;