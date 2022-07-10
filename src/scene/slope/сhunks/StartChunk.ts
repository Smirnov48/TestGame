import Element from "../elements/Element";
import Chunk from "./Chunk";

export default class StartChunk extends Chunk
{
    constructor(scene: Phaser.Scene, positionX:number, positionY: number)
    {
        super(scene, positionX, positionY);

        this.elements.push(new Element(scene, 'image-jumpboard', 225, positionY));
        this.elements.push(new Element(scene, 'image-element_2', 305, positionY));
        this.elements.push(new Element(scene, 'image-element_1', 855, positionY));

        this.endPosition = 855;
    }

}
