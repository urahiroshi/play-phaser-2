import * as Phaser from "phaser";

function preload () {
  this.load.setBaseURL('../assets')
  this.load.image('ball', 'ball.png');
};

function create () {
  this.ball = this.add.sprite(50, 50, 'ball');
};

function update () {
  this.ball.x += 1;
  this.ball.y += 1;
};

window.onload = () => {
  new Phaser.Game({
    type: Phaser.WEBGL,
    width: 480,
    height: 320,
    backgroundColor: '#eee',
    physics: {
      default: 'arcade',
    },
    scene: {
      preload,
      create,
      update,
    }
  });
};