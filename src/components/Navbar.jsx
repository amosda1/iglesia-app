import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/sedes", label: "Sedes" },
  { to: "/biblioteca", label: "Biblioteca" },
  { to: "/musica", label: "Musica" },
  { to: "/evangelismo", label: "Evangelismo" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="top-0 z-40 sticky bg-[#040315] shadow-lg text-white">
        <div className="mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-center h-16">
            <span className="font-bold text-xl tracking-tight">Iglesia</span>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden hover:bg-white/10 p-2 rounded-md text-white transition-colors cursor-pointer"
              aria-label="Abrir menú"
            >
              <Menu className="w-6 h-6" />
            </button>

            <ul className="hidden md:flex gap-1">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-indigo-800 text-white"
                          : "text-indigo-100 hover:bg-indigo-600"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div
        onClick={handleClose}
        className={` fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <div
        className={` fixed top-0 right-0 z-50 h-full w-64 bg-[#040315] text-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 border-white/10 border-b h-16">
          <span className="font-bold text-lg">Menú</span>
          <button
            onClick={handleClose}
            className="hover:bg-white/10 p-2 rounded-md transition-colors cursor-pointer cursor-poniter"
            aria-label="Cerrar menú"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <ul className="flex-col gap-1 px-2 pt-4 cursor-pointer cursor-pointer cursor-pointer cursor-pointerflex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                onClick={handleClose}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-800 text-white"
                      : "text-indigo-100 hover:bg-indigo-600"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
