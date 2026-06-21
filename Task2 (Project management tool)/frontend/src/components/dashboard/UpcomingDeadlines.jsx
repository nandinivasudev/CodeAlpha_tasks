import Card from '../ui/Card';
import { formatDate } from '../../utils/date';

export default function UpcomingDeadlines({ tasks }) {
  const upcoming = [...tasks]
    .filter((task) => task.dueDate)
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .slice(0, 5);

  return (
    <Card>
      <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Upcoming deadlines</h3>
      <div className="space-y-3">
        {upcoming.length ? (
          upcoming.map((task) => (
            <div
              key={task._id}
              className="flex items-center justify-between rounded-2xl border border-slate-200 p-4 dark:border-slate-800"
            >
              <div>
                <p className="font-medium text-slate-900 dark:text-white">{task.title}</p>
                <p className="text-sm text-slate-500">{task.project?.title}</p>
              </div>
              <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-brand-950 dark:text-brand-300">
                {formatDate(task.dueDate)}
              </span>
            </div>
          ))
        ) : (
          <p className="text-slate-500">No upcoming deadlines.</p>
        )}
      </div>
    </Card>
  );
}
