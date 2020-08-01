const db = require('../helpers/mysql');
const table = 'tb_user';

module.exports = {
    getUserM: (() => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM ${table}`, ((err, result) => {
                if (err) reject(err);
                if (!result.length) reject({message: `Data is empty`});
                resolve(result);
            }))
        })
    }),
    getUserByIdM: (id => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM ${table} WHERE id=?`, id, ((err, result) => {
                if (err) reject(err);
                if (!result.length) reject({status: 404, message: 'EmptyError'});
                resolve(result);
            }))
        })
    }),
    getUserByUnameM: (uname => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM ${table} WHERE username=?`, uname, ((err, result) => {
                if (err) reject(err);
                if (!result.length) reject({status: 404, message: 'EmptyError'});
                resolve(result);
            }))
        })
    }),
    getUserByCodeM: (code => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM ${table} WHERE code_user=?`, code, ((err, result) => {
                if (err) reject(err);
                if (!result.length) reject({status: 404, message: 'EmptyError'});
                resolve(result);
            }))
        })
    }),
    updateUserByIdM: ((data, id) => {
        return new Promise((resolve, reject) => {
            db.query(`UPDATE ${table} SET ? WHERE id=?`, [data, id], ((err, result) => {
                if (err) reject(err);
                resolve(result);
            }))
        })
    }),
}