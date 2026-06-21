import { useEffect, useState } from 'react';
import Button from '../components/ui/Button';
import EmptyState from '../components/ui/EmptyState';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import KanbanBoard from '../components/tasks/KanbanBoard';
import TaskFormModal from '../components/tasks/TaskFormModal';
import { useTaskStore } from '../store/taskStore';
import { useProjectStore } from '../store/projectStore';
import { fetchMembers } from '../services/teamService';

export default function TasksPage() {
  const { tasks, getTasks, addTask, editTask, removeTask, loading } = useTaskStore();
  const { projects, getProjects } = useProjectStore();
  const [open, setOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getTasks();
    getProjects();
    fetchMembers().then(setMembers).catch(console.error);
  }, [getTasks, getProjects]);

  const handleSubmit = async (form) => {
    if (editingTask) {
      await editTask(editingTask._id, form);
    } else {
      await addTask(form);
    }
  };

  const handleStatusChange = async (task, status) => {
    await editTask(task._id, { ...task, status, assignedUser: task.assignedUser?._id || '' });
  };

  if (loading) {
    return <LoadingSpinner text="Loading tasks..." />;
  }

  if (!projects.length) {
    return <EmptyState title="No projects available" description="Create a project first before adding tasks." />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Tasks</h1>
          <p className="text-slate-500">Organize work with a clean Kanban workflow.</p>
        </div>
        <Button
          onClick={() => {
            setEditingTask(null);
            setOpen(true);
          }}
        >
          New Task
        </Button>
      </div>

      {tasks.length ? (
        <KanbanBoard
          tasks={tasks}
          onEdit={(task) => {
            setEditingTask(task);
            setOpen(true);
          }}
          onDelete={removeTask}
          onStatusChange={handleStatusChange}
        />
      ) : (
        <EmptyState title="No tasks yet" description="Create your first task and move it through your workflow." />
      )}

      <TaskFormModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
        initialData={editingTask}
        members={members}
        projects={projects}
      />
    </div>
  );
}
