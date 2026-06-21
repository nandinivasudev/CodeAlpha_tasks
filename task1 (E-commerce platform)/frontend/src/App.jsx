import React from "react"
import{ Routes,Route} from 'react-router-dom'
import Home from "./pages/home"
import Collection from "./pages/collection"
import About from "./pages/about"
import Cart from "./pages/cart"
import Login from "./pages/login"
import Order from "./pages/order"
import PlaceOrder from "./pages/placeOrder"
import Product from "./pages/product"
import Contact from "./pages/contact"
import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import SearchBar from "./components/SearchBar"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App(){
  return(
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/collection" element={<Collection/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/placeOrder" element={<PlaceOrder/>}/>
          <Route path="/product/:productId" element={<Product/>}/>
      </Routes>
      <Footer />

    </div>
  )
}

export default App
