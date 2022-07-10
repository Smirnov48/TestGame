import Chunk from "../сhunks/Chunk";
import Stopper from "../elements/Stopper";
import Jumper from "../elements/Jumper";

export default class JumpStopPair
{
    static apply(scene:Phaser.Scene, chunk:Chunk)
    {
        let jumperPosition = chunk.getPositionIn();
        const jumper = new Jumper(scene, 'image-jumper', jumperPosition, chunk.getPositionY() +2);
        jumper.setCollidable(true);
        jumper.setDepth(1500);
        chunk.add(jumper);

        jumperPosition += 500 + Math.floor(Math.random() * 300);
        const stopper = new Stopper(scene, 'image-stopper_idle', jumperPosition, chunk.getPositionY() + 2);
        stopper.setCollidable(true);
        stopper.setDepth(2000);
        chunk.add(stopper);
    }
}
