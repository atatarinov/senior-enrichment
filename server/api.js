'use strict'
const api = require('express').Router()
const bodyParser = require('body-parser');
bodyParser.urlencoded({extended: false});
const db = require('../db');

const models = require('../db/models');
const Campus = models.Campus;
const Student = models.Student;

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
// I know this because we automatically send index.html for all requests that don't make sense in our backend.
// Ideally you would have something to handle this, so if you have time try that out!
// api.get('/hello', (req, res) => res.send({ hello: 'world' }))


api.get('/campuses', (req, res, next) => {
	Campus.findAll({
		include: [Student]
	})
		.then(campuses => {
			res.json(campuses);
		})
		.catch(next);
});

api.get('/campuses/:campusId', (req, res, next) => {
	let id = req.params.campusId;

	Campus.findById(id, {include: [Student]})
		.then(campus => {
			res.json(campus);
		})
		.catch(next);
});

api.get('/students', (req, res, next) => {
	Student.findAll({ include: [Campus]})
		.then(students => {
			res.json(students);
		})
		.catch(next);
});

api.get('/students/:studentId', (req, res, next) => {
	let id = req.params.studentId;

	Student.findById(id, {include: [Campus]})
		.then(student => {
			res.json(student);
		})
		.catch(next);
});

//*****
// api.get('/students/:studentId/campuses', (req, res, next) => {
// 	console.log('*****', req.student);
// 	req.student.getCampus()
// 		.then(campus => {

// 			res.json(campus)
// 		})
// 		.catch(next);
// });

api.post('/campuses/create', (req, res, next) => {
	Campus.create(req.body)
		.then(campus => {
			res.status(201).json(campus);
		})
		.catch(next);
});

api.post('/students/create', (req, res, next) => {
	Student.create(req.body)
		.then(student => {
			res.status(201).json(student);
		})
		.catch(next);
});

api.put('/students/update', (req, res, next) => {
	Student.findById(req.body.id)
		.then(student => {
			return student.update(req.body);
		})
		.then(student => {
			res.status(200).json(student);
		})
		.catch(next);
});

api.put('/campuses/update', (req, res, next) => {
	Campus.findById(req.body.id)
		.then(campus => {
			return campus.update(req.body);
		})
		.then(campus => {
			res.status(200).json(campus);
		})
		.catch(next);
});

api.delete('/campuses/delete', (req, res, next) => {
	Campus.destroy({
		where: {
			name: req.body.name
		}
	})
	.then(() => {
		res.status(200).json('Campus Successfully Destroyed');
	})
	.catch(next);
});

api.delete('/students/delete', (req, res, next) => {
	Student.destroy({
		where: {
			name: req.body.name
		}
	})
	.then(() => {
		res.status(200).json('Student Successfully Destroyed');
	})
	.catch(next);
});


module.exports = api;
