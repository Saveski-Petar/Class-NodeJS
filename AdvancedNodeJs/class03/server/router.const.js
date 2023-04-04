import { Router } from "express";
import studentRoutes from "./routes/student.routes.js";
import coursesRoutes from "./routes/courses.routes.js";
const router = Router();

// courses routes

// student routes
router.use("/students", studentRoutes);
router.use("/courses", coursesRoutes);

export default router;
