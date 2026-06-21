export default function Input({ label, error, className = '', ...props }) {
  return (
    <label className="block space-y-2">
      {label && <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{label}</span>}
      <input
        className={`w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 outline-none transition focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900/80 ${className}`}
        {...props}
      />
      {error ? <p className="text-sm text-rose-500">{error}</p> : null}
    </label>
  );
}
