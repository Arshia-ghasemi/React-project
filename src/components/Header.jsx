import {IoLocationSharp} from "react-icons/io5";
import {MdEmail} from "react-icons/md";
import {FaTwitter} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {BiLogoPinterestAlt} from "react-icons/bi";
import {IoLogoInstagram} from "react-icons/io5";
import {PiLineVerticalThin} from "react-icons/pi";
import {IoSearchOutline} from "react-icons/io5";
import {HiOutlineShoppingCart} from "react-icons/hi";


export default function Header() {
    return <section className="header">
        <div className="hidden lg:flex bg-green-500 py-2 px-52 items-center justify-between ">
            <div className="flex items-center gap-6">
                <span className="flex items-center gap-2 text-white text-xs"><IoLocationSharp className="text-white"/> 88 Road Broklyn Golden street.New York</span>
                <span className="text-white flex items-center gap-2 text-xs"><MdEmail/> support@agrios.com</span>
            </div>
            <div className="flex items-center gap-4 text-white text-xs">
                <a href=""><FaTwitter/></a>
                <a href=""><FaFacebook/></a>
                <a href=""><BiLogoPinterestAlt/></a>
                <a href=""><IoLogoInstagram/></a>
            </div>
        </div>
        <div className="flex items-center justify-between px-4 py-4 gap-4 text-white text-xs lg:px-52 ">
            <a data-aos="flip-right" href=""><img src="../.././images/Logo.png" alt=""/></a>
            <div className="flex items-center gap-5 lg:hidden">
                <a data-aos="flip-left" data-aos-duration="1500" href=""><IoSearchOutline
                    className="text-black text-3xl"/></a>
                <a data-aos="flip-right" data-aos-duration="1500" href=""><HiOutlineShoppingCart
                    className="text-black text-3xl"/></a>
            </div>
            <nav className="hidden lg:flex">
                <ul className="flex items-center gap-6">
                    <li><a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"
                           className="text-gray-500 font-bold transition-all hover:text-black " href="/">Home</a></li>
                    <li><a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1700" className="text-gray-500 font-bold transition-all hover:text-black " href="/about">About</a></li>
                    <li><a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1900" className="text-gray-500 font-bold transition-all hover:text-black " href="/services">Services</a>
                    </li>
                    <li><a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2100" className="text-gray-500 font-bold transition-all hover:text-black " href="/projects">Projects</a>
                    </li>
                    <li><a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2300" className="text-gray-500 font-bold transition-all hover:text-black " href="/news">News</a></li>
                    <li><a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2500" className="text-gray-500 font-bold transition-all hover:text-black " href="">Shop</a></li>
                    <li><a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2700" className="text-gray-500 font-bold transition-all hover:text-black " href="">Contact</a></li>
                </ul>
                <PiLineVerticalThin className="text-gray-500 text-3xl opacity-50"/>
                <div className="flex items-center gap-5">
                    <a data-aos="flip-left" data-aos-duration="1500" href=""><IoSearchOutline className="text-black text-3xl"/></a>
                    <a data-aos="flip-right" data-aos-duration="1500" href=""><HiOutlineShoppingCart className="text-black text-3xl"/></a>
                </div>
            </nav>
        </div>
    </section>;
}