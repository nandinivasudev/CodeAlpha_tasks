export default function LoadingSpinner({ text = 'Loading...' }) {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/60 px-4 py-3 dark:bg-slate-900/60">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-brand-500 border-t-transparent" />
        <span className="text-sm text-slate-700 dark:text-slate-200">{text}</span>
      </div>
    </div>
  );
}
