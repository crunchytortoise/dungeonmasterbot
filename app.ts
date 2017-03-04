require('dotenv').config();

import * as restify from 'restify';
import * as builder from 'botbuilder';
import addCharacterCreationDialog from './dialog/characterCreation';
import addBattleStateDiaolg from './dialog/battleDialog'
import Character  from "./components/character";
import Enemy  from "./components/enemy";
import BattleState from "./components/battleState"
import Bot from './bot';

class App {
    run() {
        const bot = new Bot();

        const server = restify.createServer();
        server.post('/api/messages', (bot.connector('*') as builder.ChatConnector).listen());
        server.listen(3000, () => console.log(`${server.name} listening to ${server.url}`));
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
                
                if(session.userData.character){
                    game(session);

                }
            },
        ]);
        bot.on('deleteUserData', function (session) {
        	session.userData = null;
		});
        
        function game(session) {
           let battleState = new BattleState([session.userData.character],[new Enemy("Goblin1"), new Enemy("Goblin2")] )

        }

    }
    
}

const app = new App();
app.run();
