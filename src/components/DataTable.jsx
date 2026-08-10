export default function DataTable({ headers, data }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-800/50 text-xs uppercase text-slate-400">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 font-semibold">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors">
              {Object.values(row).map((val, j) => (
                <td key={j} className="px-4 py-3 text-slate-300">{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}