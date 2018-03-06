class SceneLevel01 extends Phaser.Scene {
    constructor() {
        super({
            key: 'Scene_Level01'
        });
    }
    preload() {
        this.load.image('paddle', 'media/paddle.png');
        this.load.image('ball', 'media/ball.png');
    }
    create() {
        this.ball_launched = false;
        this.ball_velocity = 400;
        this.paddleLeft = this.create_paddle(20, 200);
        this.paddleRight = this.create_paddle(780, 200);
        this.ball = this.create_ball(400, 300);
    }
    update() {
        this.control_paddle(this.paddleLeft, this.input.y);
        this.control_paddle(this.paddleRight, this.input.y);
    }
    create_paddle(x, y) {
        var paddle = this.add.sprite(x, y, 'paddle');
        // paddle.anchor.setTo(0.5,0.5);
        // game.phyisics.arcade.enable(paddle)
        // paddle.body.collideWorldBounds = true;
        return paddle;
    }
    control_paddle(paddle, y) {
        paddle.y = y;
    }
    create_ball(x, y) {
        var ball = this.add.sprite(x, y, 'ball');
        // ball.anchor.setTo(0.5,0,5);
        // game.phyisics.arcade.enable(ball)
        // ball.body.collideWorldBounds = true;
        // ball.body.bounce.setTo(0.5,0.5)
        return ball;
    }
    launch_ball() {
        if (this.ball_launched) {
        }
    }
}
//# sourceMappingURL=scene_level1.js.map