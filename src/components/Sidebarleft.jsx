import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronRight, FiChevronLeft, FiMap, FiPackage, FiTruck, FiBarChart2, FiHome } from "react-icons/fi";

export default function SidebarLeft() {
  const [open, setOpen] = useState(true);

  // Menús adaptados a la lógica de Alquileres y Logística
  const menus = [
    { name: "Vista General", icon: <FiHome />, path: "/" }, // Dashboard
    { name: "Mapa de Entregas", icon: <FiMap />, path: "/entregas-mapa" }, // Interacción directa con MapSection
    { name: "Inventario Alquiler", icon: <FiPackage />, path: "/inventario" },
    { name: "Gestión Repartidores", icon: <FiTruck />, path: "/repartidores" },
    { name: "Reportes Pandas", icon: <FiBarChart2 />, path: "/reportes" }, // Aquí es donde entrará el script de Python
  ];

  return (
    <aside className={`${open ? "w-64" : "w-20"} bg-slate-900 border-r border-slate-800 transition-all duration-300 relative p-4 flex flex-col z-20`}>
      {/* Botón de Toggle con estilo Emerald */}
      <button 
        onClick={() => setOpen(!open)}
        className="absolute -right-3 top-10 bg-emerald-600 rounded-full p-1 text-white hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/40"
      >
        {open ? <FiChevronLeft size={18} /> : <FiChevronRight size={18} />}
      </button>

      {/* Logo o Título de la App */}
      <div className={`mb-8 px-2 flex items-center gap-3 ${!open && "justify-center"}`}>
        <div className="w-8 h-8 bg-emerald-600 rounded-lg flex-shrink-0" />
        {open && <h1 className="font-bold text-lg tracking-tight">Admin<span className="text-emerald-500">Alquiler</span></h1>}
      </div>

      <nav className="flex-1 space-y-2">
        {menus.map((menu) => (
          <NavLink
            key={menu.name}
            to={menu.path}
            className={({ isActive }) => 
              `flex items-center gap-4 p-3 rounded-xl transition-all group ${
                isActive 
                ? "bg-emerald-600/10 text-emerald-400 border border-emerald-600/30" 
                : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
              }`
            }
          >
            <span className={`text-xl group-hover:scale-110 transition-transform ${open ? "" : "mx-auto"}`}>
              {menu.icon}
            </span>
            {open && <span className="font-medium text-sm">{menu.name}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Footer del Sidebar (opcional) */}
      {open && (
        <div className="p-2 bg-slate-800/30 rounded-lg border border-slate-800">
          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest text-center">Tauri Desktop v1.0</p>
        </div>
      )}
    </aside>
  );
}