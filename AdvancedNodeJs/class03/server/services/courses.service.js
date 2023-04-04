import Course from "../model/courses.model.js";

export default class CoursesService {
  static async getAllCourses() {
    const courses = await Course.find({});
    return courses;
  }

  static async getCourseByID(courseID) {
    const course = await Course.findById(courseID);
    if (!course) throw new Error(`Course with id ${courseID} doesn't exist!!`);
    return course;
  }

  static async addNewCourses(courseInfo) {
    const course = new Course(courseInfo);
    const createdCourse = await course.save();

    return createdCourse;
  }
}
