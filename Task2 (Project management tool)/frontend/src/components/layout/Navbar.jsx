import { Menu, Search } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useUIStore } from '../../store/uiStore';

export default function Navbar() {
  const user = useAuthStore((state) => state.user);
  const setSidebarOpen = useUIStore((state) => state.setSidebarOpen);

  return (
    <header className="glass sticky top-0 z-20 mb-6 flex items-center justify-between rounded-3xl p-4">
      <div className="flex items-center gap-3">
        <button
          className="rounded-2xl p-2 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={20} />
        </button>
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Welcome back, {user?.name}</h2>
          <p className="text-sm text-slate-500">Track progress and lead projects beautifully.</p>
        </div>
      </div>

      <div className="hidden items-center gap-3 md:flex">
        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 px-3 py-2 dark:border-slate-700">
          <Search size={16} className="text-slate-400" />
          <input
            placeholder="Search..."
            className="bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </div>
        <div className="flex items-center gap-3 rounded-2xl bg-slate-100 px-3 py-2 dark:bg-slate-800">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet-400 text-sm font-semibold text-white">
            {user?.name?.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-medium text-slate-900 dark:text-white">{user?.name}</p>
            <p className="text-xs text-slate-500">{user?.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
