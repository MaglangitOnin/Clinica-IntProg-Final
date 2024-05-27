const express = require('express');
const router = express.Router();
const authorize = require('../_middleware/authorize');
const appointmentService = require('./appointment.service');

router.get('/', authorize(Role.Admin), getAll); // Only Admins can get all appointments
router.get('/:id', authorize(), getById); // Authenticated users can get their appointment by ID
router.get('/user/:userId', authorize(), getByUserId); // Authenticated users can get appointments by user ID
router.post('/', authorize(), create); // Authenticated users can create appointments
router.put('/:id', authorize(), update); // Authenticated users can update their appointments
router.put('/:id/status', authorize(Role.Admin), updateStatus); // Only Admins can update appointment status
router.delete('/:id', authorize(), _delete); // Authenticated users can delete their appointments

module.exports = router;

function getAll(req, res, next) {
    appointmentService.getAll()
        .then(appointments => res.json(appointments))
        .catch(next);
}

function getById(req, res, next) {
    appointmentService.getById(req.params.id)
        .then(appointment => appointment ? res.json(appointment) : res.sendStatus(404))
        .catch(next);
}

function getByUserId(req, res, next) {
    appointmentService.getByUserId(req.params.userId)
        .then(appointments => appointments ? res.json(appointments) : res.sendStatus(404))
        .catch(next);
}

function create(req, res, next) {
    appointmentService.create(req.body)
        .then(() => res.json({ message: 'Appointment created successfully' }))
        .catch(next);
}

function update(req, res, next) {
    appointmentService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'Appointment updated successfully' }))
        .catch(next);
}

function updateStatus(req, res, next) {
    appointmentService.updateStatus(req.params.id, req.body.status)
        .then(() => res.json({ message: 'Appointment status updated successfully' }))
        .catch(next);
}

function _delete(req, res, next) {
    appointmentService.delete(req.params.id)
        .then(() => res.json({ message: 'Appointment deleted successfully' }))
        .catch(next);
}
