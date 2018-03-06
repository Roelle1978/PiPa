class SceneLevel01 extends Phaser.Scene {

    constructor() {
        super({
            key: 'Scene_Level01'
        });
    }

    paddleLeft: any;
    paddleRight: any;
    ball: any;
    ball_launched: boolean;
    ball_velocity: number;
    score_left: number;
    score_right: number;

    showScoreLeft: Phaser.GameObjects.Text;
    showScoreRight: Phaser.GameObjects.Text;



    preload() {
        this.load.image('paddle', 'media/paddle.png');
        this.load.image('ball', 'media/ball.png');
        this.load.image('square', 'media/square.png');
    }

    create() {
        this.ball_launched = false;
        this.ball_velocity = 400;

        this.paddleLeft = this.create_paddle(20, 200);
        this.paddleRight = this.create_paddle(780, 200);

        this.ball = <any>this.create_ball(300, 300);
        this.ball.setVelocity(800, 200);

        this.ball.debugShowBody = true;
        this.ball.debugShowVelocity = true;

        this.physics.add.collider(this.ball, this.paddleRight, this.hitPaddle, null, this);
        this.physics.add.collider(this.ball, this.paddleLeft, this.hitPaddle, null, this);

        this.score_left = 0;
        this.score_right = 0;
        this.showScoreLeft = this.add.text(10, 0, <any>this.score_left + "").setFont('64px Arial').setFill('#00ff00');
        this.showScoreRight = this.add.text(760, 0, <any>this.score_right + "").setFont('64px Arial').setFill('#00ff00');



        var s1 = this.setSquares(384, 0);
        this.physics.add.collider(<any>s1, this.ball, null, null, this);
        var s2 = this.setSquares(384, 200);
        this.physics.add.collider(<any>s2, this.ball, null, null, this);
        var s3 = this.setSquares(384, 400);
        this.physics.add.collider(<any>s3, this.ball, null, null, this);
        var s4 = this.setSquares(384, 600);
        this.physics.add.collider(<any>s4, this.ball, null, null, this);
    }

    setSquares(x, y) {
        return this.physics.add.image(x, y, 'square').setImmovable(true);
    }


    hitPaddle() {
        console.log("test");
    }

    update() {
        this.control_paddle(this.paddleLeft, this.input.y);
        this.control_paddle(this.paddleRight, this.input.y);



        if (this.ball.body.blocked.left) {
            this.score_right++;
            this.showScoreRight.setText(<any>this.score_right + "");
        } else if (this.ball.body.blocked.right) {
            this.score_left++;
            this.showScoreLeft.setText(<any>this.score_left + "");
        }


    }


    create_paddle(x: number, y: number): Phaser.Physics.Arcade.Image {

        var paddle = this.physics.add.image(x, y, 'paddle');
        paddle.setCollideWorldBounds(false);
        paddle.setImmovable(true);
        return paddle;
    }

    control_paddle(paddle: Phaser.Physics.Arcade.Image , y: number) {
        paddle.y = y;
    }

    create_ball(x: number, y: number) {
        var ball = this.physics.add.image(x, y, 'ball');
        ball.setBounce(1, 1);
        ball.setCollideWorldBounds(true);
        return ball;
    }

    launch_ball():void {
        if (this.ball_launched) {

        } else {
            //this.ball.
        }
        
    }

}
