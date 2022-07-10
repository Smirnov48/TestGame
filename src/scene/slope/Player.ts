import Sound from "../sound/Sound";

export default class Player
{
    private scene: Phaser.Scene;

    private image: Phaser.GameObjects.Image;
    private text: Phaser.GameObjects.Text;

    private velocityY: number = 0;
    private gravityY: number = 10;

    constructor(scene: Phaser.Scene)
    {
        this.scene = scene;

        this.image = this.scene.add.image(35,265, 'backgrounds-loading');
        this.image.setScale(0.65);
        this.image.setOrigin(0.5, 0.85);
        this.image.setDepth(1000);

        this.text =  this.scene.add.text(10, 265, '0m', { font: '32px Ravie', color: '#0A0A0A' });
        this.text.setOrigin(0.5, 0.5);
        this.text.setAlpha(0);
    }

    update(time: number, delta: number, traveledDistance: number)
    {
        this.text.setPosition(this.image.x, this.image.y + 30);
        this.text.setText(traveledDistance + 'm');

        if (this.image.x > 300)
        {
            this.image.x -= delta;
        }
        else
        {
            this.image.x = 300;
        }

        this.velocityY += this.gravityY / 5;

        this.image.y += this.velocityY / 100 * delta;
        if (this.image.y > 560)
        {
            this.image.y = 560;
            this.image.setRotation(0);
        }
    }

    public startJumpAnimation()
    {
        let path = new Phaser.Curves.Path(70, 270);
        path.cubicBezierTo(900, 200, 300, 500, 200, 700);

        let follower = { t: 0, vec: new Phaser.Math.Vector2() };
        this.scene.tweens.add({
            targets: this.image,
            x: 70,
            angle: 60,
            duration: 100
        });

        this.scene.tweens.add({
            targets: follower,
            t: 1,
            delay: 100,
            duration: 700,
            onUpdate: () => {
                path.getPoint(follower.t, follower.vec);

                this.image.x = follower.vec.x;
                this.image.y = follower.vec.y;

                const angle = Phaser.Math.Angle.BetweenPoints(follower.vec.normalize(), path.getTangent(follower.t).normalize());

                if (follower.t < 0.33) {
                    this.image.setRotation(angle + Math.PI / 2);
                }
                else if (follower.t < 0.44)
                {
                    this.image.setAngle(0);
                }
                else
                {
                    this.image.setAngle(-35);
                }

            },
            onComplete: () => {
                this.scene.add.tween({
                    targets: this.image,
                    angle: 10,
                    ease: Phaser.Math.Easing.Back.Out,
                    duration: 500
                })
            }
        });
    }

    public getX()
    {
        return this.image.x;
    }

    public getY()
    {
        return this.image.y;
    }

    public jump()
    {
        Sound.jumper();
        if (this.image.y >= 560)
        {
            this.velocityY = -60;
            this.image.setAngle(-30);
        }
        else
        {
            this.velocityY = 60;
            this.image.setAngle(30);
        }
    }

    public inAir()
    {
        return this.image.y < 560;
    }

    public stop():void {
        this.velocityY = 500;
        this.image.setAngle(0);
    }

    public boostJump(velocityX: number):void
    {
        this.velocityY = -Math.max(60, velocityX * 60);
        this.image.setAngle(-30);
    }

    public setDepth(number: number):void
    {
        this.image.setDepth(number);
    }

    public showText():void
    {
        this.text.setAlpha(1);
    }
}
