import Element from "../elements/Element";

export default class Chunk
{
    protected elements: Element[] = [];
    protected startPosition: number = 0;
    protected endPosition: number = 0;

    private scene: Phaser.Scene;
    private removed: boolean;
    private positionY: number;

    constructor(scene: Phaser.Scene, positionX: number, positionY: number)
    {
        this.scene = scene;

        this.startPosition = positionX;
        this.positionY = positionY;
    }

    collide(playerPositionY: number): void
    {
        this.elements.forEach(item => {
            if (item.isCollidable() && item.getX() > 200 && item.getX() < 350)
            {
                if (Math.abs(item.getY() - (playerPositionY - 25)) < 50)
                {
                    item.setCollidable(false);
                    item.onCollided();
                }
            }
        });
    }

    update(time: number, delta: number, velocityX: number): void {
        if (this.removed)
        {
            return;
        }
        this.endPosition -= velocityX * delta;
        this.elements.forEach(item => item.decPosition(velocityX * delta));
    }

    public passed(): Boolean
    {
        return this.endPosition < -100;
    }

    public remove(): void
    {
        if (this.removed)
        {
            return;
        }
        this.removed = true;
        this.elements.forEach(item => item.destroy());
        this.elements = null;
    }

    public hasRemoved(): Boolean
    {
        return this.removed;
    }

    public getFirstPositionX(): number
    {
        return this.elements.at(0).getX();
    }

    public getLastPositionX(): number
    {
        return this.elements.at(-1).getX();
    }

    public getPositionIn(): number
    {
        return Math.floor(this.startPosition + Math.random() * (this.endPosition - this.startPosition));
    }

    public getStartPosition()
    {
        return this.startPosition;
    }

    public getPositionY()
    {
        return this.positionY;
    }

    public add(element: Element)
    {
        this.elements.push(element);
    }

}
