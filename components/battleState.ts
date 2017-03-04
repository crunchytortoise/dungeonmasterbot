"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import './skill';
//import './stats';
//import './Profession';
import Character from "./character";
import Enemy from "./enemy";
export default class BattleState {
    players: Array<Character>;
    enemys: Array<Enemy>;
    playersThisTurn: Array<Character>;
    enemysThisTurn: Array<Enemy>;
    currentTurn: String;
    constructor(players: Array<Character>, enemys: Array<Enemy>) {
        this.players = players
        this.enemys = enemys
    }
    
    battleOver () {
        return this.enemys.length == 0 || this.players.length ==0;
    }
    
    // useSkill() {
    //     if(this.profssion = 'mage') {
    //         return

    //     }
    //     if(this.profssion = 'warrior') {
    //         return

    //     }
    //     if(this.profssion = 'rogue') {
    //         return
    //     }
    // }
    
    attack() { 
        return 5
    }
    
    takeDamage() {
        
    }
    
    returnToMaxHeath() {
    }

    heal(amount: Number) {
    } 
    
    beginTurn() {
        if(this.playersThisTurn.length != 0) {
            return "player"
        }
        else if(this.playersThisTurn.length != 0) {
            return "player"
        }
        else {
            if(this.currentTurn = "player"){
                for(let x in this.enemys) {                      
                    this.enemysThisTurn.push(this.enemys[x]);
                }
            }
            if(this.currentTurn = "enemy"){
                for(let x in this.players) {                      
                    this.enemysThisTurn.push(this.players[x]);
                }
            }

        }
    }

}
