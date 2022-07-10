import Button from "./Button";
import Slope from "../Slope";

export default class StartGamePanel
{
    private bg: Phaser.GameObjects.Image;
    private btn: Button;

    constructor(scene: Phaser.Scene, bg: Phaser.GameObjects.Image)
    {
        this.bg = bg;

        this.btn = new Button(scene, scene.cameras.main.width / 2, scene.cameras.main.height / 2, 'play_button_active', 'play_button_hover', 'play_button_press');
        this.btn.setAlpha(0);
        this.btn.setDepth(1500);
        this.btn.setOnClick(() => {
            bg.setAlpha(0);
            this.btn.setAlpha(0);
            (scene.scene.get('Slope') as Slope).startSession();
        });

        scene.input.keyboard.on('keydown-SPACE', () => {
            if (this.btn.getAlpha() > 0)
            {
                this.btn.callClick();
            }
        });
    }

    show()
    {
        this.btn.setAlpha(1);
    }
}
