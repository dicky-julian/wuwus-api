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
    getUserByUnameM: ((uname) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM ${table} WHERE username=?`, uname, ((err, result) => {
                if (err) reject(err);
                if (!result.length) reject({status: 402, message: 'InvalidError'});
                resolve(result);
            }))
        })
    })
}