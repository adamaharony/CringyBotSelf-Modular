/*
         © Copyright Adam Aharony (a.k.a. Cringy Adam)
                    All rights reserved
       Twitter: @AdamAharony, Discord: @Cringy Adam#4611
*/

const moment = require('moment');
require('moment-duration-format');
exports.run = (client, message, args) => {
    message.delete();
    message.channel.send('', {
        embed: {
            author: {
                name: client.user.username
            },
            color: 0x008AF3,
            fields: [{
								name: 'Server Count:',
								value: `I am on ${client.guilds.size} servers.`
						},
						{
								name: 'Channel Count:',
								value: `I am on ${client.channels.size} channels.`
						},
						{
								name: 'Playing:',
								value: `\`${client.user.presence.game.name}\``
						},
						{
                name: 'Uptime:',
                value: `${moment.duration(client.uptime).format("D [days], H [hrs], s [secs]")}`
            },
            {
                name: 'RAM Usage:',
                value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`
            }
            ],
            timestamp: new Date(),
            footer: {
                text: 'CringyBot Selfbot edition',
                icon_url: client.user.avatarURL
            }
        }
    });
};
