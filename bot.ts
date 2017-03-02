import * as builder from 'botbuilder';

export default class extends builder.UniversalBot {
    constructor() {
        super(new builder.ChatConnector());
    }
}
