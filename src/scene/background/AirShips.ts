export default class AirShips
{
    private image: Phaser.GameObjects.Image;
    constructor(scene: Phaser.Scene)
    {
        this.image = scene.add.image(800, scene.cameras.main.height * 1.5, 'image-airship');
        this.image.setScale(0.35);
        this.image.setFlipX(true);

        scene.tweens.add({
            targets: this.image,
            x: 800,
            y: 100  + Math.random() * 200,

            ease: Phaser.Math.Easing.Quintic.Out,
            duration: 1200,
        });

        scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)
    }

    private update(time:number, delta:number)
    {
        this.image.x -= 0.05;

        if (this.image.x < - 100)
        {
            this.image.x = 1300 + Math.random() * 1000;
            this.image.y = 100  + Math.random() * 200;
        }
    }
}
