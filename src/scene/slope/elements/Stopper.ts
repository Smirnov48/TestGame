import Element from "./Element";
import Slope from "../../Slope";
import Sound from "../../sound/Sound";

export default class Stopper extends Element
{
    onCollided()
    {
        Sound.barrier();
        if (this.image)
        {
            this.image.setTexture('image-stopper_crush');
        }
        (this.scene as Slope).onStopper();
    }
}
