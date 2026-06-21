import asyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import Team from '../models/Team.js';
import generateToken from '../utils/generateToken.js';
import logActivity from '../utils/logActivity.js';

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, profileImage, role } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please provide name, email, and password');
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    profileImage: profileImage || '',
    role: role || 'Member'
  });

  await Team.create({
    members: [user._id],
    projects: []
  });

  await logActivity({
    user: user._id,
    action: 'Registered account',
    entityType: 'Auth',
    entityId: user._id
  });

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    profileImage: user.profileImage,
    role: user.role,
    token: generateToken(user._id)
  });
});

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    res.status(401);
    throw new Error('Invalid email or password');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(401);
    throw new Error('Invalid email or password');
  }

  await logActivity({
    user: user._id,
    action: 'Logged in',
    entityType: 'Auth',
    entityId: user._id
  });

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    profileImage: user.profileImage,
    role: user.role,
    token: generateToken(user._id)
  });
});

export const getMe = asyncHandler(async (req, res) => {
  res.json(req.user);
});
