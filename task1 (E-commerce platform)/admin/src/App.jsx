import React from "react";
import {Routes,Route} from "react-router-dom";


import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";


import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import ListProduct from "./pages/ListProduct";
import Orders from "./pages/Orders";



const App=()=>{


return (

<Routes>



<Route

path="/"

element={<Login/>}

/>



<Route

path="/dashboard"

element={

<ProtectedRoute>

<Layout>

<Dashboard/>

</Layout>

</ProtectedRoute>

}

/>



<Route

path="/add"

element={

<ProtectedRoute>

<Layout>

<AddProduct/>

</Layout>

</ProtectedRoute>

}

/>



<Route

path="/products"

element={

<ProtectedRoute>

<Layout>

<ListProduct/>

</Layout>

</ProtectedRoute>

}

/>



<Route

path="/orders"

element={

<ProtectedRoute>

<Layout>

<Orders/>

</Layout>

</ProtectedRoute>

}

/>



</Routes>

)

}



export default App;