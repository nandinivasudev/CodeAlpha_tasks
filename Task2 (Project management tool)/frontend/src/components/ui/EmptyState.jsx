export default function EmptyState({ title, description }) {
  return (
    <div className="glass rounded-3xl p-10 text-center">
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}
