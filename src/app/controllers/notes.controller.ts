import express, { Request, Response } from "express";
import { Note } from "../models/notes.model";

export const notesRoutes = express.Router();

notesRoutes.post("/create-note", async (req: Request, res: Response) => {
  const body = req.body;

  // const myNote = new Note({
  //   title: "Learning Mongoose",
  // });

  // await myNote.save();

  const note = await Note.create(body);

  res.status(201).json({
    success: true,
    message: "Note created successfully!",
    note,
  });
});

notesRoutes.get("/", async (req: Request, res: Response) => {
  const notes = await Note.find().populate("user");

  res.status(201).json({
    success: true,
    message: "Note created successfully!",
    notes,
  });
});

notesRoutes.get("/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const note = await Note.findById(noteId);

  res.status(201).json({
    success: true,
    message: "Note created successfully!",
    note,
  });
});

notesRoutes.patch("/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const updatedBody = req.body;
  const note = await Note.findByIdAndUpdate(noteId, updatedBody, { new: true });

  res.status(201).json({
    success: true,
    message: "Note updated successfully!",
    note,
  });
});

notesRoutes.delete("/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const note = await Note.findByIdAndDelete(noteId);

  res.status(201).json({
    success: true,
    message: "Note deleted successfully!",
    note,
  });
});
