import * as Phaser from "phaser"

export class Game extends Phaser.Scene {
  public init() { }

  public preload() {
    this.load.image('ball', '../assets/ball.png');
  }

  public create() {
    const ball = this.physics.add.sprite(50, 50, 'ball');
    ball.setVelocity(100, 100);
    ball.setCollideWorldBounds(true);
    ball.setBounce(1);
  }
}