import express from "express";

const app = express();
import authRoute from "./route/globals/auth/authRoute";
import schoolRoute from "./route/schoolRoute/schoolRoute"
app.use(express.json());

app.use("/teaching", authRoute);
app.use("/teaching/school", schoolRoute);

export default app;
