import asyncHandler from 'express-async-handler';
import Activity from '../models/Activity.js';

export const getActivities = asyncHandler(async (req, res) => {
  const activities = await Activity.find({ user: req.user._id })
    .sort({ createdAt: -1 })
    .limit(20)
    .populate('user', 'name email profileImage');

  res.json(activities);
});
