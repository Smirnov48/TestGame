import Chunk from "../сhunks/Chunk";
import Coin from "../elements/Coin";

export default class Coins
{
    static apply(scene:Phaser.Scene, chunk:Chunk)
    {
        const position = chunk.getPositionIn();

        const countCoins = Math.floor(Math.random() * 5) + 3;
        for (let i = 0; i < countCoins; i++)
        {
            const coin = new Coin(scene, 'image-coin', position + i * 60, chunk.getPositionY() - 150);
            coin.setCollidable(true);
            coin.setDepth(2000);
            chunk.add(coin);
        }
    }

}
