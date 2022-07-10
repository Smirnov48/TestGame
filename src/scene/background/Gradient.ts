export default class Gradient
{
    private texture: Phaser.Textures.CanvasTexture;
    private image: Phaser.GameObjects.Image;

    constructor(scene: Phaser.Scene)
    {
        this.texture = scene.textures.createCanvas('gradientBackground', scene.cameras.main.width, scene.cameras.main.height);
        const context: CanvasRenderingContext2D = this.texture.getContext();

        const grd = context.createLinearGradient(scene.cameras.main.width / 2,0, scene.cameras.main.width / 2, scene.cameras.main.height);
        grd.addColorStop(0, '#89C0FC');
        grd.addColorStop(1, '#B8D9FC');

        context.fillStyle = grd;
        context.fillRect(0, 0, scene.cameras.main.width, scene.cameras.main.height);

        this.texture.refresh();

        this.image = scene.add.image(0, scene.cameras.main.height, 'gradientBackground');
        this.image.setOrigin(0,0);

        scene.tweens.add({
            targets: this.image,
            y: 0,

            ease: Phaser.Math.Easing.Quintic.InOut,
            duration: 1000,
        });
    }
}
