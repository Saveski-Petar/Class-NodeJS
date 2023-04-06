import { Schema, model } from "mongoose";

const courseStructureSchema = new Schema({
  _id: false,
  languages: {
    type: [String],
    required: true,
  },
  frameworks: {
    type: [String],
    required: true,
  },
  tools: {
    type: [String],
    required: true,
  },
});

const courseSchema = new Schema({
  title: {
    type: String,
    require: true,
    minLength: 3,
  },
  numberOfClasses: {
    type: Number,
    min: 1,
    require: true,
  },
  trainer: {
    type: String,
    require: true,
  },
  assistant: {
    type: String,
    required: true,
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  courseStructure: {
    type: courseStructureSchema,
    required: true,
  },
});
const Course = model("Course", courseSchema);

export default Course;
