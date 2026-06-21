import express from 'express';
import { getMemberProfile, getTeamMembers, getTeams } from '../controllers/teamController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/members', protect, getTeamMembers);
router.get('/', protect, getTeams);
router.get('/members/:id', protect, getMemberProfile);

export default router;
