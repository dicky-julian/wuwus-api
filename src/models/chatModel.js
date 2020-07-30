const db = require('../helpers/mysql');
const table = 'tb_chat';

module.exports = {
    getChatByRoomM: (id_room => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM ${table} WHERE id_room=${id_room} ORDER BY id DESC`, ((err, result) => {
                if (err) reject(err);
                if (!result.length) reject({status: 402, message: 'InvalidError'});
                resolve(result);
            }));
        })
    }),
    addChatM: (data => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO ${table} SET ?`, data, ((err, result) => {
                if (err) reject(err);
                resolve(result);
            }))
        })
    })
}