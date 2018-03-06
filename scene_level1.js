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
        this.ball.setVelocity(200, 100);
        this.physics.collide(this.paddleLeft, this.ball, this.hitPaddle);
        this.physics.collide(this.paddleRight, this.ball, this.hitPaddle);
        this.ball.debugShowBody = true;
        this.ball.debugShowVelocity = true;
        this.physics.add.collider(this.ball, this.paddleRight, this.hitPaddle, null, this);
        this.physics.add.collider(this.ball, this.paddleLeft, this.hitPaddle, null, this);
    }
    hitPaddle() {
        console.log("test");
    }
    update() {
        this.control_paddle(this.paddleLeft, this.input.y);
        this.control_paddle(this.paddleRight, this.input.y);
    }
    create_paddle(x, y) {
        var paddle = this.physics.add.image(x, y, 'paddle');
        paddle.setCollideWorldBounds(true);
        paddle.setImmovable(true);
        return paddle;
    }
    control_paddle(paddle, y) {
        paddle.y = y;
    }
    create_ball(x, y) {
        var ball = this.physics.add.image(x, y, 'ball');
        ball.setBounce(1, 1);
        ball.setCollideWorldBounds(true);
        return ball;
    }
    launch_ball() {
        if (this.ball_launched) {
        }
        else {
            //this.ball.
        }
    }
}
//# sourceMappingURL=scene_level1.js.map