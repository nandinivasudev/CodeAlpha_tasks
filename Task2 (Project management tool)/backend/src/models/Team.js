import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema(
  {
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
      }
    ]
  },
  { timestamps: true }
);

const Team = mongoose.model('Team', teamSchema);
export default Team;
