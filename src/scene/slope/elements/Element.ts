export default class Element
{
    protected scene: Phaser.Scene;
    protected image: Phaser.GameObjects.Image;
    private collidable: boolean = false;

    constructor(scene: Phaser.Scene, textureKey: string, x: number, y: number)
    {
        this.scene = scene;
        this.image = scene.add.image(x, y, textureKey);
        this.image.setOrigin(0.5, 1);
    }

    public decPosition(delta: number)
    {
        this.image.x -= delta;
    }

    public setDepth(value: number)
    {
        this.image.setDepth(value);
    }

    public destroy()
    {
        this.image.destroy();
    }

    public getX():number
    {
        return this.image.x;
    }

    public getY():number
    {
        return this.image.y;
    }

    public setCollidable(value:boolean):void
    {
        this.collidable = value;
    }

    public isCollidable():boolean
    {
        return this.collidable;
    }

    public onCollided()
    {
        /* Do Nothing */
    }
}
