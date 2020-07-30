const User = require('../models/userModel');
const { setResponse } = require('../helpers');

module.exports = {
    getUserByIdC: (async (req, res) => {
        try {
            const id_user = req.params.id;
            const userData = await User.getUserByIdM(id_user);
            return setResponse(res, 200, 'Success to Get a Data', userData);
        } catch (err) {
            return setResponse(res, err.status || 400, err.message);
        }
    }),
    updateUserByIdC: (async (req, res) => {
        try {
            const id_user = req.params.id;
            const data = req.body;
            await User.updateUserByIdM(data, id_user);
            return setResponse(res, 200, `Success to Update User's data`);
        } catch (err) {
            return setResponse(res, err.status || 400, err.message);
        }
    })
}