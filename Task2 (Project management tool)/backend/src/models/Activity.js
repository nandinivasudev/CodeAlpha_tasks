import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    action: {
      type: String,
      required: true
    },
    entityType: {
      type: String,
      enum: ['Project', 'Task', 'Auth', 'Team'],
      required: true
    },
    entityId: {
      type: mongoose.Schema.Types.ObjectId
    }
  },
  { timestamps: true }
);

const Activity = mongoose.model('Activity', activitySchema);
export default Activity;
