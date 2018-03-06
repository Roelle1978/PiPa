var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SceneWelcome = (function (_super) {
    __extends(SceneWelcome, _super);
    function SceneWelcome() {
        return _super.call(this, {
            key: 'Scene_Welcome'
        }) || this;
    }
    SceneWelcome.prototype.preload = function () {
        this.load.image('sky', 'media/space3.png');
        this.load.image('logo', 'media/pipapong2.png');
        this.load.image('red', 'media/red.png');
    };
    SceneWelcome.prototype.create = function () {
        this.add.image(400, 300, 'sky');
        var particles = this.add.particles('red');
        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });
        var logo = this.physics.add.image(400, 100, 'logo');
        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);
        emitter.startFollow(logo, 0, 0, true);
        var text = this.add.text(5, 5, "Press [S] to start", { font: "30px Arial" });
        this.input.keyboard.on('keydown_S', function (event) {
            this.scene.start("Scene_Level01");
        }, this);
    };
    SceneWelcome.prototype.update = function () { };
    return SceneWelcome;
}(Phaser.Scene));
