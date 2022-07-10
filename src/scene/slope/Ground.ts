export default class Ground
{
    private image: Phaser.GameObjects.TileSprite;

    constructor(scene:Phaser.Scene)
    {
        this.image = scene.add.tileSprite(scene.cameras.main.width / 2, scene.cameras.main.height - 80, scene.cameras.main.width * 3, scene.cameras.main.height, 'image-floor');
        this.image.setOrigin(0.5, 0)
        this.image.setScale(0.5);
    }

    update(time: number, delta: number, velocityX: number)
    {
        this.image.tilePositionX += velocityX * delta * 2;
    }
}
