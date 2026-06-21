import React,{useContext} from "react";
import {AdminContext} from "../context/AdminContext";


const Dashboard =()=>{


const {products}=useContext(AdminContext);



return (

<div>


<h1
className="
text-3xl md:text-5xl
font-semibold
text-[#7A1E2C]
"
>
Welcome Back 
</h1>



<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-6
mt-10
"
>



<div className="card">
<p>Products</p>
<h2>{products.length}</h2>
</div>



<div className="card">
<p>Orders</p>
<h2>0</h2>
</div>



<div className="card">
<p>Revenue</p>
<h2>₹0</h2>
</div>


</div>



</div>

)

}


export default Dashboard;