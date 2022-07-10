export default class Sun
{
    private image: Phaser.GameObjects.Image;

    constructor(scene:Phaser.Scene)
    {
        this.image = scene.add.image(430, scene.cameras.main.height * 1.5, 'image-sun');
        this.image.setScale(0.7);

        scene.tweens.add({
            targets: this.image,
            x: 430,
            y: 170,

            ease: Phaser.Math.Easing.Quintic.Out,
            duration: 1000,
        });
    }
}
