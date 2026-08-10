import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { FiTrendingUp, FiBox, FiClock } from "react-icons/fi";

const dataMock = [
  { name: 'Lun', alquileres: 40 },
  { name: 'Mar', alquileres: 30 },
  { name: 'Mie', alquileres: 60 },
  { name: 'Jue', alquileres: 45 },
  { name: 'Vie', alquileres: 90 },
];

export default function DashboardPage() {
  return (
    <div className="p-8 space-y-8 h-full overflow-y-auto">
      <header>
        <h1 className="text-3xl font-bold">Panel de Control</h1>
        <p className="text-slate-400">Resumen operativo impulsado por Pandas Analysis.</p>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Alquileres" value="128" icon={<FiBox />} color="text-emerald-500" />
        <StatCard title="Tendencia Semanal" value="+24%" icon={<FiTrendingUp />} color="text-blue-500" />
        <StatCard title="Tiempo Prom. Entrega" value="45 min" icon={<FiClock />} color="text-amber-500" />
      </div>

      {/* Chart Section */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl h-80">
        <h3 className="mb-6 font-semibold text-slate-300">Flujo de Alquileres (Semana Actual)</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dataMock}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip cursor={{fill: '#1e293b'}} contentStyle={{backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px'}} />
            <Bar dataKey="alquileres" fill="#059669" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-between">
      <div>
        <p className="text-sm text-slate-500 font-medium">{title}</p>
        <h4 className="text-2xl font-bold mt-1">{value}</h4>
      </div>
      <div className={`text-2xl p-3 bg-slate-800 rounded-xl ${color}`}>
        {icon}
      </div>
    </div>
  );
}