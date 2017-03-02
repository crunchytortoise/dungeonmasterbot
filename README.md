# dungeonmasterbot Bot

This bot has been created using [Microsoft Bot Framework](https://dev.botframework.com), and scaffolded using the [Bot Builder Yeoman generator](https://github.com/GeekTrainer/generator-botbuilder).

This bot is designed to do the following:

Take yall on an adventure

## Getting Started

### Structure

`app.ts` references the bot and starts a [Restify](http://restify.com/) server. `bot.ts` has a simple multi-turn dialog which sends the name and description of the bot, and then asks the user for their name.

### Running the bot

```
tsc
node app.js
```

### Configuring the bot

The template uses [dotenv](https://github.com/motdotla/dotenv) for managing application settings.