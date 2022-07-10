export default class Sound
{
    private static instance: Sound;

    static playMusic()
    {
        //Sound.instance.music.play();
    }
    static listShow()
    {
        //Sound.instance.listShow.play();
    }
    static jumper()
    {
        //Sound.instance.jumper.play();
    }
    static gameEnd()
    {
        //Sound.instance.gameEnd.play();
    }
    static coin()
    {
        //Sound.instance.coin.play();
    }
    static buttonPress()
    {
        //Sound.instance.buttonPress.play();
    }
    static barrier()
    {
        //Sound.instance.barrier.play();
    }

    private music: Phaser.Sound.BaseSound | Phaser.Sound.HTML5AudioSound | Phaser.Sound.WebAudioSound;
    private listShow: Phaser.Sound.BaseSound | Phaser.Sound.HTML5AudioSound | Phaser.Sound.WebAudioSound;
    private jumper: Phaser.Sound.BaseSound | Phaser.Sound.HTML5AudioSound | Phaser.Sound.WebAudioSound;
    private gameEnd: Phaser.Sound.BaseSound | Phaser.Sound.HTML5AudioSound | Phaser.Sound.WebAudioSound;
    private coin: Phaser.Sound.BaseSound | Phaser.Sound.HTML5AudioSound | Phaser.Sound.WebAudioSound;
    private buttonPress: Phaser.Sound.BaseSound | Phaser.Sound.HTML5AudioSound | Phaser.Sound.WebAudioSound;
    private barrier: Phaser.Sound.BaseSound | Phaser.Sound.HTML5AudioSound | Phaser.Sound.WebAudioSound;

    constructor(scene:Phaser.Scene)
    {
        Sound.instance = this;

        /*
        this.music = scene.sound.add('music',{
            volume: 0.6,
            loop: true,
            delay:0
        });

        this.listShow = scene.sound.add('list_show');
        this.jumper = scene.sound.add('jumper');
        this.gameEnd = scene.sound.add('game_end');
        this.coin = scene.sound.add('coin');
        this.buttonPress = scene.sound.add('button_press');
        this.barrier = scene.sound.add('barrier');
         */
    }
}
