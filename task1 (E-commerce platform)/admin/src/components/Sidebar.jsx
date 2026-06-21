import React from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";


const Sidebar = ({open,setOpen}) => {


const menu=[

{
name:"Dashboard",
path:"/dashboard"
},

{
name:"Add Product",
path:"/add"
},

{
name:"Products",
path:"/products"
},

{
name:"Orders",
path:"/orders"
}

]


return (


<>


{/* MOBILE OVERLAY */}

{
open &&
<div

onClick={()=>setOpen(false)}

className="
fixed
inset-0
bg-black/40
z-40
md:hidden
"

/>
}



<aside


className={`
fixed
md:static
top-0
left-0
z-50

h-full
md:h-auto

w-64

bg-[#FFFBF5]

border-r
border-[#C9A227]/40

p-6

transition-transform

${open
?
"translate-x-0"
:
"-translate-x-full md:translate-x-0"
}

`}

>


<div className="flex justify-between items-center mb-10">


<h2

className="
text-xl
font-semibold
text-[#3A2D28]
"

>
MENU
</h2>


<button
onClick={()=>setOpen(false)}
className="md:hidden text-[#7A1E2C]"
>
<X/>
</button>


</div>



<div className="flex flex-col gap-3">


{

menu.map((item,index)=>(


<NavLink

key={index}

to={item.path}

onClick={()=>setOpen(false)}

className={({isActive})=>

`
px-5
py-3
rounded-lg
transition
font-medium

${
isActive

?

"bg-[#7A1E2C] text-white shadow"

:

"text-[#8B7355] hover:bg-[#E8D8B5]/40"

}

`

}

>

{item.name}

</NavLink>


))

}


</div>


</aside>


</>


)

}

export default Sidebar;