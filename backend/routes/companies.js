import express from "express";
import Companies from "../models/company.model.js";

const router = express.Router();

router.route("/").get((req, res) => {
  Companies.find()
    .then((companies) => res.json(companies))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/add").post((req, res) => {
  const companyName = req.body.companyName;
  const companyLocation = req.body.companyLocation;

  const newCompany = new Companies({
    companyName,
    companyLocation,
  });
  newCompany
    .save()
    .then(() => res.json("New company added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").get((req, res) => {
  Companies.findById(req.params.id)
    .then((companie) => res.json(companie))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").delete((req, res) => {
  Companies.findByIdAndDelete(req.params.id)
    .then(() => res.json("Company is deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

export default router;
