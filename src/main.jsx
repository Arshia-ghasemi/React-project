import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import About from './components/AboutComponent/About.jsx';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Services from "@/components/ServicesComponent/Services.jsx";
import Projects from "@/components/ProjectsComponent/Projects.jsx";
import News from "@/components/NewsComponent/News.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/services",
        element: <Services/>
    },
    {
        path: "/projects",
        element: <Projects/>
    },
    {
        path: "/news",
        element:<News/>
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
);
