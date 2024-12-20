
const mongoose = require('mongoose');
const Chat = require('../models/Chat');

exports.createChat = async (req, res) => {
    try {
        const chat = await Chat.create(req.body);
        res.status(201).json(chat);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
    }
};

exports.addMessage = async (req, res) => {
    try {
        const { chatId, content, sender } = req.body;

        // Validate chatId
        if (!mongoose.Types.ObjectId.isValid(chatId)) {
            return res.status(400).json({ error: 'Invalid chatId' });
        }

        // Find chat by id
        const chat = await Chat.findById(chatId);
        if (!chat) {
            return res.status(404).json({ error: 'Chat not found' });
        }

        // Add message to chat
        chat.messages.push({ content, sender });
        await chat.save();

        res.status(200).json(chat);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
    }
};

exports.getChats = async (req, res) => {
    try {
        const chats = await Chat.find(req.query);
        res.status(200).json(chats);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
    }
};

exports.getChatById = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate id
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid chatId' });
        }

        const chat = await Chat.findById(id);
        if (!chat) {
            return res.status(404).json({ error: 'Chat not found' });
        }

        res.status(200).json(chat);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
    }
}


exports.updateChat = async (req, res) => {
    try {
        const { id } = req.params; // Extract the chat ID from the URL
        const updateData = req.body; // Get the update data from the request body

        // Validate the ID
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid chatId' });
        }

        // Update the chat document
        const updatedChat = await Chat.findByIdAndUpdate(id, updateData, {
            new: true, // Return the updated document
            runValidators: true, // Ensure validation rules are applied
        });

        if (!updatedChat) {
            return res.status(404).json({ error: 'Chat not found' });
        }

        res.status(200).json(updatedChat); // Return the updated chat
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};







;
