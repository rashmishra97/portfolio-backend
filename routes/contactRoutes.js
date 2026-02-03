import express from "express";
import Contact from "../models/contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const data = await Contact.create(req.body);
  res.status(201).json(data);
});

router.get("/", async (req, res) => {
  const data = await Contact.find().sort({ createdAt: -1 });
  res.json(data);
});

export default router;
