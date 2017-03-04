require('dotenv').config();

import * as restify from 'restify';
import * as builder from 'botbuilder';
import Bot from '../bot';
import Character from '../components/character'


//TODO: replace character data with character class
//TODO: Add skill choosing

export default function addCharacterCreationDialog(bot: Bot){
	bot.dialog('/createcharacter', [
            (session, args) => {
                session.send(`Welcome to character creation!`);
                session.beginDialog('/charactername');
            },
            (session, results) => {
            },
    ]);
	bot.dialog('/charactername', [
            (session, args) => {
                builder.Prompts.text(session, `What would you like to name your character?`);
            },
            (session, results) => {
                session.userData.characterName = results.response;
                session.beginDialog('/characterclass');
            },
    ]);
    bot.dialog('/characterclass', [
        (session, args) => {
        	builder.Prompts.choice(session, "What class?", ['mage', 'warrior', 'rogue'])
        },
        (session, results) => {
            session.userData.character = new Character(session.userData.characterName, results.response.entity)
            session.endConversation(`Welcome, ${session.userData.characterName} the ${results.response.entity}`);
        },
    ]);
        // bot.dialog('/characterclass', [
        //     (session, args, next) => {
        //         const botName = 'sample';
        //         const description = `sample`;

        //         session.send(`Hi there! I'm ${botName}`);
        //         session.send(`In a nutshell, here's what I can do:\n\n${description}`);

        //         builder.Prompts.text(session, `What's your name?`);
        //     },
        //     (session, results, next) => {
        //         session.endConversation(`Welcome, ${results.response}`);
        //     },
        // ]);
}