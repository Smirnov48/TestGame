import AssetBackgroundLoading from '../assets/preloader.png';
import AssetImageSun from '../assets/Environment/bg_sun.png';
import AssetImageMounts from '../assets/Environment/back_rocks.png';
import AssetImageAirship from '../assets/Environment/airship.png';
import AssetImageFloor from '../assets/Environment/floor.png';
import AssetImageJumpboard from '../assets/Environment/jumpboard.png';
import AssetImageElement_1 from '../assets/Environment/element_1.png';
import AssetImageElement_2 from '../assets/Environment/element_2.png';
import AssetImageTree_1 from '../assets/Environment/tree_1.png';
import AssetImageTree_2 from '../assets/Environment/tree_2.png';
import AssetImageJumper from '../assets/Environment/jumper.png';
import AssetImageCoin from '../assets/Environment/coin.png';
import AssetImageStopperIdle from '../assets/Environment/stopper_idle.png';
import AssetImageStopperCrush from '../assets/Environment/stopper_crush.png';
import AssetImageBtnFullscreenActive from '../assets/ui/btn_fullscreen_active.png';
import AssetImageBtnFullscreenHover from '../assets/ui/btn_fullscreen_hover.png';
import AssetImageBtnFullscreenPress from '../assets/ui/btn_fullscreen_press.png';
import AssetImageBtnPauseActive from '../assets/ui/btn_pause_active.png';
import AssetImageBtnPauseHover from '../assets/ui/btn_pause_hover.png';
import AssetImageBtnPausePress from '../assets/ui/btn_pause_press.png';
import AssetImageBtnSound_0_Active from '../assets/ui/btn_sound_0_active.png';
import AssetImageBtnSound_0_Hover from '../assets/ui/btn_sound_0_hover.png';
import AssetImageBtnSound_0_Press from '../assets/ui/btn_sound_0_press.png';
import AssetImageBtnSound_1_Active from '../assets/ui/btn_sound_1_active.png';
import AssetImageBtnSound_1_Hover from '../assets/ui/btn_sound_1_hover.png';
import AssetImageCoinScore_Plate from '../assets/ui/coin_score_plate.png';
import AssetImageCollectCoinIcon from '../assets/ui/collect_coin_icon.png';
import AssetImageInfoPlateBig from '../assets/ui/info_plate_big.png';
import AssetImageLeadboardBtnActive from '../assets/ui/leadboard_button_active.png';
import AssetImageLeadboardBtnHover from '../assets/ui/leadboard_button_hover.png';
import AssetImageLeadboardBtnPress from '../assets/ui/leadboard_button_press.png';
import AssetImageOkButtonActive from '../assets/ui/ok_button_active.png';
import AssetImageOkButtonHover from '../assets/ui/ok_button_hover.png';
import AssetImageOkButtonPress from '../assets/ui/ok_button_press.png';
import AssetImagePlayButtonActive from '../assets/ui/play_button_active.png';
import AssetImagePlayButtonHover from '../assets/ui/play_button_hover.png';
import AssetImagePlayButtonPress from '../assets/ui/play_button_press.png';
import AssetImageCollectDistance from '../assets/ui/collect_distance_icon.png';
import AssetImageRays from '../assets/ui/rays.png';
import AssetImageStar from '../assets/ui/star.png';

import AssetsMusic from '../assets/Sound/music.mp3';
import AssetsList_show from '../assets/Sound/list_show.mp3';
import AssetsJumper from '../assets/Sound/jumper.mp3';
import AssetsGame_end from '../assets/Sound/game_end.mp3';
import AssetsCoin from '../assets/Sound/coin.mp3';
import AssetsButton_press from '../assets/Sound/button_press.mp3';
import AssetsBarrier from '../assets/Sound/barrier.mp3';

export default class Preloader extends Phaser.Scene
{

