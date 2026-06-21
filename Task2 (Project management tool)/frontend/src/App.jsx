import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppShell from './components/layout/AppShell';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProjectsPage from './pages/ProjectsPage';
import TasksPage from './pages/TasksPage';
import TeamPage from './pages/TeamPage';
import ProfilePage from './pages/ProfilePage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import { useAuthStore } from './store/authStore';
import { useTheme } from './hooks/useTheme';
import LoadingSpinner from './components/ui/LoadingSpinner';

function ProtectedRoute({ children }) {
  const { token, user, initializeAuth, loading } = useAuthStore();

  useEffect(() => {
    if (token && !user) {
      initializeAuth();
    }
  }, [token, user, initializeAuth]);

  if (token && !user && loading) {
    return <LoadingSpinner text="Restoring session..." />;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <AppShell>{children}</AppShell>;
}

function PublicRoute({ children }) {
  const token = useAuthStore((state) => state.token);
  return token ? <Navigate to="/" replace /> : children;
}

export default function App() {
  useTheme();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />

        <Route path="/" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="/projects" element={<ProtectedRoute><ProjectsPage /></ProtectedRoute>} />
        <Route path="/projects/:id" element={<ProtectedRoute><ProjectDetailsPage /></ProtectedRoute>} />
        <Route path="/tasks" element={<ProtectedRoute><TasksPage /></ProtectedRoute>} />
        <Route path="/team" element={<ProtectedRoute><TeamPage /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
