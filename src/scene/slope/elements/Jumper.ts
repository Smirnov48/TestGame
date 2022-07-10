import Element from "./Element";
import Slope from "../../Slope";
import Sound from "../../sound/Sound";

export default class Jumper extends Element
{
    onCollided()
    {
        Sound.jumper();
        (this.scene as Slope).onJumper();
    }
}
