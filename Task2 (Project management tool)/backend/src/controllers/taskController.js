import asyncHandler from 'express-async-handler';
import Task from '../models/Task.js';
import Project from '../models/Project.js';
import logActivity from '../utils/logActivity.js';

export const getTasks = asyncHandler(async (req, res) => {
  const { projectId } = req.query;

  const query = {};
  if (projectId) query.project = projectId;

  const tasks = await Task.find(query)
    .populate('assignedUser', 'name email profileImage role')
    .populate('project', 'title')
    .populate('createdBy', 'name email')
    .populate('comments.user', 'name email');

  const filtered = tasks.filter(
    (task) =>
      task.createdBy._id.toString() === req.user._id.toString() ||
      task.assignedUser?._id?.toString() === req.user._id.toString()
  );

  res.json(filtered);
});

export const createTask = asyncHandler(async (req, res) => {
  const { title, description, project, assignedUser, status, priority, dueDate } = req.body;

  if (!title || !project) {
    res.status(400);
    throw new Error('Task title and project are required');
  }

  const projectExists = await Project.findById(project);
  if (!projectExists) {
    res.status(404);
    throw new Error('Project not found');
  }

  const task = await Task.create({
    title,
    description,
    project,
    assignedUser,
    status,
    priority,
    dueDate,
    createdBy: req.user._id
  });

  await logActivity({
    user: req.user._id,
    action: `Created task "${task.title}"`,
    entityType: 'Task',
    entityId: task._id
  });

  const populatedTask = await Task.findById(task._id)
    .populate('assignedUser', 'name email profileImage role')
    .populate('project', 'title')
    .populate('createdBy', 'name email')
    .populate('comments.user', 'name email');

  res.status(201).json(populatedTask);
});

export const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error('Task not found');
  }

  const { title, description, assignedUser, status, priority, dueDate, comments } = req.body;

  task.title = title ?? task.title;
  task.description = description ?? task.description;
  task.assignedUser = assignedUser ?? task.assignedUser;
  task.status = status ?? task.status;
  task.priority = priority ?? task.priority;
  task.dueDate = dueDate ?? task.dueDate;
  task.comments = comments ?? task.comments;

  const updatedTask = await task.save();

  await logActivity({
    user: req.user._id,
    action: `Updated task "${updatedTask.title}"`,
    entityType: 'Task',
    entityId: updatedTask._id
  });

  const populatedTask = await Task.findById(updatedTask._id)
    .populate('assignedUser', 'name email profileImage role')
    .populate('project', 'title')
    .populate('createdBy', 'name email')
    .populate('comments.user', 'name email');

  res.json(populatedTask);
});

export const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error('Task not found');
  }

  await task.deleteOne();

  await logActivity({
    user: req.user._id,
    action: `Deleted task "${task.title}"`,
    entityType: 'Task',
    entityId: task._id
  });

  res.json({ message: 'Task deleted successfully' });
});
