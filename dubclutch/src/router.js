import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import { Login } from "./pages/login";

export default function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />/
                <Route path="/Home" element={<Home />} />/
            </Routes>

        </BrowserRouter>
    )
}