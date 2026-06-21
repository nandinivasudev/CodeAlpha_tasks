import { useEffect, useState } from 'react';
import Modal from '../ui/Modal';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';
import { PRIORITIES, PROJECT_STATUS } from '../../utils/constants';

export default function ProjectFormModal({ open, onClose, onSubmit, initialData, members }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    status: 'Planning',
    priority: 'Medium',
    deadline: '',
    members: []
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        title: initialData.title || '',
        description: initialData.description || '',
        status: initialData.status || 'Planning',
        priority: initialData.priority || 'Medium',
        deadline: initialData.deadline ? initialData.deadline.slice(0, 10) : '',
        members: initialData.members?.map((member) => member._id) || []
      });
    } else {
      setForm({
        title: '',
        description: '',
        status: 'Planning',
        priority: 'Medium',
        deadline: '',
        members: []
      });
    }
  }, [initialData, open]);

  const handleChange = (e) => {
    const { name, value, selectedOptions } = e.target;

    if (name === 'members') {
      setForm({
        ...form,
        members: Array.from(selectedOptions, (option) => option.value)
      });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(form);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title={initialData ? 'Edit project' : 'Create project'}>
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
          <Select label="Status" name="status" value={form.status} onChange={handleChange}>
            {PROJECT_STATUS.map((status) => (
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
        </div>

        <Input label="Deadline" type="date" name="deadline" value={form.deadline} onChange={handleChange} />

        <label className="block space-y-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Members</span>
          <select
            multiple
            name="members"
            value={form.members}
            onChange={handleChange}
            className="h-40 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900/80"
          >
            {members.map((member) => (
              <option key={member._id} value={member._id}>
                {member.name} - {member.role}
              </option>
            ))}
          </select>
        </label>

        <div className="flex justify-end gap-3">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">{initialData ? 'Save changes' : 'Create project'}</Button>
        </div>
      </form>
    </Modal>
  );
}
