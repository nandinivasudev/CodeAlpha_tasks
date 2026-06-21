import Card from '../ui/Card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const COLORS = ['#7f4dff', '#a78bfa', '#22c55e'];

export default function AnalyticsCharts({ tasks, projects }) {
  const taskData = [
    { name: 'To Do', value: tasks.filter((task) => task.status === 'To Do').length },
    { name: 'In Progress', value: tasks.filter((task) => task.status === 'In Progress').length },
    { name: 'Completed', value: tasks.filter((task) => task.status === 'Completed').length }
  ];

  const projectData = projects.map((project) => ({
    name: project.title.slice(0, 12),
    tasks: tasks.filter((task) => task.project?._id === project._id).length
  }));

  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <Card>
        <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Task completion graph</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={taskData} dataKey="value" outerRadius={110} innerRadius={60}>
                {taskData.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card>
        <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Project progress graph</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={projectData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#64748b22" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Bar dataKey="tasks" fill="#7f4dff" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}
