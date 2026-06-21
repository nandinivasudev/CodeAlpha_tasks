
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ShopContextProvider from './context/ShopContext.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <ShopContextProvider>
      <App 
      
      />
    </ShopContextProvider>
      
    </BrowserRouter>,
  
)