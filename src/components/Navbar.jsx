import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Flame } from "lucide-react";

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

  const linkClass = ({ isActive }) =>
    `relative px-3 py-2 rounded-md text-sm font-bold tracking-wide transition-all duration-300 ${
      isActive
        ? "bg-llama text-white shadow-[0_0_15px_rgba(239,68,68,0.5)]"
        : "text-white/80 hover:text-white hover:bg-llama/20"
    }`;

  return (
    <>
      <nav className="sticky top-0 z-40 bg-noche text-white shadow-lg">
        {/* Fire gradient border */}
        <div className="h-[3px] bg-gradient-to-r from-oro via-fuego via-llama to-oro animate-pulse" />

        <div className="mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-center h-16">
            {/* Brand */}
            <div className="flex items-center gap-2">
              <Flame className="w-6 h-6 text-llama drop-shadow-[0_0_6px_rgba(239,68,68,0.8)]" />
              <span className="font-extrabold text-lg tracking-widest bg-gradient-to-r from-oro via-fuego to-llama bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]">
                JUVENTUD GUERRERA
              </span>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 rounded-md text-oro hover:bg-llama/20 transition-colors cursor-pointer"
              aria-label="Abrir menú"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Desktop links */}
            <ul className="hidden md:flex gap-1">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} end={link.to === "/"} className={linkClass}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-noche text-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 border-b border-white/10 h-16">
          <div className="flex items-center gap-1.5">
            <Flame className="w-5 h-5 text-llama" />
            <span className="font-bold text-sm text-oro">MENÚ</span>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-md text-oro hover:bg-llama/20 transition-colors cursor-pointer"
            aria-label="Cerrar menú"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <ul className="flex flex-col gap-1 px-2 pt-4">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                onClick={handleClose}
                className={linkClass}
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
