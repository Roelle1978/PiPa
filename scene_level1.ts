class SceneLevel01 extends Phaser.Scene {

    constructor() {
        super({
            key: 'Scene_Level01'
        });
    }

    paddleLeft: Phaser.GameObjects.Sprite;
    paddleRight: Phaser.GameObjects.Sprite;


    preload() {
        this.load.image('paddle','media/paddle.png')
    }

    create() {
        this.paddleLeft = this.create_paddle(20, 200);
        this.paddleRight = this.create_paddle(780, 200);




    }

    update() {
        this.control_paddle(this.paddleLeft, this.input.y);
        this.control_paddle(this.paddleRight, this.input.y);
    }


    create_paddle(x: number, y: number): Phaser.GameObjects.Sprite {
        var paddle = this.add.sprite(x, y, 'paddle');
        // paddle.anchor.setTo(0.5,0.5);
        // game.phyisics.arcade.enable(paddle)
        // paddle.body.collideWorldBounds = true;
        return paddle;
    }

    control_paddle(paddle: Phaser.GameObjects.Sprite , y: number) {
        paddle.y = y;
        

    }

}
