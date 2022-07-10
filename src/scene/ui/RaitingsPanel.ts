import Button from "./Button";
import Slope from "../Slope";
import Sound from "../sound/Sound";

export default class RaitingsPanel
{
    private bg: Phaser.GameObjects.Image;
    private btn: Button;
    private textLoading: Phaser.GameObjects.Text;
    private scene: Phaser.Scene;
    private texts: Phaser.GameObjects.Text[];

    constructor(scene: Phaser.Scene, bg: Phaser.GameObjects.Image)
    {
        this.bg = bg;
        this.scene = scene;
        this.texts = [];

        this.btn = new Button(scene, scene.cameras.main.width / 2, scene.cameras.main.height / 2 + 240, 'ok_button_active', 'ok_button_hover', 'ok_button_press');
        this.btn.setDepth(1500);
        this.btn.setOnClick(() => {
            while (this.texts.length > 0)
            {
                this.texts.pop().destroy();
            }

            this.bg.setAlpha(0);
            this.btn.setAlpha(0);
            scene.scene.get('Slope').scene.restart();
            scene.time.delayedCall(500, () => (scene.scene.get('Slope') as Slope).startSession());
        });
        this.btn.setAlpha(0);

        this.textLoading = scene.add.text(scene.cameras.main.width / 2, scene.cameras.main.height / 2, '0 m', { font: '64px Ravie', color: '#9AC6FF' });
        this.textLoading.setOrigin(0.5, 0.5);
        this.textLoading.setAlpha(0);
        this.textLoading.text = 'Загрузка...';
        this.textLoading.setDepth(1500);

        scene.input.keyboard.on('keydown-SPACE', () => {
            if (this.btn.getAlpha() > 0)
            {
                this.btn.callClick();
            }
        });
    }

    public show()
    {
        this.bg.setAlpha(1);
        this.btn.setAlpha(1);
        this.textLoading.setAlpha(1);
/*
        var socket = new WebSocket('');
        socket.onopen = () => {
            socket.send('');
        }
        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.d.b.d)
            {
                const list = data.d.b.d;
                this.showRaiting(list);
                socket.close();
            }
        }
 */
    }

    private showRaiting(list: any)
    {
        Sound.listShow();

        this.textLoading.setAlpha(0);

        const keys = Object.keys(list);
        keys.sort().reverse();

        for (let i = 0; i < 10; i++)
        {
            const score = keys[i];
            const nameText = this.scene.add.text(this.scene.cameras.main.width / 2 - 200, this.scene.cameras.main.height / 2 - 240 + i * 40, '0', { font: '24px Ravie', color: '#FFFFFF' });
            nameText.setOrigin(0, 0.5);
            nameText.setText(list[score][0].name);
            nameText.setDepth(1500);
            this.texts.push(nameText);

            const scoreText = this.scene.add.text(this.scene.cameras.main.width / 2 + 200, this.scene.cameras.main.height / 2 - 240 + i * 40, '0', { font: '24px Ravie', color: '#FFFFFF' });
            scoreText.setOrigin(1, 0.5);
            scoreText.setText(score);
            scoreText.setDepth(1500);
            this.texts.push(scoreText);
        }
    }

}
