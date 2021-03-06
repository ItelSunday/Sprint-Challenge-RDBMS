const express = require('express');
const route = express.Router();

const db = require('../helpers/projectHelper');

route.get('/', (req, res) => {
    db.getAll()
      .then(project => {
        res.status(200).json(project);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  route.post('/', (req, res) => {
    const { name, description } = req.body;
    if (!name || !description) {
      res
        .status(404)
        .json({ message: 'You need a name or description there, bud' });
    }
    db.addProjects({ name, description })
      .then(project => {
        res.status(200).json(project);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  route.get('/:id', (req, res) => {
    const id = req.params.id;
    db.getProjectsById(id)
      .then(ids => {
        if (ids) {
          res.status(200).json(ids);
        } else {
          res.status(404).json({ message: 'Id cannot be found' });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  route.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    if (!body.name || !body.description) {
      res.status(404).json({ message: 'you need the fields' });
    } else if (!id) {
      res.status(404).json({ message: 'id not found' });
    }
    db.updateProjects(id, body)
      .then(updated => {
        res.status(200).json(updated);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  route.delete('/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
      res.status(404).json({ message: 'id not found' });
    }
    db.deleteProjects(id)
      .then(deleted => {
        res.status(200).json(deleted);
      })
      .catch(err => {
        res.status(500).status(err);
      });
  });
  
  module.exports = route;