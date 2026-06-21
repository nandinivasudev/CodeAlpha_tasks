import Card from '../components/ui/Card';
import { useAuthStore } from '../store/authStore';

export default function ProfilePage() {
  const user = useAuthStore((state) => state.user);

  return (
    <Card>
      <div className="flex items-center gap-5">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet-400 text-2xl font-bold text-white">
          {user?.name?.charAt(0)}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{user?.name}</h1>
          <p className="text-slate-500">{user?.email}</p>
          <span className="mt-2 inline-block rounded-full bg-brand-100 px-3 py-1 text-sm text-brand-700 dark:bg-brand-950 dark:text-brand-300">
            {user?.role}
          </span>
        </div>
      </div>
    </Card>
  );
}
