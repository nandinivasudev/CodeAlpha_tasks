import React, {useState,useContext} from "react";
import {AdminContext} from "../context/AdminContext";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";


const Login =()=>{


const {login}=useContext(AdminContext);

const navigate=useNavigate();


const [email,setEmail]=useState("");
const [password,setPassword]=useState("");



const submitHandler=async(e)=>{

e.preventDefault();


const success = await login(
email,
password
);


if(success){

toast.success("Welcome Admin ✨");

navigate("/dashboard");

}

else{

toast.error("Invalid Credentials");

}

}



return (

<div

className="
min-h-screen
flex
items-center
justify-center
bg-[#FFFBF5]
px-5
"

>


<form

onSubmit={submitHandler}

className="
w-full
max-w-md
bg-white
border
border-[#C9A227]/40
rounded-2xl
p-8
shadow-lg
"

>


<h1

className="
text-4xl
text-center
font-semibold
text-[#7A1E2C]
mb-2
"

>

MIRAYA

</h1>



<p
className="
text-center
text-[#8B7355]
mb-8
"
>

Admin Login

</p>




<input

required

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="
input
"

/>



<input

required

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="
input
"

/>




<button

className="
w-full
bg-[#7A1E2C]
text-white
py-3
rounded-lg
hover:bg-[#611626]
transition
"

>

LOGIN

</button>



</form>


</div>

)

}


export default Login;