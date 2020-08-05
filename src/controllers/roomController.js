const User = require('../models/userModel');
const Room = require('../models/roomModel');
const { setResponse } = require('../helpers');

module.exports = {
    getRoomByUserC: (async (req, res) => {
        try {
            const data = [];
            const id_user = req.params.id;
            const roomData = await Room.getUserRoomM(id_user);
            const fetchFriend = new Promise((resolve, reject) => {
                roomData.forEach(async (room, index, array) => {
                    let user;
                    const user1 = room.user1;
                    const user2 = room.user2;
                    if (id_user == user1) {
                        user = await User.getUserByIdM(user2);
                    } else {
                        user = await User.getUserByIdM(user1);
                    }
                    const { id, fullname, image } = user[0];
                    const result = {
                        ...room,
                        friendName: fullname,
                        friendImage: image,
                        id_friend: id
                    }
                    data.push(result);
                    if (index === array.length - 1) resolve();
                });
            });

            fetchFriend.then(() => {
                return setResponse(res, 200, 'Success to Get a Data', data);
            })
        } catch (err) {
            console.log(err)
            return setResponse(res, err.status || 400, err.message);
        }
    }),
    addFriendRoomC: (async (req, res) => {
        try {
            const { id_user, code_user } = req.body;
            // const user1Data = await User.getUserByIdM(id_user);
            const user2Data = await User.getUserByCodeM(code_user);
            const data = {
                status: 1,
                user1: id_user,
                user2: user2Data[0].id,
                // username1: user1Data[0].fullname,
                // username2: user2Data[0].fullname
            }
            if (id_user == data.user2 ) throw new Error(`Invalid user's code, Can't add your own to be your Friend`);
            const room = await Room.getRoomByUserM(data.user1, data.user2);
            if (room.length) return setResponse(res, 402, 'DuplicateError');
            await Room.addRoomM(data);
            return setResponse(res, 200, 'Successfully Add Room', user2Data[0]);
        } catch (err) {
            console.log(err);
            return setResponse(res, err.status || 400, err.message);
        }
    }),
    updateRoomByIdC: (async (req, res) => {
        try {
            const id_room = req.params.id;
            let data = req.body;
            await Room.getRoomByIdM(id_room);
            await Room.updateRoomByIdM(data, id_room);
            return setResponse(res, 200, `Success to Update User's data`, data);
        } catch (err) {
            return setResponse(res, err.status || 400, err.message);
        }
    })
}