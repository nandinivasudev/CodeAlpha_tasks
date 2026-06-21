import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";


const Navbar = ({setOpen}) => {


return (

<nav
className="
h-20
w-full
flex
items-center
justify-between
px-5
md:px-10
bg-[#FFFBF5]
border-b
border-[#C9A227]/40
sticky
top-0
z-50
"
>


{/* MOBILE MENU */}

<button
onClick={()=>setOpen(true)}
className="
md:hidden
text-[#7A1E2C]
"
>
<Menu size={28}/>
</button>



{/* LOGO */}

<div className="flex items-center gap-4">


<img

src={logo}

alt="Miraya"

className="
w-24
md:w-32
object-contain
"

/>


<div className="hidden md:block">

<p
className="
text-[#3A2D28]
font-semibold
tracking-wide
"
>
Admin Panel
</p>

<p
className="
text-xs
text-[#8B7355]
"
>
Royal Collection
</p>


</div>


</div>



<button

className="
border
border-[#7A1E2C]
text-[#7A1E2C]
px-4
md:px-6
py-2
rounded
text-sm
hover:bg-[#7A1E2C]
hover:text-white
transition
"

>

Logout

</button>


</nav>

)

}

export default Navbar;