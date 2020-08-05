const db = require('../helpers/mysql');
const table = 'tb_room';

module.exports = {
    getRoomByIdM: (id => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM ${table} WHERE id=${id}`, ((err, result) => {
                if (err) reject(err);
                if (!result.length) reject({ status: 404, message: 'EmptyError' });
                resolve(result);
            }));
        })
    }),
    getRoomByUserM: ((user1, user2) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM ${table} WHERE user1=${user1} AND user2=${user2}`, ((err, result) => {
                if (err) reject(err);
                resolve(result);
            }))
        })
    }),
    getUserRoomM: ((id_user) => {
        return new Promise((resolve, reject) => {
            // db.query(`SELECT * FROM ${table} LEFT OUTER JOIN tb_chat ON tb_chat.id = ${table}.id_chat WHERE user1=${id_user} OR user2=${id_user} ORDER BY ${table}.updated_at DESC`, ((err, result) => {
            db.query(`SELECT R.*, C.message FROM tb_room R LEFT JOIN tb_chat C ON R.id_chat = C.id WHERE R.user1=${id_user} OR R.user2=${id_user} ORDER BY R.updated_at DESC`, ((err, result) => {
                if (err) reject(err);
                if (!result) reject({ status: 404, message: 'EmptyError' });
                if (!result.length) reject({ status: 404, message: 'EmptyError' });
                resolve(result);
            }))
        })
    }),
    addRoomM: (data => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO ${table} SET ?`, data, ((err, result) => {
                if (err) reject(err);
                resolve(result);
            }))
        })
    }),
    updateRoomByIdM: ((data, id) => {
        return new Promise((resolve, reject) => {
            db.query(`UPDATE ${table} SET ? WHERE id=?`, [data, id], ((err, result) => {
                if (err) reject(err);
                resolve(result);
            }))
        })
    }),
}