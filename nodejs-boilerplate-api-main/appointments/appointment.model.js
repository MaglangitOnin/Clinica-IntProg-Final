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
    const [rows] = await db.connection.query('SELECT * FROM appointments');
    return rows;
}

async function getById(id) {
    const [rows] = await db.connection.query('SELECT * FROM appointments WHERE id = ?', [id]);
    return rows[0];
}

async function getByUserId(userId) {
    const [rows] = await db.connection.query('SELECT * FROM appointments WHERE account_id = ?', [userId]);
    return rows;
}

async function create(appointment) {
    const result = await db.connection.query('INSERT INTO appointments SET ?', appointment);
    return result[0].insertId;
}

async function update(id, appointment) {
    await db.connection.query('UPDATE appointments SET ? WHERE id = ?', [appointment, id]);
}

async function updateStatus(id, status) {
    await db.connection.query('UPDATE appointments SET status = ? WHERE id = ?', [status, id]);
}

async function _delete(id) {
    await db.connection.query('DELETE FROM appointments WHERE id = ?', [id]);
}
