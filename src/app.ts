import express from "express";

const app = express();
import authRoute from "./route/globals/auth/authRoute";
app.use(express.json());

app.use("/teaching", authRoute);

export default app;
