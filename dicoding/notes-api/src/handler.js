const {nanoid} = require('nanoid');
const notes = require('./notes');

const addNoteHandler = (req, h) => {
  const {title, tags, body} = req.payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title,
    tags,
    body,
    id,
    createdAt,
    updatedAt,
  };

  notes.push(newNote);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Notes Added',
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Add New Notes Failed',
  });
  response.code(500);
  return response;
};

const getAllNotesHandler = (req, h) => ({
  status: 'success',
  data: {
    notes,
  },
});

const getNoteByIdHandler = (req, h) => {
  const {id} = req.params;
  const note = notes.filter((n) => n.id === id)[0];

  if (note !== undefined) {
    return {
      status: 'success',
      data: {
        note,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    nessage: 'Notes Not Found',
  });
  response.code(404);
  return response;
};

const editNoteByIdHandler = (req, h) => {
  const {id} = req.params;
  const {title, tags, body} = req.payload;
  const updatedAt = new Date().toISOString();

  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt,
    };

    const response = h.response({
      status: 'success',
      message: 'Notes Updated',
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Failed to update notes',
  });
  response.code(404);
  return response;
};

const deleteNoteByIdHandler = (req, h) => {
  const {id} = req.params;

  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes.splice(index, 1);

    const response = h.response({
      status: 'success',
      message: 'Notes Deleted',
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Failed to delete notes',
  });
  response.code(404);
  return response;
};

module.exports = {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
};
