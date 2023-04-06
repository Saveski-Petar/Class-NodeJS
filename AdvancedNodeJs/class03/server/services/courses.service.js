import Course from "../model/courses.model.js";
import StudentService from "./student.service.js";

export default class CoursesService {
  static async getAllCourses() {
    const courses = await Course.find({});
    return courses;
  }

  static async getCourseByID(courseID) {
    const course = await Course.findById(courseID).populate("students");
    if (!course) throw new Error(`Course with id ${courseID} doesn't exist!!`);
    return course;
  }

  static async addNewCourses(courseInfo) {
    const course = new Course(courseInfo);
    const createdCourse = await course.save();

    return createdCourse;
  }
  static async updateCourses(courseID, updateCourseInfo) {
    const course = await Course.findById(courseID);
    if (!course) throw new Error(`Course with id ${courseID} doesn't exist!!`);

    const keys = Object.keys(updateCourseInfo);

    keys.forEach((key) => {
      if (key !== "_id" && key !== "__v") {
        course[key] = updateCourseInfo[key];
      }
    });
    await course.save();

    return course;
  }
  static async deleteCourses(courseID) {
    await Course.findByIdAndDelete(courseID);
  }

  static async enrollStudents(courseID, studentIDs) {
    const course = await Course.findById(courseID);
    if (!course) throw new Error(`Course with id ${courseID} doesn't exist!!`);
    course.students = studentIDs;
    for (const studentID of studentIDs) {
      await StudentService.updateStudent(studentID, { course: courseID });
    }
    await course.save();
    return course;
  }
}
