import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./db/connectDB.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is runngin on port: ", PORT);
});
