import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import contactRoutes from "./routes/contactRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Cloud Portfolio Backend Running 🚀");
});

app.use("/api/contacts", contactRoutes);
app.use("/api/messages", messageRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "backend",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ============== ${process.env.PORT}`)
    );
  })
  .catch(err => console.error(err));
