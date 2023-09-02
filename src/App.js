import React from "react";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
