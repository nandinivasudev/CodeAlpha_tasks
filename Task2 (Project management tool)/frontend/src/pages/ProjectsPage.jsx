import { useEffect, useState } from 'react';
import Button from '../components/ui/Button';
import EmptyState from '../components/ui/EmptyState';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectFormModal from '../components/projects/ProjectFormModal';
import { useProjectStore } from '../store/projectStore';
import { fetchMembers } from '../services/teamService';

export default function ProjectsPage() {
  const { projects, getProjects, addProject, editProject, removeProject, loading } = useProjectStore();
  const [open, setOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getProjects();
    fetchMembers().then(setMembers).catch(console.error);
  }, [getProjects]);

  const handleSubmit = async (form) => {
    if (editingProject) {
      await editProject(editingProject._id, form);
    } else {
      await addProject(form);
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setOpen(true);
  };

  const handleCreate = () => {
    setEditingProject(null);
    setOpen(true);
  };

  if (loading) {
    return <LoadingSpinner text="Loading projects..." />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Projects</h1>
          <p className="text-slate-500">Plan, track, and deliver high-impact work.</p>
        </div>
        <Button onClick={handleCreate}>New Project</Button>
      </div>

      {projects.length ? (
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
              onEdit={handleEdit}
              onDelete={removeProject}
            />
          ))}
        </div>
      ) : (
        <EmptyState title="No projects yet" description="Create your first project to start managing work in ALDOS." />
      )}

      <ProjectFormModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
        initialData={editingProject}
        members={members}
      />
    </div>
  );
}
