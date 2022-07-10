import Button from "./Button";
import Sound from "../sound/Sound";

export default class ControlsButtons
{
    constructor(scene:Phaser.Scene)
    {
        new Button(scene, scene.cameras.main.width - 60, 50, 'btn_pause_active', 'btn_pause_hover', 'btn_pause_press')
            .setOnClick(() => {
                if (scene.scene.isPaused('Slope'))
                {
                    scene.scene.resume('Slope');
                }
                else
                {
                    scene.scene.pause('Slope');
                }
            });

        const muteButton = new Button(scene, scene.cameras.main.width - 150, 50, 'btn_sound_1_active', 'btn_sound_1_hover', 'btn_sound_0_press');
        muteButton.setOnClick(()=> {
                scene.scene.get('Game').sound.mute = !scene.scene.get('Game').sound.mute;
                if (scene.scene.get('Game').sound.mute)
                {
                    muteButton.setTextureKeys('btn_sound_1_active', 'btn_sound_1_hover', 'btn_sound_0_press');
                }
                else
                {
                    muteButton.setTextureKeys('btn_sound_0_active', 'btn_sound_0_hover', 'btn_sound_0_press');
                }
            });

        new Button(scene, scene.cameras.main.width - 240, 50, 'btn_fullscreen_active', 'btn_fullscreen_hover', 'btn_fullscreen_press')
            .setOnClick(() => {
                if (scene.scale.isFullscreen)
                {
                    scene.scale.stopFullscreen();
                }
                else
                {
                    scene.scale.startFullscreen();
                }
            });

    }
}
