import { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import MemberCard from '../components/team/MemberCard';
import { fetchActivities, fetchMembers } from '../services/teamService';

export default function TeamPage() {
  const [members, setMembers] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([fetchMembers(), fetchActivities()])
      .then(([membersData, activitiesData]) => {
        setMembers(membersData);
        setActivities(activitiesData);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <LoadingSpinner text="Loading team..." />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Team members</h1>
        <p className="text-slate-500">See your collaborators, roles, and recent account activity.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {members.map((member) => (
          <MemberCard key={member._id} member={member} />
        ))}
      </div>

      <Card>
        <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">Recent activity</h2>
        <div className="space-y-4">
          {activities.length ? (
            activities.map((activity) => (
              <div
                key={activity._id}
                className="flex items-center justify-between rounded-2xl border border-slate-200 p-4 dark:border-slate-800"
              >
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">{activity.action}</p>
                  <p className="text-sm text-slate-500">{activity.entityType}</p>
                </div>
                <span className="text-xs text-slate-500">
                  {new Date(activity.createdAt).toLocaleString()}
                </span>
              </div>
            ))
          ) : (
            <p className="text-slate-500">No recent activity.</p>
          )}
        </div>
      </Card>
    </div>
  );
}
