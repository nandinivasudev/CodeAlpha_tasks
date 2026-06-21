import api from './api';

export const fetchMembers = async () => {
  const { data } = await api.get('/team/members');
  return data;
};

export const fetchMemberProfile = async (id) => {
  const { data } = await api.get(`/team/members/${id}`);
  return data;
};

export const fetchActivities = async () => {
  const { data } = await api.get('/activities');
  return data;
};
