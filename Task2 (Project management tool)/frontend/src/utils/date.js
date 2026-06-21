export const formatDate = (date) => {
  if (!date) return 'No date';
  return new Date(date).toLocaleDateString();
};

export const isOverdue = (date) => {
  if (!date) return false;
  return new Date(date) < new Date();
};
