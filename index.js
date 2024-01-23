const express = require('express');
const githubRoutes = require('./routes/githubRoutes');

const server = express();
server.use('/api', githubRoutes);

server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto http://localhost:3000/api/top-google-repos');
});