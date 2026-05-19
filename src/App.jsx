import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sedes from "./pages/Sedes";
import Biblioteca from "./pages/Biblioteca";
import Musica from "./pages/Musica";
import Evangelismo from "./pages/Evangelismo";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sedes" element={<Sedes />} />
            <Route path="/biblioteca" element={<Biblioteca />} />
            <Route path="/musica" element={<Musica />} />
            <Route path="/evangelismo" element={<Evangelismo />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
