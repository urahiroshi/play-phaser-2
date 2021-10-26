import * as Phaser from "phaser"

export class Game extends Phaser.Scene {
  private ball: Phaser.GameObjects.Sprite;

  public init() { }

  public preload() {
    this.load.image('ball', '../assets/ball.png');
  }

  public create() {
    this.ball = this.add.sprite(50, 50, 'ball');
  }

  public update() {
    this.ball.x += 1;
    this.ball.y += 1;
  }
}