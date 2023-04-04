import { Schema, model } from "mongoose";

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
});
const Course = model("Course", courseSchema);

export default Course;
