import Element from "../elements/Element";
import Chunk from "../сhunks/Chunk";

export default class Elements
{
    static apply(scene:Phaser.Scene, chunk:Chunk)
    {
        let position = chunk.getStartPosition();

        const countCoins = Math.floor(Math.random() * 2) + 1;
        for (let i = 0; i < countCoins; i++)
        {
            position += 500 + Math.floor(Math.random() * 1000);

            const coin = new Element(scene, 'image-element_1', position, chunk.getPositionY());
            coin.setDepth(1500);
            chunk.add(coin);
        }
    }
}
