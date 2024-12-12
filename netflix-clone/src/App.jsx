import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Trailer from "./pages/Trailer";
import Errors from "./pages/Errors";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import { Context } from "./context/Context";

function App() {
  return (
    <>
      <Context>
        <NavBar />
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/trailer/:id" element={<Trailer />} />
          <Route path="*" element={<Errors />} />
        </Routes>
      </Context>
    </>
  );
}

export default App;
