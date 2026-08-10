import { useState } from "react";
import SidebarLeft from "@/components/SidebarLeft";
import SidebarRight from "@/components/SidebarRight";
import MapSection from "@/components/MapSection";
import { Routes, Route } from 'react-router-dom';
import DashboardPage from "@/features/dashboard/DashboardPage";
import RegistroAlquiler from "@/pages/RegistroAlquiler"; 
import Titlebar from "@/components/Titlebar";
import RegistroRepartidores from "./Pages/RegistroRepartidores";
export default function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const handleMapClick = (e) => {
    // Captura las coordenadas del click en MapLibre
    setSelectedLocation({ lat: e.lngLat.lat, lng: e.lngLat.lng });
  };
  const runPandasAnalysis = async () => {
    console.log("Invocando script de Python...");
    // Aquí irá la llamada a Tauri Sidecar / FastAPI
  };
 return (
    <div className="flex flex-col h-screen w-screen bg-slate-950 text-slate-100">
      <Titlebar />
      <div className="flex flex-1 overflow-hidden">
      <SidebarLeft />

      <main className="flex-1 relative bg-slate-900 overflow-hidden">
        <Routes>
          <Route path="/" element={<DashboardPage />} />

          <Route 
            path="/entregas-mapa" 
            element={<MapSection onMapClick={handleMapClick} />} 
          />
          
        <Route path="/inventario" element={<RegistroAlquiler/>} />
          <Route path="/repartidores" element={<RegistroRepartidores/>}/>
          <Route path="/reportes" element={<div className="p-8">Análisis de Datos con Pandas</div>} />
        </Routes>
      </main>

    <SidebarRight 
        selectedPoint={selectedLocation} 
        onRunAnalysis={runPandasAnalysis} 
      />
      </div>
    </div>
  );
}