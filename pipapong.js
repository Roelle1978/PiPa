var Pipapong = (function () {
    function Pipapong() {
        var gameConfig = {
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
            scene: [SceneWelcome, SceneLevel01]
        };
        this.game = new Phaser.Game(gameConfig);
    }
    Pipapong.prototype.create = function () {
    };
    return Pipapong;
}());
window.onload = function () {
    var game = new Pipapong();
};
