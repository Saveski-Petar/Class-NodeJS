import StudentService from "../services/student.service.js";

export default class StudentController {
  static async getAllStudents(req, res) {
    try {
      const students = await StudentService.getAllStudents();
      res.status(200).send(students);
    } catch (error) {
      console.log("Error while getting all students ");
      res.status(500).send(error.message);
    }
  }
  static async addNewStudent(req, res) {
    try {
      const newStudent = await StudentService.addNewStudent(req.body);
      res.status(201).send(newStudent);
    } catch (error) {
      console.log("Error while adding new student");
      res.status(500).send(error.message);
    }
  }
  static async updateStudent(req, res) {
    try {
      const updatedStudent = await StudentService.updateStudent(
        req.params.id,
        req.body
      );
      res.status(200).send(updatedStudent);
    } catch (error) {
      console.log("Error while Updating student");
      res.status(500).send(error.message);
    }
  }
  static async deleteStudent(req, res) {
    try {
      await StudentService.deleteStudent(req.params.id);
      res.sendStatus(200);
    } catch (error) {
      console.log("Error while Deleting student");
      res.status(500).send(error.message);
    }
  }
}
