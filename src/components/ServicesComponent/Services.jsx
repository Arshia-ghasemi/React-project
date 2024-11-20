import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './../../App.css';
import ServicesMainBody from "@/components/ServicesComponent/ServicesMainBody.jsx";


export default function Services() {

    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    return <>
        <Header/>
        <section className="frame py-[120px] mb-[120px]">
            <div className="flex gap-3 justify-center items-center mb-4">
                <a className="gray" href="/">Home</a>
                <span className="gray">/</span>
                <a className="gray" href="/about">Services</a>
            </div>
            <a href="/about"><h1 className="text-center text-white font-bold text-5xl">Services</h1></a>
        </section>
        <ServicesMainBody/>
        <Footer/>
    </>;
}