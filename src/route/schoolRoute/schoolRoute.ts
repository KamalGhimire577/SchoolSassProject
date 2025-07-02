// routes/school/schoolRoute.ts
import express, { Router } from "express";
import { createSchool } from "../../controller/school/schoolController";

const router: Router = express.Router();

router.route("/").post(createSchool);

export default router;
