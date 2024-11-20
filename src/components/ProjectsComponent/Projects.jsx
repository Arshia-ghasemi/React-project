import './../../App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
import Header from "../Header.jsx";
import Footer from "@/components/Footer.jsx";
import ProjectsMainBody from "@/components/ProjectsComponent/ProjectsMainBody.jsx";

export default function Projects(){

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
                    <a className="gray" href="/project">Project</a>
                </div>
                <a href="/project"><h1 className="text-center text-white font-bold text-5xl">Project</h1></a>
            </section>
        <ProjectsMainBody/>
        <Footer/>
    </>
}