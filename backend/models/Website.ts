import mongoose from "mongoose";

const websiteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true
  },
  url: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: true
  }
});

// compound index for filtering + sorting
websiteSchema.index({ userId: 1, createdAt: -1 });

export default mongoose.model("Website", websiteSchema);