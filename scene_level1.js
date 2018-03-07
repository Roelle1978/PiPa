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
var SceneLevel01 = (function (_super) {
    __extends(SceneLevel01, _super);
    function SceneLevel01() {
        return _super.call(this, {
            key: 'Scene_Level01'
        }) || this;
    }
    SceneLevel01.prototype.preload = function () {
        this.load.image('paddle', 'media/paddle.png');
        this.load.image('ball', 'media/ball.png');
        this.load.image('square', 'media/square.png');
    };
    SceneLevel01.prototype.create = function () {
        this.ball_launched = false;
        this.ball_velocity = 400;
        this.paddleLeft = this.create_paddle(20, 200);
        this.paddleRight = this.create_paddle(780, 200);
        this.ball = this.create_ball(300, 300);
        this.ball.setVelocity(800, 200);
        this.ball.debugShowBody = true;
        this.ball.debugShowVelocity = true;
        this.physics.add.collider(this.ball, this.paddleRight, this.hitPaddle, null, this);
        this.physics.add.collider(this.ball, this.paddleLeft, this.hitPaddle, null, this);
        this.score_left = 0;
        this.score_right = 0;
        this.showScoreLeft = this.add.text(10, 0, this.score_left + "").setFont('64px Arial').setFill('#00ff00');
        this.showScoreRight = this.add.text(760, 0, this.score_right + "").setFont('64px Arial').setFill('#00ff00');
        var s1 = this.setSquares(384, 0);
        this.physics.add.collider(s1, this.ball, null, null, this);
        var s2 = this.setSquares(384, 200);
        this.physics.add.collider(s2, this.ball, null, null, this);
        var s3 = this.setSquares(384, 400);
        this.physics.add.collider(s3, this.ball, null, null, this);
        var s4 = this.setSquares(384, 600);
        this.physics.add.collider(s4, this.ball, null, null, this);
    };
    SceneLevel01.prototype.setSquares = function (x, y) {
        return this.physics.add.image(x, y, 'square').setImmovable(true);
    };
    SceneLevel01.prototype.hitPaddle = function () {
        console.log("test");
    };
    SceneLevel01.prototype.update = function () {
        this.control_paddle(this.paddleLeft, this.input.y);
        this.control_paddle(this.paddleRight, this.input.y);
        if (this.ball.body.blocked.left) {
            this.score_right++;
            this.showScoreRight.setText(this.score_right + "");
        }
        else if (this.ball.body.blocked.right) {
            this.score_left++;
            this.showScoreLeft.setText(this.score_left + "");
        }
    };
    SceneLevel01.prototype.create_paddle = function (x, y) {
        var paddle = this.physics.add.image(x, y, 'paddle');
        paddle.setCollideWorldBounds(false);
        paddle.setImmovable(true);
        return paddle;
    };
    SceneLevel01.prototype.control_paddle = function (paddle, y) {
        paddle.y = y;
    };
    SceneLevel01.prototype.create_ball = function (x, y) {
        var ball = this.physics.add.image(x, y, 'ball');
        ball.setBounce(1, 1);
        ball.setCollideWorldBounds(true);
        return ball;
    };
    SceneLevel01.prototype.launch_ball = function () {
        if (this.ball_launched) {
        }
        else {
        }
    };
    return SceneLevel01;
}(Phaser.Scene));
