require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const TelegramBot = require('node-telegram-bot-api');

const token = '7081623809:AAGpQhdeJcuQrz62YgXD3pKTXveEddNF0hU';
const chatId = '1928227864';

if (!token || !chatId) {
  console.error('Telegram Bot Token or Chat ID not provided!');
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/send_message', (req, res) => {
  const { message } = req.body;

  bot.sendMessage(chatId, message)
    .then(() => res.json({ status: 'success' }))
    .catch(err => {
      console.error('Error sending message:', err);
      res.json({ status: 'error', message: err.message });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
