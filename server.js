const express = require('express');
const helmet = require('helmet');

const server = express();

const projectsRoute = require('./data/routes/projectsRoute');
const actionsRoute = require('./data/routes/actionsRoute');



server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1>test</h1>');
  });

server.use('/api/actions', actionsRoute);
server.use('/api/projects', projectsRoute);

module.exports = server;
