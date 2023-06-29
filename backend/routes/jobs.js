import express from "express";
import Jobs from "../models/job.model.js";

const router = express.Router();

router.route("/").get((req, res) => {
  Jobs.find()
    .then((jobs) => res.json(jobs))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/add").post((req, res) => {
  const title = req.body.title;
  const type = req.body.type;

  const newJob = new Jobs({
    title,
    type,
  });
  newJob
    .save()
    .then(() => res.json("New job added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").get((req, res) => {
  Jobs.findById(req.params.id)
    .then((job) => res.json(job))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").delete((req, res) => {
  Jobs.findByIdAndDelete(req.params.id)
    .then(() => res.json("Job is deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/update/:id").post((req, res) => {
  Jobs.findById(req.params.id).then((job) => {
    job.title = req.body.title;
    job.type = req.body.type;

    job
      .save()
      .then(() => res.json("Job updated!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

export default router;
