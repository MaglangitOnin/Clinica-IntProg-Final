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
    const [rows] = await db.connection.query('SELECT * FROM reviews');
    return rows;
}

async function getById(id) {
    const [rows] = await db.connection.query('SELECT * FROM reviews WHERE id = ?', [id]);
    return rows[0];
}

async function getByAppointmentId(appointmentId) {
    const [rows] = await db.connection.query('SELECT * FROM reviews WHERE appointment_id = ?', [appointmentId]);
    return rows;
}

async function create(review) {
    const result = await db.connection.query('INSERT INTO reviews SET ?', review);
    return result[0].insertId;
}

async function update(id, review) {
    await db.connection.query('UPDATE reviews SET ? WHERE id = ?', [review, id]);
}

async function _delete(id) {
    await db.connection.query('DELETE FROM reviews WHERE id = ?', [id]);
}
