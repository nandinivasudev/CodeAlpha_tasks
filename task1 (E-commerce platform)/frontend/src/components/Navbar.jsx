import React,{useContext, useState} from "react"
import { assets } from "../assets/assets"
import { Link, NavLink } from "react-router-dom"
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const{setShowSearch}=useContext(ShopContext);
    const { getCartCount } = useContext(ShopContext);
     const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between py-0 font-medium">
            <Link to='/'><img src={assets.logo} className="w-40 md:w-52" alt="logo" /></Link>

            <ul className="hidden sm:flex gap-10 text-sm text-[#3A2D28]">
                <NavLink to="/" className="flex flex-col items-center gap-1">
                    <p>HOME</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-[#C9A227] hidden" />
                </NavLink>

                <NavLink to="/collection" className="flex flex-col items-center gap-1">
                    <p>COLLECTION</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-[#C9A227] hidden" />
                </NavLink>

                <NavLink to="/about" className="flex flex-col items-center gap-1">
                    <p>ABOUT</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-[#C9A227] hidden" />
                </NavLink>

                <NavLink to="/contact" className="flex flex-col items-center gap-1">
                    <p>CONTACT</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-[#C9A227] hidden" />
                </NavLink>
            </ul>

            <div className="flex items-center gap-6">
                <img
                    onClick={()=>setShowSearch(true)}
                    src={assets.search_icon}
                    className="w-7 cursor-pointer"
                    alt="search_icon"
                />

                <div className="group relative">
                    <img
                        onClick={() => navigate("/login")}
                        className="w-7 cursor-pointer"
                        src={assets.profile_icon}
                        alt="profile"
                    />

                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-[#F3E8D8] text-[#3A2D28] rounded">
                            <p className="cursor-pointer hover:text-[#7A1E2C]">
                                My Profile
                            </p>
                            <p className="cursor-pointer hover:text-[#7A1E2C]">
                                Orders
                            </p>
                            <p className="cursor-pointer hover:text-[#7A1E2C]">
                                Logout
                            </p>
                        </div>
                    </div>
                </div>

                <Link to="/cart" className="relative">
                    <img src={assets.cart_icon} className="w-7 min-w-7" />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-[#7A1E2C] text-[#FFFBF5] aspect-square rounded-full text-[8px]"> {getCartCount()}</p>
                </Link>

                <img
                    onClick={() => setVisible(true)}
                    src={assets.menu_icon}
                    className="w-5 cursor-pointer sm:hidden"
                    alt="menu_icon"
                />
            </div>

            {/* sidebar menu for small screen */}
            <div className={`fixed top-0 right-0 bottom-0 z-50 overflow-hidden bg-[#FFFBF5] transition-all duration-300 sm:hidden ${
                       visible ? "w-full" : "w-0"}`}>
                <div className="flex flex-col text-[#3A2D28]">
                    <div
                        onClick={() => setVisible(false)}
                        className="flex items-center gap-4 p-3 cursor-pointer"
                    >
                        <img
                            className="h-4 rotate-180"
                            src={assets.dropdown_icon}
                            alt=""
                        />
                        <p>Back</p>
                    </div>

                    <NavLink
                        onClick={() => setVisible(false)}
                        className="py-2 pl-6 border border-[#E2C76B]"
                        to="/"
                    >
                        HOME
                    </NavLink>

                    <NavLink
                        onClick={() => setVisible(false)}
                        className="py-2 pl-6 border border-[#E2C76B]"
                        to="/collection"
                    >
                        COLLECTION
                    </NavLink>

                    <NavLink
                        onClick={() => setVisible(false)}
                        className="py-2 pl-6 border border-[#E2C76B]"
                        to="/about"
                    >
                        ABOUT
                    </NavLink>

                    <NavLink
                        onClick={() => setVisible(false)}
                        className="py-2 pl-6 border border-[#E2C76B]"
                        to="/contact"
                    >
                        CONTACT
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;