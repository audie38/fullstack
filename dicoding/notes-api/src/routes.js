const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (req, h) => {
      return 'OK!';
    },
  },
  {
    method: '*',
    path: '/',
    handler: (req, h) => {
      return 'Method Not Allowed';
    },
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (req, h) => {
      return 'Page Not Found';
    },
  },
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
