const db = require('../_helpers/db');

module.exports = {
    getAll,
    getById,
    getByUserId,
    create,
    update,
    delete: _delete,
    updateStatus
};

async function getAll() {
    return await db.appointment.getAll();
}

async function getById(id) {
    return await db.appointment.getById(id);
}

async function getByUserId(userId) {
    return await db.appointment.getByUserId(userId);
}

async function create(params) {
    return await db.appointment.create(params);
}

async function update(id, params) {
    return await db.appointment.update(id, params);
}

async function updateStatus(id, status) {
    return await db.appointment.updateStatus(id, status);
}

async function _delete(id) {
    return await db.appointment.delete(id);
}
