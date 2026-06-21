import React from "react";

const Title =({text1,text2})=>{
    return(
        <div className=" font-cinzel inline-flex gap-2 items-center mb-3">
    <p className="text-[#8B7355]">
        {text1}
        <span className="text-[#3A2D28] font-medium">
            {text2}
        </span>
    </p>

    <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#C9A227]"></p>
</div>
    )
}
export default Title