import Phaser from 'phaser'

import WelcomeScene from './scenes/welcome'
import Level1Scene from './scenes/level-1'

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
                    gravity: { y: 0 }
                }
            },
            scene: [WelcomeScene, Level1Scene]
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
