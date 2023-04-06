import { Router } from "express";
import CoursesController from "../controller/courses.controller.js";
import Course from "../model/courses.model.js";

const router = Router();

// courses routes
router.get("/:id?", CoursesController.getCourses);
router.post("/", CoursesController.addNewCourses);
router.put("/:id", CoursesController.updateCourses);
router.delete("/:id", CoursesController.deleteCourses);
// enroll students
router.patch("/:id/students", CoursesController.enrollStudents);
export default router;
