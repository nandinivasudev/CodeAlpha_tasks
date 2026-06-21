import Card from '../ui/Card';

export default function MemberCard({ member }) {
  return (
    <Card>
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet-400 text-lg font-semibold text-white">
          {member.name.charAt(0)}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{member.name}</h3>
          <p className="text-sm text-slate-500">{member.email}</p>
          <span className="mt-2 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-brand-950 dark:text-brand-300">
            {member.role}
          </span>
        </div>
      </div>
    </Card>
  );
}
