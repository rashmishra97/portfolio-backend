import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contactRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import mongoose from "mongoose"

// const  url =  "mongodb+srv://portfolio_user:FFMYVEQ%40123rash@cluster0.udzlnas.mongodb.net/?appName=Cluster0/portfolio"
const url = process.env.MONGO_URI;
const app = express();

app.use(cors());
app.use(express.json());


const connectDB = async () => {
  console.log("inside connectdb");
  try {
    console.log("inside try");
    await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
    // await mongoose.connect(url);
    console.log(" MongoDB Database Connected Successfully");
  } catch (error) {
    console.error(" MongoDB Error:", error.message);
    process.exit(1);
  }
};
connectDB()

// Routes
app.get("/", (req, res) => {
  res.send("Cloud holaaaaa Portfolio Backend Running 🚀");
});

app.use("/api/contacts", contactRoutes);
app.use("/api/messages", messageRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    db: mongoose.connection.readyState,
    uptime: process.uptime(),
  });
});






