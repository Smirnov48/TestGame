import StartChunk from "./сhunks/StartChunk";
import TreesChunk from "./сhunks/TreesChunk";
import Chunk from "./сhunks/Chunk";

export default class Track
{
    private chunks: Chunk[] = [];
    private scene: Phaser.Scene;
    private positionY: number;

    constructor(scene: Phaser.Scene, positionY: number)
    {
        this.scene = scene;
        this.positionY = positionY;

        const startChunk = new StartChunk(scene,0, positionY);
        this.chunks.push(startChunk);

        const treesChunk = new TreesChunk(scene, 1000, positionY);
        this.chunks.push(treesChunk);
    }

    update(time: number, delta: number, velocityX:number)
    {
        this.chunks.forEach(chunk => chunk.update(time, delta, velocityX));
        this.chunks.forEach(chunk => {
            if (!chunk.hasRemoved() && chunk.passed())
            {
                chunk.remove();
                this.addRandomChunk();
            }
        })
    }

    public checkCollide(playerPositionY: number)
    {
        this.chunks.forEach(chunk =>
        {
            if (!chunk.hasRemoved() && chunk.getFirstPositionX() < 300)
            {
                chunk.collide(playerPositionY);
            }
        });
    }

    private addRandomChunk()
    {
        const lastChunk = this.chunks.at(-1);
        const positionForNewChunk = Math.max(lastChunk.getLastPositionX(), 1300) + 150
        const treesChunk = new TreesChunk(this.scene, positionForNewChunk, this.positionY);
        this.chunks.push(treesChunk);
    }

}
