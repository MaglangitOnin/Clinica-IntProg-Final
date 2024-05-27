const db = require('../_helpers/db');

module.exports = {
    getAll,
    getById,
    getByAppointmentId,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await db.review.getAll();
}

async function getById(id) {
    return await db.review.getById(id);
}

async function getByAppointmentId(appointmentId) {
    return await db.review.getByAppointmentId(appointmentId);
}

async function create(params) {
    return await db.review.create(params);
}

async function update(id, params) {
    return await db.review.update(id, params);
}

async function _delete(id) {
    return await db.review.delete(id);
}
