import TaskCard from './TaskCard';

const columns = ['To Do', 'In Progress', 'Completed'];

export default function KanbanBoard({ tasks, onEdit, onDelete, onStatusChange }) {
  return (
    <div className="grid gap-6 xl:grid-cols-3">
      {columns.map((column) => (
        <div key={column} className="glass rounded-3xl p-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{column}</h3>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs dark:bg-slate-800">
              {tasks.filter((task) => task.status === column).length}
            </span>
          </div>

          <div className="space-y-4">
            {tasks
              .filter((task) => task.status === column)
              .map((task) => (
                <div key={task._id}>
                  <TaskCard task={task} onEdit={onEdit} onDelete={onDelete} />
                  <div className="mt-2 flex gap-2">
                    {columns
                      .filter((status) => status !== task.status)
                      .map((status) => (
                        <button
                          key={status}
                          onClick={() => onStatusChange(task, status)}
                          className="rounded-xl bg-brand-50 px-3 py-1 text-xs text-brand-700 dark:bg-brand-950 dark:text-brand-300"
                        >
                          Move to {status}
                        </button>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
