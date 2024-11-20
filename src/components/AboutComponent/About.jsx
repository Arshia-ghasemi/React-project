import './../../App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
import Header from "../Header.jsx";
import Footer from "@/components/Footer.jsx";
import AboutMainBody from "@/components/AboutComponent/AboutMainBody.jsx";

export default function About() {

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
                <a className="gray" href="/about">About</a>
            </div>
            <a href="/about"><h1 className="text-center text-white font-bold text-5xl">About</h1></a>
        </section>
        <AboutMainBody/>
        <Footer/>
    </>;
}