import { FiDatabase, FiMapPin, FiPlay, FiFileText, FiInfo } from "react-icons/fi";
import FormInput from "@/components/FormInput";

export default function SidebarRight({ selectedPoint, onRunAnalysis }) {
  return (
    <aside className="w-80 bg-slate-900 border-l border-slate-800 flex flex-col h-full z-20">
      {/* Header del Panel */}
      <div className="p-6 border-b border-slate-800 bg-slate-900/50">
        <h2 className="text-emerald-400 font-bold flex items-center gap-2 uppercase tracking-wider text-sm">
          <FiDatabase /> Operaciones
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        
        {/* Sección A: Registro de Entrega (Folio) */}
        <section className="space-y-4">
          <h3 className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
            <FiFileText /> Nuevo Folio de Alquiler
          </h3>
          <div className="space-y-3">
            <FormInput label="ID Folio" placeholder="Ej: ALQ-2026-001" />
            <FormInput 
              label="Coordenadas" 
              placeholder="Click en el mapa..." 
              icon={FiMapPin}
              value={selectedPoint ? `${selectedPoint.lat.toFixed(4)}, ${selectedPoint.lng.toFixed(4)}` : ""}
              readOnly
            />
            <button className="w-full bg-emerald-600 hover:bg-emerald-500 py-2 rounded-lg font-bold text-sm transition-all">
              Registrar en Mapa
            </button>
          </div>
        </section>

        {/* Sección B: Análisis de Datos (Trigger para Pandas) */}
        <section className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-400 uppercase">Procesamiento</h3>
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Ejecuta el análisis de rentabilidad semanal utilizando el motor de **Pandas** via FastAPI.
          </p>
          <button 
            onClick={onRunAnalysis}
            className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all"
          >
            <FiPlay className="text-emerald-500" /> Iniciar Script Python
          </button>
        </section>

        {/* Sección C: Info del Punto Seleccionado */}
        {selectedPoint && (
          <section className="animate-in slide-in-from-right duration-300">
            <div className="p-4 bg-emerald-600/10 border border-emerald-600/20 rounded-xl">
              <h4 className="text-xs font-bold text-emerald-400 uppercase mb-2 flex items-center gap-2">
                <FiInfo /> Detalle de Ubicación
              </h4>
              <p className="text-[11px] text-slate-300">
                Has seleccionado un punto para una posible entrega. Asegúrate de verificar el acceso vehicular antes de confirmar el folio.
              </p>
            </div>
          </section>
        )}
      </div>

      {/* Footer del Panel */}
      <div className="p-4 bg-slate-950 border-t border-slate-800 text-[10px] text-slate-600 text-center font-mono">
        STATUS: READY_TO_ANALYZE
      </div>
    </aside>
  );
}