import React, {createContext,useEffect,useState} from "react";
import axios from "axios";


export const AdminContext = createContext();


const AdminProvider = ({children})=>{


const backendUrl = "http://localhost:4000";


const [token,setToken]=useState(
localStorage.getItem("token") || ""
);


const [products,setProducts]=useState([]);



const login = async(email,password)=>{

try{

const res = await axios.post(
backendUrl+"/api/user/admin",
{
email,
password
}
);


if(res.data.success){

setToken(res.data.token);

localStorage.setItem(
"token",
res.data.token
);

return true;

}


return false;


}catch(err){

console.log(err);
return false;

}

};





const addProduct = async(formData)=>{


try{


const res = await axios.post(

backendUrl+"/api/product/add",

formData,

{
headers:{
token
}
}

);


return res.data;


}catch(error){

console.log(error);

}

};






const getProducts = async()=>{


try{


const res = await axios.get(
backendUrl+"/api/product/list"
);


if(res.data.success){

setProducts(res.data.products);

}


}catch(error){

console.log(error);

}

};







const deleteProduct = async(id)=>{


try{


await axios.post(

backendUrl+"/api/product/delete",

{
id
},

{
headers:{
token
}
}

);


await getProducts();


}catch(error){

console.log(error);

}


};





useEffect(()=>{

getProducts();

},[]);




const value={

backendUrl,

token,

setToken,

login,

products,

getProducts,

addProduct,

deleteProduct

}



return(

<AdminContext.Provider value={value}>

{children}

</AdminContext.Provider>

)


}


export default AdminProvider;