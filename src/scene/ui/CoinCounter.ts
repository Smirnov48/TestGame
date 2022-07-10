export default class CoinCounter
{
    private text: Phaser.GameObjects.Text;
    private count: number = 0;

    constructor(scene: Phaser.Scene)
    {
        scene.add.image(45,35, 'coin_score_plate').setOrigin(0, 0.5);
        scene.add.image(45,35, 'collect_coin_icon').setDepth(1000);

        this.text =  scene.add.text(135, 35, '0', { font: '32px Ravie', color: '#FFFFFF' });
        this.text.setOrigin(1, 0.5);
    }

    inc()
    {
        this.count++;
        this.text.setText(this.count.toString());
    }

    reset()
    {
        this.count = 0;
        this.text.setText('0');
    }

    getValue()
    {
        return this.count;
    }
}
