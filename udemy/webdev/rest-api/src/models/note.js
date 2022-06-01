const mongoose = require("mongoose");
const noteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
