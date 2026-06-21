import Card from '../ui/Card';

export default function DashboardCard({ title, value, icon: Icon, accent }) {
  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">{value}</h3>
        </div>
        <div className={`rounded-2xl p-3 ${accent}`}>
          <Icon className="text-white" size={22} />
        </div>
      </div>
    </Card>
  );
}
