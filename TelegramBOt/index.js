const { Telegraf } = require('telegraf');
// const { message } = require('telegraf/filters');

const bot = new Telegraf("p6585351703:AAHHXJr_6F-zs-dSzBZr4MPhJKPJ0gYyoVU");
bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();