import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./db/connectDB.js";
import authRouter from "./routes/auth.route.js"

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Authentication and Authorization");
});

app.use("/api/auth",authRouter)

app.listen(5000, () => {
  connectDB();
  console.log("Server is runngin on port 5000");
});
