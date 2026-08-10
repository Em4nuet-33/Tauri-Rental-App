export default function FormInput({ label, type = "text", placeholder, icon: Icon, ...props }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-bold uppercase text-slate-500 ml-1">
        {label}
      </label>
      <div className="relative group">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-500 transition-colors">
            <Icon size={16}/>
          </div>
        )}
        <input
          type={type}
          className={`w-full bg-slate-950 border border-slate-800 rounded-lg py-2 ${Icon ? 'pl-10' : 'pl-3'} pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all placeholder:text-slate-700`}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </div>
  );
}