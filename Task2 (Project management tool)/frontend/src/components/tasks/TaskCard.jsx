import { CalendarDays, Flag, User2 } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { formatDate, isOverdue } from '../../utils/date';

export default function TaskCard({ task, onEdit, onDelete }) {
  return (
    <Card className="p-4">
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-semibold text-slate-900 dark:text-white">{task.title}</h4>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs dark:bg-slate-800">{task.priority}</span>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300">{task.description}</p>

        <div className="space-y-2 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <User2 size={14} />
            {task.assignedUser?.name || 'Unassigned'}
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays size={14} />
            <span className={isOverdue(task.dueDate) ? 'text-rose-500' : ''}>{formatDate(task.dueDate)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Flag size={14} />
            {task.project?.title}
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button variant="secondary" className="flex-1" onClick={() => onEdit(task)}>
            Edit
          </Button>
          <Button variant="danger" className="flex-1" onClick={() => onDelete(task._id)}>
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
}
