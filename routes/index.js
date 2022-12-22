const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/', (req, res) => {
    res.render('index', { projects });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/project/:id', (req, res, next) => {
    const projectId = req.params.id;
    const project = projects.find((project) => project.id === +projectId);

    if (project) {
        res.render('project', { project });
    } else {
        const err = new Error('Not found.');
        err.status = 404;
        next(err);
    }
});

module.exports = router;