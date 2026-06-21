import React,{useState,useContext} from "react";
import {AdminContext} from "../context/AdminContext";
import {toast} from "react-toastify";


const AddProduct=()=>{


const {addProduct}=useContext(AdminContext);



const [image,setImage]=useState([]);


const [form,setForm]=useState({

name:"",
description:"",
price:"",
category:"",
sizes:[]

});




const changeHandler=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};





const submitHandler=async(e)=>{


e.preventDefault();



const data = new FormData();



data.append("name",form.name);
data.append("description",form.description);
data.append("price",form.price);
data.append("category",form.category);


form.sizes.forEach(size=>{
data.append("sizes",size);
});



for(let i=0;i<image.length;i++){

data.append("image",image[i]);

}




const res = await addProduct(data);



if(res?.success){

toast.success("Product Added");


setForm({

name:"",
description:"",
price:"",
category:"",
sizes:[]

});

setImage([]);

}

};



return(


<form

onSubmit={submitHandler}

className="
max-w-3xl
bg-[#FFFBF5]
border
border-[#C9A227]/40
p-6
md:p-10
rounded-xl
"

>


<h1 className="text-3xl text-[#7A1E2C] mb-8">
Add Product
</h1>



<input
name="name"
value={form.name}
onChange={changeHandler}
placeholder="Product Name"
className="input"
/>



<textarea

name="description"

value={form.description}

onChange={changeHandler}

placeholder="Description"

className="input"

/>



<input

name="price"

value={form.price}

onChange={changeHandler}

placeholder="Price"

className="input"

/>



<input

name="category"

value={form.category}

onChange={changeHandler}

placeholder="Category"

className="input"

/>



<input

type="file"

multiple

onChange={(e)=>setImage(e.target.files)}

className="mt-4"

/>



<button

className="
mt-8
bg-[#7A1E2C]
text-white
px-10
py-3
rounded
"

>

ADD PRODUCT

</button>


</form>


)

}


export default AddProduct;