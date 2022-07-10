import Element from "./Element";
import UI from "../../UI";
import Sound from "../../sound/Sound";

export default class Coin extends Element
{
    onCollided()
    {
        Sound.coin();
        UI.createCollectedCoin(this.image.x, this.image.y);
        this.destroy();
    }
}
