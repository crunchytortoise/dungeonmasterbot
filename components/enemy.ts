"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import './skill';
//import './stats';
//import './Profession';
export default class Enemy {
    name: string;
    profession: string; //profession: Profession;
    currentHeath: Number;
    maxHealth: Number;
    
    constructor(name: string) {
        //TODO: Change the starting health to what ever the class should be
        this.maxHealth = 5;
        this.currentHeath = 5;
        this.name = name;
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
        this.currentHeath = this.maxHealth;
    }

    heal(amount: Number) {
        this.currentHeath = this.currentHeath.valueOf() + amount.valueOf() > this.maxHealth ? this.maxHealth : this.currentHeath.valueOf() + amount.valueOf();
    } 

}
