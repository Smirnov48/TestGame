import Phaser from 'phaser';

import Game from './scene/Game';
import Preloader from "./scene/Preloader";
import UI from "./scene/UI";
import Background from "./scene/Background";
import Slope from "./scene/Slope";

const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 1280,
    height: 640,
    roundPixels: true,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        Preloader, Background, Slope, Game, UI
    ]
};

const game = new Phaser.Game(config);
