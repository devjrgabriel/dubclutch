import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Home from "./pages/home";
import Login from "./pages/login";

export default function RouteApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>/
                <Route path="/Login" element={<Login />}/>
            </Routes>

        </BrowserRouter>
    )
}