import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import { Login } from "./pages/login";
import {App} from "./pages/app";
import Stages from "./pages/stages"

export default function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />/
                <Route path="/Home" element={<Home />} />/
                <Route path="/App" element={<App />} />/
                <Route path="/Stages" element={<Stages/>}/>
            </Routes>

        </BrowserRouter>
    )
}