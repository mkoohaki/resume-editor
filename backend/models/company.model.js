import mongoose from "mongoose";

const Schema = mongoose.Schema;

const companySchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    conpanyLocation: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model("Company", companySchema);

export default Company;
