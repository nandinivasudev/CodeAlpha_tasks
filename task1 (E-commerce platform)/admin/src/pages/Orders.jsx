import React,{useEffect,useState,useContext} from "react";
import axios from "axios";
import {AdminContext} from "../context/AdminContext";


const Orders=()=>{


const {backendUrl,token}=useContext(AdminContext);


const [orders,setOrders]=useState([]);



const getOrders=async()=>{


try{


const res = await axios.get(

backendUrl+"/api/order/list",

{
headers:{
token
}
}

);


if(res.data.success){

setOrders(res.data.orders);

}


}catch(error){

console.log(error);

}


}




useEffect(()=>{

getOrders();

},[]);



return (

<div>


<h1

className="
text-3xl
md:text-5xl
text-[#7A1E2C]
mb-10
"

>

Orders

</h1>



<div className="
flex
flex-col
gap-5
">


{

orders.length===0 ?

<p className="text-[#8B7355]">
No orders yet
</p>


:


orders.map((order,index)=>(


<div

key={index}

className="
bg-[#FFFBF5]
border
border-[#C9A227]/40
rounded-xl
p-5
grid
md:grid-cols-4
gap-4
"


>



<div>

<p className="text-[#8B7355]">
Customer
</p>

<p className="font-medium">
{order.address?.firstName}
</p>

</div>




<div>

<p className="text-[#8B7355]">
Amount
</p>

<p className="text-[#7A1E2C]">
₹{order.amount}
</p>

</div>



<div>

<p className="text-[#8B7355]">
Payment
</p>

<p>
{order.paymentMethod}
</p>

</div>



<div>

<select

className="
border
p-2
rounded
"

>

<option>
Processing
</option>

<option>
Shipped
</option>

<option>
Delivered
</option>


</select>

</div>



</div>


))

}



</div>


</div>

)

}


export default Orders;