import React,{useContext,useEffect} from "react";
import {AdminContext} from "../context/AdminContext";


const ListProduct=()=>{


const {

products,
getProducts,
deleteProduct

}=useContext(AdminContext);



useEffect(()=>{

getProducts();

},[]);



return(

<div>


<h1 className="text-3xl text-[#7A1E2C] mb-8">
Products
</h1>




<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
">


{

products.map(item=>(


<div

key={item._id}

className="
bg-[#FFFBF5]
border
border-[#C9A227]/40
rounded-xl
p-4
"

>


<img

src={item.image[0]}

className="
h-48
w-full
object-cover
rounded
"

/>



<h2 className="mt-3 text-[#3A2D28]">

{item.name}

</h2>


<p className="text-[#7A1E2C]">

₹{item.price}

</p>



<button

onClick={()=>deleteProduct(item._id)}

className="
mt-3
text-red-600
"

>

Delete

</button>



</div>


))

}


</div>


</div>


)

}


export default ListProduct;