    loadResources ()
    {
        this.load.image('image-sun', AssetImageSun);
        this.load.image('image-mounts', AssetImageMounts);
        this.load.image('image-airship', AssetImageAirship);
        this.load.image('image-floor', AssetImageFloor);
        this.load.image('image-jumpboard', AssetImageJumpboard);
        this.load.image('image-element_1', AssetImageElement_1);
        this.load.image('image-element_2', AssetImageElement_2);
        this.load.image('image-tree_1', AssetImageTree_1);
        this.load.image('image-tree_2', AssetImageTree_2);
        this.load.image('image-jumper', AssetImageJumper);
        this.load.image('image-coin', AssetImageCoin);
        this.load.image('image-stopper_idle', AssetImageStopperIdle);
        this.load.image('image-stopper_crush', AssetImageStopperCrush);

        this.load.image('btn_fullscreen_active', AssetImageBtnFullscreenActive);
        this.load.image('btn_fullscreen_hover', AssetImageBtnFullscreenHover);
        this.load.image('btn_fullscreen_press', AssetImageBtnFullscreenPress);
        this.load.image('btn_pause_active', AssetImageBtnPauseActive);
        this.load.image('btn_pause_hover', AssetImageBtnPauseHover);
        this.load.image('btn_pause_press', AssetImageBtnPausePress);
        this.load.image('btn_sound_0_active', AssetImageBtnSound_0_Active);
        this.load.image('btn_sound_0_hover', AssetImageBtnSound_0_Hover);
        this.load.image('btn_sound_0_press', AssetImageBtnSound_0_Press);
        this.load.image('btn_sound_1_active', AssetImageBtnSound_1_Active);
        this.load.image('btn_sound_1_hover', AssetImageBtnSound_1_Hover);
        this.load.image('coin_score_plate', AssetImageCoinScore_Plate);
        this.load.image('collect_coin_icon', AssetImageCollectCoinIcon);
        this.load.image('info_plate_big', AssetImageInfoPlateBig);
        this.load.image('leadboard_button_active', AssetImageLeadboardBtnActive);
        this.load.image('leadboard_button_hover', AssetImageLeadboardBtnHover);
        this.load.image('leadboard_button_press', AssetImageLeadboardBtnPress);
        this.load.image('ok_button_active', AssetImageOkButtonActive);
        this.load.image('ok_button_hover', AssetImageOkButtonHover);
        this.load.image('ok_button_press', AssetImageOkButtonPress);
        this.load.image('play_button_active', AssetImagePlayButtonActive );
        this.load.image('play_button_hover', AssetImagePlayButtonHover);
        this.load.image('play_button_press', AssetImagePlayButtonPress);
        this.load.image('collect_distance_icon', AssetImageCollectDistance);
        this.load.image('rays', AssetImageRays);
        this.load.image('star', AssetImageStar);

        this.load.audio('music', AssetsMusic);
        this.load.audio('list_show', AssetsList_show);
        this.load.audio('jumper', AssetsJumper);
        this.load.audio('game_end', AssetsGame_end);
        this.load.audio('coin', AssetsCoin);
        this.load.audio('button_press', AssetsButton_press);
        this.load.audio('barrier', AssetsBarrier);
    }

    private indicator: Phaser.GameObjects.Image;

    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {
        this.cameras.main.setBackgroundColor(0x89C0FC);
        this.load.image('backgrounds-loading', AssetBackgroundLoading);

        let progress = this.add.graphics();
        this.load.on(Phaser.Loader.Events.PROGRESS, (value: number) =>
        {
            progress.clear();
            progress.fillStyle(0x35CFFA, 0.8);
            progress.fillRect(0, this.cameras.main.height - 25, this.cameras.main.width * value, 50);
        });

        this.load.once(Phaser.Loader.Events.FILE_COMPLETE, () =>
        {
            const amplitude = 10
            this.indicator = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2 - amplitude, 'backgrounds-loading');
            this.indicator.setAngle(-25);
            this.indicator.setOrigin(0.55,0.6);
            this.tweens.add({
                targets: this.indicator,
                y: this.indicator.y + amplitude * 2,
                angle: -15,

                ease: Phaser.Math.Easing.Sine.InOut,
                repeat: -1,
                yoyo: true,
                duration: 500
            });
            this.loadResources();
        });

        this.load.once(Phaser.Loader.Events.COMPLETE, () =>
        {
            this.tweens.add({
                targets: this.indicator,
                x: this.indicator.x + this.cameras.main.width,

                ease: Phaser.Math.Easing.Back.In,
                duration: 1000,
                onComplete: () => {
                    this.scene.start('Game');
                }
            });
        });
    }

}
