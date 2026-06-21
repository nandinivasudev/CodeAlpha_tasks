import React from "react";

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className="text-center py-16 bg-[#FFFBF5]">

            <p className="font-cinzel text-2xl md:text-3xl text-[#3A2D28]">
                Join the MIRĀYA Circle
            </p>

            <p className="text-[#8B7355] mt-3 max-w-2xl mx-auto text-sm md:text-base">
                Be the first to discover new collections, exclusive offers,
                and timeless pieces inspired by India's royal heritage.
            </p>

            <form
                onSubmit={onSubmitHandler}
                className="w-full sm:w-2/3 md:w-1/2 flex items-center mx-auto my-8 border border-[#C9A227] bg-white"
            >
                <input
                    className="w-full flex-1 outline-none px-4 py-4 text-[#3A2D28] placeholder:text-[#8B7355]"
                    type="email"
                    placeholder="Enter your Email"
                    required
                />

                <button
                    type="submit"
                    className="bg-[#7A1E2C] hover:bg-[#5F1722] text-white text-xs md:text-sm px-8 py-4 tracking-wider transition-all"
                >
                    SUBSCRIBE
                </button>
            </form>

        </div>
    )
}

export default NewsletterBox;