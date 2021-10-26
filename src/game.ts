import * as Phaser from "phaser"

export class Game extends Phaser.Scene {
  private ball: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private paddle: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

  public init() { }

  public preload() {
    this.load.setBaseURL('../assets');
    this.load.image('ball', 'ball.png');
    this.load.image('paddle', 'paddle.png');
  }

  public create() {
    const { width, height } = this.sys.game.canvas;

    this.ball = this.physics.add.sprite(width * 0.5, height - 25, 'ball');
    this.ball.setVelocity(150, -150);
    this.ball.setCollideWorldBounds(true);
    this.ball.setBounce(1);

    this.paddle = this.physics.add.sprite(width * 0.5, height - 5, 'paddle');
    this.paddle.body.immovable = true;
  }

  public update() {
    this.physics.collide(this.ball, this.paddle);
    this.paddle.x = this.game.input.mousePointer.x || this.sys.game.canvas.width * 0.5;
  }
}