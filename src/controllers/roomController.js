const User = require('../models/userModel');
const Chat = require('../models/chatModel');
const Room = require('../models/roomModel');
const { setResponse } = require('../helpers');

module.exports = {
    getRoomByUserC: (async (req, res) => {
        try {
            const id_user = req.params.id;
            const roomData = await Room.getUserRoomM(id_user);
            return setResponse(res, 200, 'Success to Get a Data', roomData);
        } catch (err) {
            return setResponse(res, err.status || 400, err.message);
        }
    }),
    addFriendRoomC: (async (req, res) => {
        try {
            const { id_user, code_user } = req.body;
            const user2Data = await User.getUserByCodeM(code_user);
            const data = {
                status: 1,
                user1: id_user,
                user2: user2Data[0].id
            }
            const room = await Room.getRoomByUserM(data.user1, data.user2);
            if (room.length) return setResponse(res, 402, 'DuplicateError');
            const chatData = {
                id_room: 00000,
                id_user: id_user
            }
            const addChat = await Chat.addChatM(chatData);
            data.id_chat = addChat.insertId;
            await Room.addRoomM(data);
            return setResponse(res, 200, 'Successfully Add Room');
        } catch (err) {
            return setResponse(res, err.status || 400, err.message);
        }
    })
}