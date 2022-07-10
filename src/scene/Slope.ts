import Ground from "./slope/Ground";
import Player from "./slope/Player";
import Track from "./slope/Track";
import {Model} from "./model/Model";
import UI from "./UI";
import Sound from "./sound/Sound";

export default class Slope extends Phaser.Scene
{
    private ground: Ground;
    private player: Player;
    private track: Track;

    private model: Model;
    private gameStarted: boolean = false;

    constructor ()
    {
        super('Slope');

        this.gameStarted = false;
    }

    create()
    {
        this.gameStarted = false;

        this.model = new Model();
        this.ground = new Ground(this);
        this.track = new Track(this, this.cameras.main.height - 78);
        this.player = new Player(this);
        this.initAnimation();

        Sound.playMusic();
    }

    update(time: number, delta: number)
    {
        if (this.gameStarted && this.model.getVelocityX() === 0)
        {
            this.gameStarted = false;
            UI.gameOver(this.model.getTraveledDistance());
            return;
        }

        if (!this.gameStarted)
        {
            return;
        }

        this.model.update(time, delta, this.player);

        this.ground.update(time, delta, this.model.getVelocityX());
        this.track.update(time, delta, this.model.getVelocityX());
        this.player.update(time, delta, this.model.getTraveledDistance());

        this.track.checkCollide(this.player.getY());
    }

    private startGame():void
    {
        this.gameStarted = true;
    }

    public startSession():void
    {
        this.player.startJumpAnimation();
        this.time.delayedCall(800, () =>
        {
            this.startGame();
            this.player.showText();
            this.input.on(Phaser.Input.Events.POINTER_DOWN, () => this.player.jump());
            this.input.keyboard.on('keydown-SPACE', () => this.player.jump());
        });
    }

    private initAnimation():void
    {
        this.cameras.main.setScroll(0, -this.cameras.main.height);
        this.tweens.add({
            targets: this.cameras.main,
            scrollY: 0,

            ease: Phaser.Math.Easing.Quintic.Out,
            duration: 1000
        });
        this.cameras.main.setAngle(5);
    }

    public onStopper():void
    {
        this.model.stop();
        this.player.stop();
        this.player.setDepth(2500);
    }

    public onJumper():void
    {
        this.model.impulse();
        this.player.boostJump(this.model.getVelocityX());
    }
}
