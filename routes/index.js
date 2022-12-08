const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/', (req, res) => {
    res.render('index', { projects });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/project/:id', (req, res) => {
    const projectId = req.params.id;
    const project = projects.find((project) => project.id === +projectId);

    res.render('project', { project });
})

module.exports = router;