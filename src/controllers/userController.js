const User = require('../models/userModel');
const { setResponse, unlinkFile } = require('../helpers');

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
            let data;
            const userData = await User.getUserByIdM(id_user);
            if (req.file) {
                data = { 'image': req.file.filename };
                req.io.emit('updateImage', { id_user: id_user, image: req.file.filename });
                if (userData[0].image) {
                    unlinkFile(`${__dirname}./../public/images/${userData[0].image}`);
                }
            }
            else data = req.body;
            await User.updateUserByIdM(data, id_user);
            return setResponse(res, 200, `Success to Update User's data`, data);
        } catch (err) {
            return setResponse(res, err.status || 400, err.message);
        }
    })
}