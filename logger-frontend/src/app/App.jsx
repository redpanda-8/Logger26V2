// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";  
import ForgotPassword from "../pages/ForgotPassword.jsx";
import Home from "../pages/Home.jsx";
import Projektai from "../pages/Projektai.jsx";
import Naujasprojektas from "../pages/Naujasprojektas.jsx";
import Naujastipas from "../pages/Naujastipas.jsx";
import Tipas from "../pages/Tipas.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projektai />} />
          <Route path="/projects/new" element={<Naujasprojektas />} />
          <Route path="/task-types" element={<Tipas />} />
          <Route path="/task-types/new" element={<Naujastipas />} />
        </Route>

        <Route
          path="*"
          element={<div className="container-fluid p-4">404 – Puslapis nerastas</div>}
        />

      </Routes>
    </BrowserRouter>
  );
}
