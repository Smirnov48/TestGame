import Element from "../elements/Element";
import Chunk from "./Chunk";
import JumpStopPair from "../stamps/JumpStopPair";
import Coins from "../stamps/Coins";
import Elements from "../stamps/Elements";

export default class TreesChunk extends Chunk
{
    constructor(scene: Phaser.Scene, positionX: number, positionY: number)
    {
        super(scene, positionX, positionY);

        let position = positionX + Math.floor(Math.random() * 200);
        for (let i: number = 0; i < 20; i++)
        {
            let keyTexture = 'image-tree_1';
            if (Math.random() > 0.5)
            {
                keyTexture = 'image-tree_2';
            }

            const element = new Element(scene, keyTexture, position, positionY)
            if (Math.random() > 0.5)
            {
                element.setDepth(500);
            }
            else
            {
                element.setDepth(1500);
            }
            this.elements.push(element);

            position += 500 + Math.floor(Math.random() * 300);
        }

        this.endPosition = position;

        JumpStopPair.apply(scene, this);
        Coins.apply(scene, this);
        Elements.apply(scene, this);
    }

}
