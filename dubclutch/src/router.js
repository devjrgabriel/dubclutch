import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import { Login } from "./pages/login";
import {App} from "./pages/app";

export default function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />/
                <Route path="/Home" element={<Home />} />/
                <Route path="/App" element={<App />} />/
            </Routes>

        </BrowserRouter>
    )
}