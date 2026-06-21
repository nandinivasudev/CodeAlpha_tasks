import { create } from 'zustand';
import { createTask, deleteTask, fetchTasks, updateTask } from '../services/taskService';

export const useTaskStore = create((set, get) => ({
  tasks: [],
  loading: false,
  error: null,

  getTasks: async (projectId) => {
    try {
      set({ loading: true, error: null });
      const tasks = await fetchTasks(projectId);
      set({ tasks, loading: false });
    } catch (error) {
      set({ loading: false, error: error.response?.data?.message || 'Failed to load tasks' });
    }
  },

  addTask: async (payload) => {
    const task = await createTask(payload);
    set({ tasks: [task, ...get().tasks] });
    return task;
  },

  editTask: async (id, payload) => {
    const updated = await updateTask(id, payload);
    set({
      tasks: get().tasks.map((task) => (task._id === id ? updated : task))
    });
    return updated;
  },

  removeTask: async (id) => {
    await deleteTask(id);
    set({ tasks: get().tasks.filter((task) => task._id !== id) });
  }
}));
