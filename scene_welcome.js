class SceneWelcome extends Phaser.Scene {
    constructor() {
        super({
            key: 'Scene_Welcome'
        });
    }
    preload() {
        this.load.image('sky', 'media/space3.png');
        this.load.image('logo', 'media/pipapong2.png');
        this.load.image('red', 'media/red.png');
    }
    create() {
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
    }
    update() { }
}
//# sourceMappingURL=scene_welcome.js.map