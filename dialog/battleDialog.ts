require('dotenv').config();

import * as restify from 'restify';
import * as builder from 'botbuilder';
import Bot from '../bot';
import Character from '../components/character'


//TODO: replace character data with character class
//TODO: Add skill choosing

export default function addBattleStateDialog(bot: Bot){
	bot.dialog('/playerTurnBegin', [
            (session, args) => {
                builder.Prompts.choice(session, "What do you do?", ['attack', 'ability', 'item']);
            },
            (session, results) => {
                session.userData.currentTurnAction = results.response.entity;
                session.beginDialog('/playerSelectTarget')
            },
    ]);
	bot.dialog('/playerSelectTarget', [
            (session, args) => {
                builder.Prompts.text(session, `Who would you like to target?`);
            },
            (session, results) => {
                session.userData.characterName = results.response;
                session.beginDialog('/characterclass');
            },
    ]);
   
}