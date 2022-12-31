import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home/home";

function App () {
    return(
        <>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/home" element={<Home />} />

                    <Route path="/" element={<Navigate replace to="/home" />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;