import { create } from 'zustand';
import { getCurrentUser, loginUser, registerUser } from '../services/authService';

export const useAuthStore = create((set, get) => ({
  user: null,
  token: localStorage.getItem('aldos_token') || null,
  loading: false,
  error: null,

  initializeAuth: async () => {
    const token = get().token;
    if (!token) return;

    try {
      set({ loading: true, error: null });
      const user = await getCurrentUser();
      set({ user, loading: false });
    } catch (error) {
      localStorage.removeItem('aldos_token');
      set({ token: null, user: null, loading: false, error: 'Session expired' });
    }
  },

  register: async (payload) => {
    try {
      set({ loading: true, error: null });
      const data = await registerUser(payload);
      localStorage.setItem('aldos_token', data.token);
      set({ user: data, token: data.token, loading: false });
      return data;
    } catch (error) {
      set({ loading: false, error: error.response?.data?.message || 'Registration failed' });
      throw error;
    }
  },

  login: async (payload) => {
    try {
      set({ loading: true, error: null });
      const data = await loginUser(payload);
      localStorage.setItem('aldos_token', data.token);
      set({ user: data, token: data.token, loading: false });
      return data;
    } catch (error) {
      set({ loading: false, error: error.response?.data?.message || 'Login failed' });
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('aldos_token');
    set({ user: null, token: null, error: null });
  }
}));
