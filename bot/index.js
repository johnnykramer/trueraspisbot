const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv').config();

TelegramBot.prototype.send = (chatId, msg, msgId) => {
	const options = {
		reply_to_message_id: msgId,
	};
	bot.sendMessage(chatId, msg, options)
}

const bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});

module.exports = bot;