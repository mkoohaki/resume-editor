import express from "express";
import cors from "cors";
import jobRoute from "./routes/jobs.js";
import companyRoute from "./routes/companies.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/jobs", jobRoute);
app.use("/companies", companyRoute);

export default app;
