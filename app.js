"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const restify = require("restify");
const builder = require("botbuilder");
const characterCreation_1 = require("./dialog/characterCreation");
const bot_1 = require("./bot");
class App {
    run() {
        const bot = new bot_1.default();
        const server = restify.createServer();
        server.post('/api/messages', bot.connector('*').listen());
        server.listen(process.env.PORT, () => console.log(`${server.name} listening to ${server.url}`));
        characterCreation_1.default(bot);
        bot.dialog('/', [
            (session, args, next) => {
                const botName = 'DMbot';
                const description = `sample`;
                session.send(`Hi there! I'm ${botName}`);
                builder.Prompts.text(session, `Would you like to play?`);
            },
            (session, results, next) => {
                if (results.response.toLowerCase() == 'fuck no') {
                    session.userData = null;
                    session.endConversation(`Well fuck you too then`);
                }
                if (results.response.toLowerCase() == 'no') {
                    session.endConversation(`Welcome, ${results.response}`);
                }
                else if (session.userData.characterName) {
                    session.send(`Welcome back ${session.userData.characterName}`);
                }
                else {
                    session.beginDialog('/createcharacter');
                }
            },
        ]);
        bot.on('deleteUserData', function (session) {
            session.userData = null;
        });
    }
}
const app = new App();
app.run();
