import { Router } from "express";
import StudentController from "../controller/student.controller.js";

const router = Router();

// student routes
router.get(`/`, StudentController.getAllStudents);

router.post("/", StudentController.addNewStudent);
router.put("/:id", StudentController.updateStudent);
router.delete("/:id", StudentController.deleteStudent);

export default router;
