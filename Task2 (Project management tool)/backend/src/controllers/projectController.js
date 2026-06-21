import asyncHandler from 'express-async-handler';
import Project from '../models/Project.js';
import Task from '../models/Task.js';
import Team from '../models/Team.js';
import logActivity from '../utils/logActivity.js';

export const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({
    $or: [{ createdBy: req.user._id }, { members: req.user._id }]
  })
    .populate('members', 'name email profileImage role')
    .populate('createdBy', 'name email');

  res.json(projects);
});

export const createProject = asyncHandler(async (req, res) => {
  const { title, description, status, priority, deadline, members } = req.body;

  if (!title) {
    res.status(400);
    throw new Error('Project title is required');
  }

  const uniqueMembers = [...new Set([req.user._id.toString(), ...(members || [])])];

  const project = await Project.create({
    title,
    description,
    status,
    priority,
    deadline,
    members: uniqueMembers,
    createdBy: req.user._id
  });

  await Team.findOneAndUpdate(
    { members: req.user._id },
    { $addToSet: { projects: project._id } },
    { upsert: true, new: true }
  );

  await logActivity({
    user: req.user._id,
    action: `Created project "${project.title}"`,
    entityType: 'Project',
    entityId: project._id
  });

  const populatedProject = await Project.findById(project._id)
    .populate('members', 'name email profileImage role')
    .populate('createdBy', 'name email');

  res.status(201).json(populatedProject);
});

export const getProjectById = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id)
    .populate('members', 'name email profileImage role')
    .populate('createdBy', 'name email');

  if (!project) {
    res.status(404);
    throw new Error('Project not found');
  }

  res.json(project);
});

export const updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(404);
    throw new Error('Project not found');
  }

  if (
    project.createdBy.toString() !== req.user._id.toString() &&
    !project.members.map((m) => m.toString()).includes(req.user._id.toString())
  ) {
    res.status(403);
    throw new Error('Forbidden');
  }

  const { title, description, status, priority, deadline, members } = req.body;

  project.title = title ?? project.title;
  project.description = description ?? project.description;
  project.status = status ?? project.status;
  project.priority = priority ?? project.priority;
  project.deadline = deadline ?? project.deadline;
  project.members = members ? [...new Set([project.createdBy.toString(), ...members])] : project.members;

  const updatedProject = await project.save();

  await logActivity({
    user: req.user._id,
    action: `Updated project "${updatedProject.title}"`,
    entityType: 'Project',
    entityId: updatedProject._id
  });

  const populatedProject = await Project.findById(updatedProject._id)
    .populate('members', 'name email profileImage role')
    .populate('createdBy', 'name email');

  res.json(populatedProject);
});

export const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(404);
    throw new Error('Project not found');
  }

  if (project.createdBy.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error('Only creator can delete project');
  }

  await Task.deleteMany({ project: project._id });
  await project.deleteOne();

  await logActivity({
    user: req.user._id,
    action: `Deleted project "${project.title}"`,
    entityType: 'Project',
    entityId: project._id
  });

  res.json({ message: 'Project deleted successfully' });
});
