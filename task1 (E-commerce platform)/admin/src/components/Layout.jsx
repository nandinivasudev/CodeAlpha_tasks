import React,{useState} from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";


const Layout = ({children})=>{


const [open,setOpen]=useState(false);



return (

<div

className="
min-h-screen
bg-[#FFFBF5]
"

>


<Navbar setOpen={setOpen}/>


<div className="flex">


<Sidebar

open={open}

setOpen={setOpen}

/>



<main

className="
flex-1
p-5
md:p-10
overflow-x-hidden
"

>


{children}


</main>


</div>


</div>


)

}


export default Layout;