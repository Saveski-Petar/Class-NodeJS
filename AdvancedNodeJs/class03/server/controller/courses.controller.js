import CoursesService from "../services/courses.service.js";

export default class CoursesController {
  static async getCourses(req, res) {
    try {
      const id = req.params.id;
      if (id) {
        const course = await CoursesService.getCourseByID(id);
        res.status(200).send(course);
      } else {
        const allCourses = await CoursesService.getAllCourses();
        res.status(200).send(allCourses);
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async addNewCourses(req, res) {
    try {
      const newCourse = await CoursesService.addNewCourses(req.body);
      res.status(200).send(newCourse);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async updateCourses(req, res) {
    try {
      const updatedCourse = await CoursesService.updateCourses(
        req.params.id,
        req.body
      );
      res.status(200).send(updatedCourse);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async deleteCourses(req, res) {
    try {
      await CoursesService.deleteCourses(req.params.id);
      res.sendStatus(200);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  static async enrollStudents(req, res) {
    try {
      const courseID = req.params.id;
      const studentIDs = req.body.students;
      console.log(studentIDs);
      const response = await CoursesService.enrollStudents(
        courseID,
        studentIDs
      );
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
