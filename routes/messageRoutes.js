import express from "express";
import Message from "../models/message.js";

const router = express.Router();

// Save message
router.post("/", async (req, res) => {
  const data = await Message.create(req.body);
  res.status(201).json(data);
});

// Get messages
router.get("/", async (req, res) => {
  const data = await Message.find().sort({ createdAt: -1 });
  res.json(data);
});

export default router;

