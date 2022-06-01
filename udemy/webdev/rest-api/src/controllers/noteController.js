const Note = require("../models/note");
const AsyncHandler = require("express-async-handler");
const res = require("express/lib/response");

const addNote = AsyncHandler(async (req, res) => {
  const { title, tags, body } = req.payload;
  const newNote = new Note({
    title: title,
    tags: tags,
    body: body,
  });

  newNote.save((err) => {
    if (err) {
      res.status(500).send(err);
      throw new Error(err);
    }
    res.status(201).json(newNote);
  });
});

const getAllNotes = AsyncHandler(async (req, res) => {
  const notes = await Note.find({});
  res.status(200).json(notes);
});

const getNoteById = AsyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) {
    res.status(404);
    throw new Error("Notes Not Found");
  }

  res.status(200).json(note);
});

const updateNote = AsyncHandler(async (req, res) => {
  const id = req.params.id;
  const noteObj = await Note.findById(id);
  if (!noteObj) {
    res.status(404).send("Invalid Id");
    throw new Error("Invalid Id");
  }
  const { title, tags, body } = req.body;
  const newData = {
    title: title,
    tags: tags,
    body: body,
  };
  const successResult = {
    status: "OK",
    message: "Update Success!",
  };

  Note.findByIdAndUpdate(id, newData, (err) => {
    if (err) {
      res.status(500).send(err);
      throw new Error(err);
    }
    res.status(200).json(successResult);
  });
});

const deleteNote = AsyncHandler(async (req, res) => {
  const id = req.params.id;
  const noteObj = await Note.findById(id);
  if (!noteObj) {
    res.status(404).send("Invalid Id");
    throw new Error("Invalid Id");
  }

  Note.findByIdAndDelete(id, (err) => {
    if (err) {
      res.status(500).send(err);
      throw new Error(err);
    }

    res.status(200).json({ message: "Delete Success!" });
  });
});

module.exports = {
  addNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
};
