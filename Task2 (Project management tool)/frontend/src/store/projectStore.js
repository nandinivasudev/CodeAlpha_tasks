import { create } from 'zustand';
import {
  createProject,
  deleteProject,
  fetchProjectById,
  fetchProjects,
  updateProject
} from '../services/projectService';

export const useProjectStore = create((set, get) => ({
  projects: [],
  currentProject: null,
  loading: false,
  error: null,

  getProjects: async () => {
    try {
      set({ loading: true, error: null });
      const projects = await fetchProjects();
      set({ projects, loading: false });
    } catch (error) {
      set({ loading: false, error: error.response?.data?.message || 'Failed to load projects' });
    }
  },

  getProjectById: async (id) => {
    try {
      set({ loading: true, error: null });
      const project = await fetchProjectById(id);
      set({ currentProject: project, loading: false });
    } catch (error) {
      set({ loading: false, error: error.response?.data?.message || 'Failed to load project' });
    }
  },

  addProject: async (payload) => {
    const project = await createProject(payload);
    set({ projects: [project, ...get().projects] });
    return project;
  },

  editProject: async (id, payload) => {
    const updated = await updateProject(id, payload);
    set({
      projects: get().projects.map((project) => (project._id === id ? updated : project)),
      currentProject: updated
    });
    return updated;
  },

  removeProject: async (id) => {
    await deleteProject(id);
    set({ projects: get().projects.filter((project) => project._id !== id) });
  }
}));
