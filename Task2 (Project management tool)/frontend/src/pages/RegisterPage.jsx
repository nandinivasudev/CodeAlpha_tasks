import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Select from '../components/ui/Select';
import { useAuthStore } from '../store/authStore';
import { ROLES } from '../utils/constants';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register, loading, error } = useAuthStore();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    profileImage: '',
    role: 'Member'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);
    navigate('/');
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold gradient-text">Join ALDOS</h1>
          <p className="mt-2 text-slate-500">Build clarity, momentum, and team productivity.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <Input label="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          <Input label="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
          <Input label="Profile image URL" value={form.profileImage} onChange={(e) => setForm({ ...form, profileImage: e.target.value })} />
          <Select label="Role" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
            {ROLES.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </Select>

          {error ? <p className="text-sm text-rose-500">{error}</p> : null}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Creating account...' : 'Register'}
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-slate-500">
          Already have an account? <Link to="/login" className="text-brand-600">Login</Link>
        </p>
      </Card>
    </div>
  );
}
