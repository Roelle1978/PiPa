/// <reference path="lib/phaser.d.ts" />
class Pipapong {
    constructor() {
        const gameConfig = {
            type: Phaser.AUTO,
            parent: 'content',
            width: 800,
            height: 600,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 200 }
                }
            },
            scene: [SceneWelcome, SceneLevel01]
        };
        this.game = new Phaser.Game(gameConfig);
    }
    create() {
    }
}
window.onload = () => {
    var game = new Pipapong();
};
//# sourceMappingURL=pipapong.js.map