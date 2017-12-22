const { Users, usersMethods, Weeks, weeksMethods } = require('./models');
const bot = require('./bot');
const h = require('./helpers');
const v = h.validations;

// reg user
bot.onText(/\/reg/, (msg, match) => {
  const username = msg.chat.username || '';
  const firstName = msg.chat.first_name || '';
  const chatId = msg.chat.id;
  const msgId = msg.message_id;
  v.userExist(username)
    .then((result) => {
      if (result === false) {
        usersMethods.insert({
          username,
          firstName,
          chatId
        }, () => {
          bot.send(chatId, 'ok!', msgId);
        });
      } else {
        bot.send(chatId, 'You already registered', msgId);
      }
    });
});

// get all users
bot.onText(/\/users/, (msg, match) => {
  const username = msg.chat.username;
  const chatId = msg.chat.id;
  const msgId = msg.message_id;
  usersMethods.getAll((users) => {
    bot.send(chatId, JSON.stringify(users, null, 2), msgId);
  });
});

// get user by username
bot.onText(/\/user (.+)/, (msg, match) => {
  const username = msg.chat.username;
  const chatId = msg.chat.id;
  const msgId = msg.message_id;
  const usernameQuery = match[1];
  usersMethods.get(usernameQuery, (user) => {
    bot.send(chatId, JSON.stringify(user, null, 2), msgId);
  });
});