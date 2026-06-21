import { useEffect, useState } from 'react';
import Modal from '../ui/Modal';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';
import { PRIORITIES, TASK_STATUS } from '../../utils/constants';

export default function TaskFormModal({ open, onClose, onSubmit, initialData, members, projects }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    project: '',
    assignedUser: '',
    status: 'To Do',
    priority: 'Medium',
    dueDate: ''
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        title: initialData.title || '',
        description: initialData.description || '',
        project: initialData.project?._id || initialData.project || '',
        assignedUser: initialData.assignedUser?._id || '',
        status: initialData.status || 'To Do',
        priority: initialData.priority || 'Medium',
        dueDate: initialData.dueDate ? initialData.dueDate.slice(0, 10) : ''
      });
    } else {
      setForm({
        title: '',
        description: '',
        project: projects[0]?._id || '',
        assignedUser: '',
        status: 'To Do',
        priority: 'Medium',
        dueDate: ''
      });
    }
  }, [initialData, open, projects]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(form);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title={initialData ? 'Edit task' : 'Create task'}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input label="Title" name="title" value={form.title} onChange={handleChange} required />

        <label className="block space-y-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Description</span>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900/80"
          />
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <Select label="Project" name="project" value={form.project} onChange={handleChange} required>
            {projects.map((project) => (
              <option key={project._id} value={project._id}>
                {project.title}
              </option>
            ))}
          </Select>

          <Select label="Assigned member" name="assignedUser" value={form.assignedUser} onChange={handleChange}>
            <option value="">Unassigned</option>
            {members.map((member) => (
              <option key={member._id} value={member._id}>
                {member.name}
              </option>
            ))}
          </Select>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Select label="Status" name="status" value={form.status} onChange={handleChange}>
            {TASK_STATUS.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </Select>

          <Select label="Priority" name="priority" value={form.priority} onChange={handleChange}>
            {PRIORITIES.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </Select>

          <Input label="Due date" type="date" name="dueDate" value={form.dueDate} onChange={handleChange} />
        </div>

        <div className="flex justify-end gap-3">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">{initialData ? 'Save changes' : 'Create task'}</Button>
        </div>
      </form>
    </Modal>
  );
}
