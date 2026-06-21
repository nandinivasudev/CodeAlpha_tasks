import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/ui/Card';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { useProjectStore } from '../store/projectStore';
import { formatDate } from '../utils/date';

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const { currentProject, getProjectById, loading } = useProjectStore();

  useEffect(() => {
    getProjectById(id);
  }, [id, getProjectById]);

  if (loading || !currentProject) {
    return <LoadingSpinner text="Loading project details..." />;
  }

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{currentProject.title}</h1>
            <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">{currentProject.description}</p>
          </div>
          <div className="rounded-2xl bg-brand-100 px-4 py-2 text-sm font-medium text-brand-700 dark:bg-brand-950 dark:text-brand-300">
            {currentProject.status}
          </div>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Priority</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{currentProject.priority}</p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Deadline</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{formatDate(currentProject.deadline)}</p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Created by</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{currentProject.createdBy?.name}</p>
        </Card>
      </div>

      <Card>
        <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Members</h3>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {currentProject.members?.map((member) => (
            <div key={member._id} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
              <p className="font-medium text-slate-900 dark:text-white">{member.name}</p>
              <p className="text-sm text-slate-500">{member.email}</p>
              <span className="mt-2 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs dark:bg-slate-800">
                {member.role}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
