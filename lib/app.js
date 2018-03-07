import Phaser from 'phaser'

import SceneWelcome from './scenes/welcome.ts'

class pipapong extends Phaser.Game {
    construtor() {
        let gameConfig = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 200 }
                }
            },
            scene: [SceneWelcome]
        };
        this.game = new Phaser.Game(gameConfig)
    }
}
