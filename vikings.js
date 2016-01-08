Array.prototype.randomElement = function () {
    'use strict';
    return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.shuffle = function () {
    'use strict';
    var i = this.length, j, temp;
    if (i  === 0) { return this; }
    while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
};

var Viking = function (name, health, strenght) {
    'use strict';
    this.name = name;
    this.health = health;
    this.strenght = strenght;
};

var Fight = function (fighters, turns) {
    'use strict';
    this.turns = turns;
    this.fighters = fighters;
    this.ko = false;
    var i;

    this.start = function () {
        for (i = 0; i < this.turns; i++) {
            if (!this.ko) {
                this.fighters.shuffle();
                this.attack();
            } else {
                console.log("K.O" + "\n");
                i = this.turns;
            }
        }
        // console.log(this.fighters);
        return this.victor();
    };
    this.attack = function () {
        var attacker = this.fighters[0], victim = this.fighters[1];
        console.log(attacker.name  + " has hit " + victim.name + " with a strenght of " + attacker.strenght + "\n");
        victim.health = victim.health - attacker.strenght;
        console.log(victim.name + " is now left with " + victim.health + "\n");
        if (victim.health < attacker.strenght) { this.ko = true; }
    };
    this.victor = function () {
        var fighter = this.fighters[0], other_fighter = this.fighters[1];
        if (fighter.health > other_fighter.health) {
            return fighter;
        }
        return other_fighter;
    };
};

var ragnar = new Viking('Ragnar Lothbrok', 300, 80);

var rollo = new Viking('Rollo Lothbrok', 450, 100);

var pit = new Fight([ragnar, rollo], 10);

var winner = pit.start();

console.log("The winner is " + winner.name + "\n");
