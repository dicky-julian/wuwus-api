const bcrypt = require('bcrypt');
const Auth = require('../models/authModel');
const User = require('../models/userModel');
const { setResponse, getToken } = require('../helpers');

module.exports = {
    loginC: (async (req, res) => {
        try {
            const userData = req.body;
            const userByUname = await User.getUserByUnameM(userData.username);
            const hashPass = userByUname[0].password;
            const verifyPass = bcrypt.compareSync(userData.password, hashPass);
            if (!verifyPass) return setResponse(res, 401, 'Unauthorized');

            const tokenData = {
                id: userByUname[0].id,
                fullname: userByUname[0].fullname
            }

            const token = await getToken(tokenData);
            return setResponse(res, 200, 'Successfully login', token);
        } catch (err) {
            return setResponse(res, err.status || 400, err.message);
        }
    }),
    registerC: (async (req, res) => {
        const userData = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(userData.password, salt);
        userData.code_user = `${userData.username}${Date.now()}`;
        userData.password = hashPass;
        try {
            await Auth.registerM(userData);
            delete userData.password;
            return setResponse(res, 200, 'Successfully created user', userData);
        } catch (err) {
            return setResponse(res, err.status || 400, err.message);
        }
    })
}