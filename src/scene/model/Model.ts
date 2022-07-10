import Player from "../slope/Player";

export class Model
{
    private frictionAir: number = 0.00025;
    private frictionGround: number = 0.001;
    private velocityX: number = 1;
    private distance: number = 0;

    update(time: number, delta: number, player: Player)
    {
        if (player.inAir())
        {
            this.velocityX -= this.frictionAir;
        }
        else
        {
            this.velocityX -= this.frictionGround;
        }

        if (this.velocityX < 0)
        {
            this.velocityX = 0;
        }

        this.distance += this.velocityX * delta;
    }

    public getVelocityX():number
    {
        return this.velocityX;
    }

    public impulse():void
    {
        this.velocityX += 0.5;
    }

    public stop():void
    {
        this.velocityX = 0;
    }

    public getTraveledDistance(): number
    {
        return Math.floor(this.distance / 300);
    }
}
