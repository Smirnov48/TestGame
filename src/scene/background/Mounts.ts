export default class Mounts
{
    private image: Phaser.GameObjects.TileSprite;

    constructor(scene:Phaser.Scene)
    {
        this.image = scene.add.tileSprite(scene.cameras.main.width / 2, scene.cameras.main.height * 1.5, scene.cameras.main.width * 2, scene.cameras.main.height, 'image-mounts');
        this.image.setScale(0.5);

        scene.tweens.add({
            targets: this.image,
            y: scene.cameras.main.height * (16 / 20),

            ease: Phaser.Math.Easing.Quintic.Out,
            duration: 1000,
        });
    }
}
