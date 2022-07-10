import Sound from "../sound/Sound";

export default class Button
{
    private normal: string;
    private hover: string;
    private pressed: string;
    private image: Phaser.GameObjects.Image;

    private onClick: any;
    private pressedStatus: boolean = false;

    constructor(scene: Phaser.Scene, x:number, y:number, normal:string, hover:string, pressed:string)
    {
        this.normal = normal;
        this.hover = hover;
        this.pressed = pressed;

        this.image = scene.add.image(x, y, normal);

        this.image.setInteractive();
        this.image.on(Phaser.Input.Events.POINTER_MOVE, () => {
            if (!this.pressedStatus)
            {
                this.image.setTexture(this.hover);
            }
        });
        this.image.on(Phaser.Input.Events.POINTER_OUT, () => {
            this.pressedStatus = false;
            this.image.setTexture(this.normal);
        });
        this.image.on(Phaser.Input.Events.POINTER_DOWN, () => {
            this.pressedStatus = true;
            this.image.setTexture(this.pressed);
        });
        this.image.on(Phaser.Input.Events.POINTER_UP, () => {
            Sound.buttonPress();
            this.pressedStatus = false;
            this.image.setTexture(this.normal);
            if (this.onClick)
            {
                this.onClick()
            }
        });
    }

    public setOnClick(func:any):void
    {
        this.onClick = func;
    }

    public setAlpha(value: number):void
    {
        this.image.setAlpha(value);
    }

    public getAlpha():number
    {
        return this.image.alpha;
    }

    public callClick():void
    {
        if (this.onClick)
        {
            this.onClick()
        }
    }

    public setDepth(value: number):void
    {
        this.image.setDepth(value);
    }

    setTextureKeys(normal: string, hover: string, pressed: string)
    {
        this.normal = normal;
        this.hover = hover;
        this.pressed = pressed;

        this.image.setTexture(this.normal);
    }
}
