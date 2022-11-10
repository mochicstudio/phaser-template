import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  reload() {
    this.load.image('logo', 'assets/mochicstudio.png');
  }

  reate() {
    const logo = this.add.image(400, 180, 'logo');

    this.tweens.add({
      targets: logo,
      y: 400,
      duration: 1500,
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1
    });
  }
}