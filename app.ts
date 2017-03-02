require('dotenv').config();

import * as restify from 'restify';
import * as builder from 'botbuilder';
import addCharacterCreationDialog from './dialog/characterCreation';
import Bot from './bot';

class App {
    run() {
        const bot = new Bot();

        const server = restify.createServer();
        server.post('/api/messages', (bot.connector('*') as builder.ChatConnector).listen());
        server.listen(process.env.PORT, () => console.log(`${server.name} listening to ${server.url}`));
        addCharacterCreationDialog(bot);
        bot.dialog('/', [
            (session, args, next) => {
                const botName = 'DMbot';
                const description = `sample`;

                session.send(`Hi there! I'm ${botName}`);
                builder.Prompts.text(session, `Would you like to play?`);
            },
            (session, results, next) => {
            	if(results.response.toLowerCase() == 'fuck no'){
            		session.userData = null;
                	session.endConversation(`Well fuck you too then`);
            	}
            	if(results.response.toLowerCase() == 'no'){
                	session.endConversation(`Welcome, ${results.response}`);
            	}
            	else if(session.userData.characterName){
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
