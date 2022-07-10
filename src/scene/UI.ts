import CoinCounter from "./ui/CoinCounter";
import StartGamePanel from "./ui/StartGamePanel";
import SummaryRacePanel from "./ui/SummaryRacePanel";
import ControlsButtons from "./ui/ControlsButtons";
import RaitingsPanel from "./ui/RaitingsPanel";

export default class UI extends Phaser.Scene
{
    private static instance: UI;
    private raitingsPanel: RaitingsPanel;

    static createCollectedCoin(x: number, y: number)
    {
        if (UI.instance)
        {
            UI.instance.createCoin(x, y);
        }
    }
    static gameOver(traveledDistance: number)
    {
        if (UI.instance)
        {
            UI.instance.gameOver(traveledDistance);
        }
    }
    private coinCounter: CoinCounter;

    private bg: Phaser.GameObjects.Image;
    private startGamePanel: StartGamePanel;
    private summaryRace: SummaryRacePanel;

    constructor ()
    {
        super('UI');
        UI.instance = this;
    }

    create ()
    {
        this.coinCounter = new CoinCounter(this);

        this.bg = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'info_plate_big').setDepth(1200);
        this.startGamePanel = new StartGamePanel(this, this.bg);
        this.startGamePanel.show();

        this.raitingsPanel = new RaitingsPanel(this, this.bg);
        this.summaryRace = new SummaryRacePanel(this, this.bg, this.coinCounter, this.raitingsPanel);

        new ControlsButtons(this);
    }

    update (time: number, delta: number)
    {
    }

    private createCoin(x: number, y: number)
    {
        const coin = this.add.image(x,y, 'image-coin');
        this.add.tween({
            targets: coin,
            duration: 300,
            ease:Phaser.Math.Easing.Quintic.Out,
            x: 45,
            y: 35,
            onComplete: () => {
                coin.destroy();
                this.coinCounter.inc();
            }
        })
    }

    private gameOver(traveledDistance: number)
    {
        this.bg.setAlpha(1);
        this.summaryRace.show(this.coinCounter.getValue(), traveledDistance);
    }
}
