import * as Phaser from "phaser"

export class Game extends Phaser.Scene {
  private balls: Phaser.Physics.Arcade.Group;
  private player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private rectangle: Phaser.Geom.Rectangle;

  public init() { }

  public preload() {
    this.load.setBaseURL('../assets');
    this.load.image('ball', 'ball.png');
    this.load.image('square', 'square.png');
  }

  public create() {
    const { width, height } = this.sys.game.canvas;
    this.rectangle = new Phaser.Geom.Rectangle(0, 0, width, 0);

    this.balls = this.physics.add.group({
      velocityX: 0,
      velocityY: 100,
    });
    Phaser.Actions.RandomRectangle(this.balls.getChildren(), this.rectangle);

    this.player = this.physics.add.sprite(width * 0.5, height - 10, 'square');
    this.player.body.immovable = true;

    this.time.addEvent({
      callback: this.onCreateBall,
      callbackScope: this,
      delay: 100,
      loop: true,
    });
  }

  public onCreateBall() {
    const randomPoint = this.rectangle.getRandomPoint();
    this.balls.create(randomPoint.x, randomPoint.y, 'ball');
  }

  public update() {
    this.player.x = this.game.input.mousePointer.x || this.sys.game.canvas.width * 0.5;
    if (this.physics.collide(this.balls, this.player)) {
      alert('game over');
      location.reload();
    }
  }
}