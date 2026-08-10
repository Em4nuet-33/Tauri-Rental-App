import FormInput from "@/components/FormInput";
import DataTable from "@/components/DataTable";
import { FiBox, FiHash, FiMapPin, FiTruck } from "react-icons/fi"; 

export default function RegistroRepartidores() {
  const mockData = [
    { id: "ALQ-001", equipo: "Andamio Tubular", estado: "Alquilado", cliente: "Construcciones MX" },
    { id: "ALQ-002", equipo: "Planta de Luz", estado: "Disponible", cliente: "N/A" },
  ];

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <header>
        <h1 className="text-2xl font-bold text-white flex items-center gap-3">
          <FiBox className="text-emerald-500" /> Gestión de Repartidores
        </h1>
        <p className="text-slate-400 text-sm">Administra tus Colaboradores y Eleva tu Productividad</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulario a la izquierda */}
        <section className="lg:col-span-1 bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4">
          <h3 className="text-sm font-semibold mb-2 text-emerald-400">Nuevo Registro de Equipo</h3>
          <FormInput label="Código de Activo" icon={FiHash} placeholder=" INV-000" />
          <FormInput label="Descripción del Equipo" icon={FiBox} placeholder=" Ej. Generador 5500W" />
          <FormInput label="Ubicación en Bodega" icon={FiMapPin} placeholder= "Estante A-12" />
          <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-lg shadow-lg shadow-emerald-900/20 transition-all mt-4 flex items-center justify-center gap-2">
            <FiTruck /> Guardar en Inventario
          </button>
        </section>

        {/* Tabla a la derecha */}
        <section className="lg:col-span-2">
          <h3 className="text-sm font-semibold mb-4 text-slate-400 uppercase tracking-wider">Activos Recientes</h3>
          <DataTable 
            headers={["ID", "Equipo", "Estado", "Cliente Actual"]} 
            data={mockData} 
          />
        </section>
      </div>
    </div>
  );
}