const express = require('express');
const { createChat, addMessage, getChats, getChatById, updateChat } = require('../controllers/chatController');

const router = express.Router();

router.post('/', createChat);
router.post('/add-message', addMessage);
router.get('/', getChats);
router.get('/:id', getChatById);
router.put('/:id', updateChat); // Add the PUT route for updating chats

module.exports = router;
