import { create } from 'zustand';

export const useUIStore = create((set) => ({
  theme: localStorage.getItem('aldos_theme') || 'dark',
  sidebarOpen: false,

  toggleTheme: () =>
    set((state) => {
      const next = state.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('aldos_theme', next);
      return { theme: next };
    }),

  setSidebarOpen: (sidebarOpen) => set({ sidebarOpen })
}));
