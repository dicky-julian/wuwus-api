const Chat = require('../models/chatModel');
const Room = require('../models/roomModel');
const { setResponse } = require('../helpers');

module.exports = {
    getChatByRoomC: (async (req, res) => {
        try {
            const id_room = req.params.id;
            const chatData = await Chat.getChatByRoomM(id_room);
            return setResponse(res, 200, 'Success to Get a Data', chatData);
        } catch (err) {
            return setResponse(res, err.status || 400, err.message);
        }
    }),
    addChatC: (async (req, res) => {
        try {
            const data = req.body; // id_room, id_user, type, message
            const room = await Room.getRoomByIdM(data.id_room);
            const chat = await Chat.addChatM(data);

            const roomData = {
                status: data.id_user == room[0].user1 ? 2 : 3,
                id_chat: chat.insertId,
                last_chat: data.message
            }

            await Room.updateRoomByIdM(roomData, data.id_room);
            return setResponse(res, 200, 'Successfully Add Chat');
        } catch (err) {
            return setResponse(res, err.status || 400, err.message);
        }
    })
}