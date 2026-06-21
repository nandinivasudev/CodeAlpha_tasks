import { createContext, useState , useEffect} from "react";
import{products} from "../assets/assets";
import { toast } from "react-toastify";


export const ShopContext = createContext();




const ShopContextProvider=(props)=>{


    const currency = '₹';
    const delivery_fee = 100;
    const[search,setSearch]=useState("");
    const[showSearch , setShowSearch]= useState(false)
    const [cartItems,setCarItems] = useState({});
    const [orders, setOrders] = useState([]);
    



  

    const addToCart = (itemId, size) => {

        if (!size) {
            toast.error("Please select a size");
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCarItems(cartData);

        toast.success("Added to cart");
    };
    useEffect(() => {
      
    
    }, [cartItems])

    const getCartCount = () => {
    let totalCount = 0;

    for (const items in cartItems) {
        for (const size in cartItems[items]) {
            try {
                if (cartItems[items][size] > 0) {
                    totalCount += cartItems[items][size];
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    return totalCount;
};

    const buyNow = (itemId, size) => {

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
        if (cartData[itemId][size]) {
            cartData[itemId][size] += 1;
        } else {
            cartData[itemId][size] = 1;
        }
    } else {
        cartData[itemId] = {};
        cartData[itemId][size] = 1;
    }

    setCarItems(cartData);

    return true;
};

const updateQuantity = (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    if (quantity === 0) {
        delete cartData[itemId][size];

        if (Object.keys(cartData[itemId]).length === 0) {
            delete cartData[itemId];
        }
    } else {
        cartData[itemId][size] = quantity;
    }

    setCarItems(cartData);
};
const getCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartItems) {

        const itemInfo = products.find(
            (product) => product._id === itemId
        );

        if (!itemInfo) continue;

        for (const size in cartItems[itemId]) {

            if (cartItems[itemId][size] > 0) {

                totalAmount +=
                    itemInfo.price * cartItems[itemId][size];

            }
        }
    }

    return totalAmount;
};

const placeOrder = () => {
  const orderItems = [];

  for (const itemId in cartItems) {
    const product = products.find((p) => p._id === itemId);

    if (product) {
      orderItems.push(product);
    }
  }

  setOrders(orderItems);
  setCarItems({});
};
    

    const value={
        products , currency , delivery_fee , search , setSearch , showSearch , setShowSearch , cartItems ,addToCart , buyNow , getCartCount , updateQuantity , getCartAmount , orders,
  placeOrder
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;