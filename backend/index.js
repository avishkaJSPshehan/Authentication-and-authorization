import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World 123456!");
});

app.listen(5000, () => {
  connectDB();
  console.log("Server is runngin on port 5000");
});
