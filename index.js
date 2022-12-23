const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv/config')

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
})

client.on('ready', () => {
  console.log('The bot is ready')
})

client.on('messageCreate', (message) => {
  if (message.content === 'joke') {
    message.reply('What is a sea monster’s favorite snack? Ships and dip.')

  if(message.content === 'next joke')
    message.reply('How do robots eat guacamole? With computer chips.”')

  else if(message.content === 'another joke')
    message.reply('What do you call a fish without eyes? Fsh.”')



  }
})

client.login(process.env.TOKEN)
