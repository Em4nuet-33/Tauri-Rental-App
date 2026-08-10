import { getCurrentWindow } from "@tauri-apps/api/window";
import { FiX, FiMinus, FiSquare } from "react-icons/fi";

const appWindow = getCurrentWindow();

export default function Titlebar() {
  return (
   <div 
      data-tauri-drag-region 
      className="h-9 bg-slate-950/80 backdrop-blur-md flex justify-between items-center select-none border-b border-slate-800/50 sticky top-0 z-50"
    >
      {/* Lado izquierdo: Logo/Nombre */}
      <div className="flex items-center gap-2 px-4 pointer-events-none">
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
          Admin <span className="text-slate-600">v1.0</span>
        </span>
      </div>

      {/* Lado derecho: Controles */}
      <div className="flex h-full">
        <button
          onClick={() => appWindow.minimize()}
          className="px-4 hover:bg-slate-800/50 transition-colors inline-flex items-center text-slate-500 hover:text-slete-200"
        >
          <FiMinus size={14} />
        </button>
        <button
          onClick={() => appWindow.toggleMaximize()}
          className="px-4 hover:bg-slate-800/50 transition-colors inline-flex items-center text-slate-500 hover:text-slete-200"
        >
          <FiSquare size={12} />
        </button>
        <button
          onClick={() => appWindow.close()}
         className="px-4 hover:bg-red-500/20 hover:text-red-500 transition-all inline-flex items-center text-slate-500"
         >
          <FiX size={16} />
        </button>
      </div>
    </div>
  );
}