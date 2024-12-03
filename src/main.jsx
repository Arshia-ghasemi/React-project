import React from "react";
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import About from './components/AboutComponent/About.jsx';
import { BrowserRouter, Routes, Route  } from "react-router";
import Services from "@/components/ServicesComponent/Services.jsx";
import Projects from "@/components/ProjectsComponent/Projects.jsx";
import News from "@/components/NewsComponent/News.jsx";


createRoot(document.getElementById('root')).render(
    <React.Fragment>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/news" element={<News />} />
            </Routes>
        </BrowserRouter>
    </React.Fragment>,
);

