import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
    return (
        <div className="flex flex-col sm:flex-row border border-[#E2C76B] bg-[#FFFBF5] sm:h-[450px] font-cinzel">

            {/* Hero Left Side */}
            <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
                <div className="text-[#3A2D28]">

                    <div className="flex items-center gap-2">
                        <p className="w-8 md:w-11 h-[2px] bg-[#C9A227]"></p>

                        <p className="font-medium text-sm md:text-base tracking-wider text-[#7A1E2C]">
                            OUR BESTSELLERS
                        </p>
                    </div>

                    <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed text-[#3A2D28]">
                        Latest Arrivals
                    </h1>

                    <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm md:text-base text-[#7A1E2C]">
                            SHOP NOW
                        </p>

                        <p className="w-8 md:w-11 h-[1px] bg-[#C9A227]"></p>
                    </div>

                </div>
            </div>

            {/* Hero Right Side */}
                <img
        className="w-full sm:w-1/2 object-cover"
        src={assets.hero_img}
        alt="hero image"
    />

        </div>
    );
};

export default Hero;