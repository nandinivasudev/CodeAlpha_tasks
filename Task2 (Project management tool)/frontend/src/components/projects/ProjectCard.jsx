import { Calendar, Flag, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { formatDate } from '../../utils/date';

export default function ProjectCard({ project, onEdit, onDelete }) {
  return (
    <Card className="flex flex-col justify-between">
      <div>
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <Link to={`/projects/${project._id}`} className="text-xl font-semibold text-slate-900 dark:text-white">
              {project.title}
            </Link>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
          </div>
          <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-brand-950 dark:text-brand-300">
            {project.status}
          </span>
        </div>

        <div className="grid gap-3 text-sm text-slate-500 sm:grid-cols-3">
          <div className="flex items-center gap-2">
            <Flag size={16} />
            {project.priority}
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            {formatDate(project.deadline)}
          </div>
          <div className="flex items-center gap-2">
            <Users size={16} />
            {project.members?.length || 0} members
          </div>
        </div>
      </div>

      <div className="mt-5 flex gap-3">
        <Button variant="secondary" onClick={() => onEdit(project)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => onDelete(project._id)}>
          Delete
        </Button>
      </div>
    </Card>
  );
}
