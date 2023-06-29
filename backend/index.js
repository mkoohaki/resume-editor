import app from "./server.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 8000;
const uri = process.env.URI;
const connection = mongoose.connection;

mongoose.connect(uri, { useNewUrlParser: true });

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

connection.once("open", () => {
  console.log("MongoDB database connection is established successfully");
});

export default mongoose;
