/// <reference path="lib/phaser.d.ts" />

class Pipapong {

    constructor() {

        const gameConfig: GameConfig = {
            type: Phaser.AUTO,
            parent: 'content',
            width: 800,
            height: 600,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 20 }
                }
            },
            scene: [SceneWelcome, SceneLevel01]
        };

        this.game = new Phaser.Game(gameConfig);

    }

    game: Phaser.Game;

    create() {
    }

}


window.onload = () => {
    var game = new Pipapong();
};