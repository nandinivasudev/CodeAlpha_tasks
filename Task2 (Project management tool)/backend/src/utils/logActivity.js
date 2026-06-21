import Activity from '../models/Activity.js';

const logActivity = async ({ user, action, entityType, entityId = null }) => {
  try {
    await Activity.create({
      user,
      action,
      entityType,
      entityId
    });
  } catch (error) {
    console.error('Activity log error:', error.message);
  }
};

export default logActivity;
