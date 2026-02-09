import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Projektai from "../pages/Projektai.jsx";
import Naujasprojektas from "../pages/Naujasprojektas.jsx";
import Naujastipas from "../pages/Naujastipas.jsx";
import Tipas from "../pages/Tipas.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projektai />} />
          <Route path="/projects/new" element={<Naujasprojektas />} />
          <Route path="/task-types" element={<Tipas />} />
          <Route path="/task-types/new" element={<Naujastipas />} />
          <Route path="*" element={<div className="container-fluid p-4">404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
