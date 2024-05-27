const express = require('express');
const router = express.Router();
const authorize = require('../_middleware/authorize');
const reviewService = require('./review.service');

router.get('/', authorize(), getAll);
router.get('/:id', authorize(), getById);
router.get('/appointment/:appointmentId', authorize(), getByAppointmentId);
router.post('/', authorize(), create);
router.put('/:id', authorize(), update);
router.delete('/:id', authorize(), _delete);

module.exports = router;

function getAll(req, res, next) {
    reviewService.getAll()
        .then(reviews => res.json(reviews))
        .catch(next);
}

function getById(req, res, next) {
    reviewService.getById(req.params.id)
        .then(review => review ? res.json(review) : res.sendStatus(404))
        .catch(next);
}

function getByAppointmentId(req, res, next) {
    reviewService.getByAppointmentId(req.params.appointmentId)
        .then(reviews => reviews ? res.json(reviews) : res.sendStatus(404))
        .catch(next);
}

function create(req, res, next) {
    reviewService.create(req.body)
        .then(() => res.json({ message: 'Review created successfully' }))
        .catch(next);
}

function update(req, res, next) {
    reviewService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'Review updated successfully' }))
        .catch(next);
}

function _delete(req, res, next) {
    reviewService.delete(req.params.id)
        .then(() => res.json({ message: 'Review deleted successfully' }))
        .catch(next);
}
