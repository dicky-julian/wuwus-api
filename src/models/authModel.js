const db = require('../helpers/mysql');
const table = 'tb_user';

module.exports = {
    registerM: (data => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO ${table} SET ?`, data, ((err, result) => {
                console.log(err);
                if (err) reject(err);
                resolve(result);
            }))
        })
    })
}