import { Router } from "express";
import studentRoutes from "./routes/student.routes.js";
import coursesRoutes from "./routes/courses.routes.js";
const router = Router();

// courses routes
router.use("/courses", coursesRoutes);

// student routes
router.use("/students", studentRoutes);

export default router;
