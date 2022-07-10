import Sound from "./sound/Sound";

export default class Game extends Phaser.Scene
{
    constructor ()
    {
        super('Game');
    }

    create () {
        this.scene.launch('Background');
        this.scene.launch('Slope');
        this.scene.launch('UI');

        new Sound(this);
    }
}
