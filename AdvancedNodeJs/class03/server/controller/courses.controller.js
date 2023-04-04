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
      res.status(500).send(error);
    }
  }
  static async addNewCourses(req, res) {
    try {
      const newCourse = await CoursesService.addNewCourses(req.body);
      res.status(200).send(newCourse);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
