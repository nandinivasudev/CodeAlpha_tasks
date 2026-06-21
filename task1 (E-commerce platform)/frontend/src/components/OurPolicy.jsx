import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-6 text-center py-20 px-4">

            <div>
                <img
                    src={assets.exchange_icon}
                    className="w-12 m-auto mb-5"
                    alt="exchange"
                />
                <p className="font-semibold text-[#3A2D28]">
                    Easy Exchange Policy
                </p>
                <p className="text-[#8B7355] mt-2">
                    We offer hassle-free exchanges for your convenience.
                </p>
            </div>

            <div>
                <img
                    src={assets.quality_icon}
                    className="w-12 m-auto mb-5"
                    alt="quality"
                />
                <p className="font-semibold text-[#3A2D28]">
                    Premium Craftsmanship
                </p>
                <p className="text-[#8B7355] mt-2">
                    Every piece is crafted with exceptional attention to detail.
                </p>
            </div>

            <div>
                <img
                    src={assets.support_img}
                    className="w-12 m-auto mb-5"
                    alt="support"
                />
                <p className="font-semibold text-[#3A2D28]">
                    Dedicated Support
                </p>
                <p className="text-[#8B7355] mt-2">
                    Our team is here to assist you every step of the way.
                </p>
            </div>

        </div>
    );
};

export default OurPolicy;