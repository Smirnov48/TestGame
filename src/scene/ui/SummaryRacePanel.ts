import Button from "./Button";
import Slope from "../Slope";
import CoinCounter from "./CoinCounter";
import RaitingsPanel from "./RaitingsPanel";
import Sound from "../sound/Sound";

export default class SummaryRacePanel
{
    private bg: Phaser.GameObjects.Image;
    private btn: Button;
    private coins: Phaser.GameObjects.Image;
    private distance: Phaser.GameObjects.Image;
    private textCoins: Phaser.GameObjects.Text;
    private textDistance: Phaser.GameObjects.Text;
    private textScore: Phaser.GameObjects.Text;
    private rays: Phaser.GameObjects.Image;
    private stars: Phaser.GameObjects.Image[];

    constructor(scene: Phaser.Scene, bg: Phaser.GameObjects.Image, coinCounter: CoinCounter, raitingsPanel: RaitingsPanel)
    {
        this.bg = bg;

        this.rays = scene.add.image(scene.cameras.main.width / 2, scene.cameras.main.height / 2, 'rays');
        this.rays.setAlpha(0);
        this.rays.setDepth(1000);
        scene.events.on(Phaser.Scenes.Events.UPDATE, (time:number, delta:number) => this.rays.angle += delta / 40);

        this.btn = new Button(scene, scene.cameras.main.width / 2, scene.cameras.main.height / 2 + 240, 'ok_button_active', 'ok_button_hover', 'ok_button_press');
        this.btn.setDepth(1500);
        this.btn.setOnClick(() => {
            coinCounter.reset();
            this.bg.setAlpha(0);
            this.btn.setAlpha(0);
            this.coins.setAlpha(0);
            this.distance.setAlpha(0);
            this.textCoins.setAlpha(0);
            this.textDistance.setAlpha(0);
            this.textScore.setAlpha(0);
            this.rays.setAlpha(0);
            this.stars.forEach(star => star.setAlpha(0));

            raitingsPanel.show();
        });
        this.btn.setAlpha(0);

        this.coins = scene.add.image(scene.cameras.main.width / 2 - 130, scene.cameras.main.height / 2 - 80, 'collect_coin_icon').setScale(1.8);
        this.coins.setAlpha(0);
        this.coins.setDepth(1500);
        this.textCoins =  scene.add.text(scene.cameras.main.width / 2 + 60, scene.cameras.main.height / 2 - 80, '0', { font: '64px Ravie', color: '#F4AD25' });
        this.textCoins.setOrigin(0.5, 0.5);
        this.textCoins.setAlpha(0);
        this.textCoins.setDepth(1500);

        this.distance = scene.add.image(scene.cameras.main.width / 2 - 130, scene.cameras.main.height / 2 + 420, 'collect_distance_icon');
        this.distance.setAlpha(0);
        this.distance.setDepth(1500);
        this.textDistance =  scene.add.text(scene.cameras.main.width / 2 + 80, scene.cameras.main.height / 2 + 420, '0 m', { font: '64px Ravie', color: '#9AC6FF' });
        this.textDistance.setOrigin(0.5, 0.5);
        this.textDistance.setAlpha(0);
        this.textDistance.setDepth(1500);

        this.textScore =  scene.add.text(scene.cameras.main.width / 2, scene.cameras.main.height / 2 - 200, '0', { font: '96px Ravie', color: '#00CC00' });
        this.textScore.setOrigin(0.5, 0.5);
        this.textScore.setAlpha(0);
        this.textScore.setDepth(1500);

        this.stars = [];
        let angle = -30;
        for (let i = 0; i < 8; i++) {
            const x =  scene.cameras.main.width / 2 + Math.cos(Phaser.Math.DegToRad(angle)) * 380;
            const y =  scene.cameras.main.height / 2 + Math.sin(Phaser.Math.DegToRad(angle)) * 380;

            angle += 20;
            if (i === 3)
            {
                angle += 100;
            }

            const star = scene.add.image(x, y, 'star');
            star.setAlpha(0);
            star.setScale((Math.random() + 0.8) / 2);
            star.setDepth(1600);
            star.rotation += 0.5 - Math.random();
            this.stars.push(star);
        }

        scene.events.on(Phaser.Scenes.Events.UPDATE, (time:number, delta:number) => {
            this.stars.forEach(star => star.rotation += Math.sin(time / 500) / 100);
        });

        scene.input.keyboard.on('keydown-SPACE', () => {
            if (this.btn.getAlpha() > 0)
            {
                this.btn.callClick();
            }
        });
    }

    show(coinsValue:number, distanceValue:number)
    {
        Sound.gameEnd();

        const record = localStorage.getItem('game-record');
        const score = distanceValue + coinsValue * 10;
        if (!record || parseInt(record) < score)
        {
            localStorage.setItem('game-record', score.toString());

            this.rays.setAlpha(1);
            this.stars.forEach(star => star.setAlpha(1));
        }

        this.textScore.setText(score.toString());
        this.textCoins.setText(coinsValue.toString());
        this.textDistance.setText(distanceValue.toString() + ' m');

        this.btn.setAlpha(1);
        this.coins.setAlpha(1);
        this.distance.setAlpha(1);
        this.textCoins.setAlpha(1);
        this.textDistance.setAlpha(1);
        this.textScore.setAlpha(1);
    }
}
