import { useEffect, useMemo } from 'react';
import { BriefcaseBusiness, CheckCheck, Clock3, TrendingUp } from 'lucide-react';
import DashboardCard from '../components/dashboard/DashboardCard';
import AnalyticsCharts from '../components/dashboard/AnalyticsCharts';
import UpcomingDeadlines from '../components/dashboard/UpcomingDeadlines';
import { useProjectStore } from '../store/projectStore';
import { useTaskStore } from '../store/taskStore';
import LoadingSpinner from '../components/ui/LoadingSpinner';

export default function DashboardPage() {
  const { projects, getProjects, loading: projectsLoading } = useProjectStore();
  const { tasks, getTasks, loading: tasksLoading } = useTaskStore();

  useEffect(() => {
    getProjects();
    getTasks();
  }, [getProjects, getTasks]);

  const metrics = useMemo(() => {
    const completed = tasks.filter((task) => task.status === 'Completed').length;
    const pending = tasks.filter((task) => task.status !== 'Completed').length;
    const productivity = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;

    return {
      totalProjects: projects.length,
      completed,
      pending,
      productivity
    };
  }, [projects, tasks]);

  if (projectsLoading || tasksLoading) {
    return <LoadingSpinner text="Loading dashboard..." />;
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardCard title="Total projects" value={metrics.totalProjects} icon={BriefcaseBusiness} accent="bg-sky-500" />
        <DashboardCard title="Completed tasks" value={metrics.completed} icon={CheckCheck} accent="bg-emerald-500" />
        <DashboardCard title="Pending tasks" value={metrics.pending} icon={Clock3} accent="bg-amber-500" />
        <DashboardCard title="Productivity" value={`${metrics.productivity}%`} icon={TrendingUp} accent="bg-brand-600" />
      </div>

      <AnalyticsCharts tasks={tasks} projects={projects} />
      <UpcomingDeadlines tasks={tasks} />
    </div>
  );
}
