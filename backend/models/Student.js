import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    enrollmentNo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    department: {
      type: String,
      required: true,
    },

    semester: {
      type: Number,
      required: true,
    },

    attendance: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },

    marks: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },

    performance: {
  type: String,
},

recommendation: {
  type: String,
},

riskLevel: {
  type: String,
},
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Student", studentSchema);