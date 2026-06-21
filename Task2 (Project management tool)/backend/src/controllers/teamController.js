import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import Project from '../models/Project.js';
import Team from '../models/Team.js';

export const getTeamMembers = asyncHandler(async (req, res) => {
  const users = await User.find().select('-password').sort({ createdAt: -1 });
  res.json(users);
});

export const getTeams = asyncHandler(async (req, res) => {
  const teams = await Team.find()
    .populate('members', 'name email profileImage role')
    .populate('projects', 'title status priority');
  res.json(teams);
});

export const getMemberProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  if (!user) {
    res.status(404);
    throw new Error('Member not found');
  }

  const projects = await Project.find({ members: user._id }).select('title status priority deadline');
  res.json({ user, projects });
});
