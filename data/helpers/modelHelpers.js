const db = require('../dbConfig');

const knex = require('knex');
const dbConfig = require('../../knexfile')

const db = knex(dbConfig.development);

module.exports= {
    getProjects = () => {
        return db('projects');
    },

    addProject: (project) => {
        return db("projects")
        .insert(project)
    },

    getProjectsbyId: (id) => {
        return db('project as p')
        .select(
            'p.id',
            'p.title',
            'p.description',
            'p.completed',
            'a.id',
            'a.description',
            'a.notes',
            'a.completed'
        )
    }



}