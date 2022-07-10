import Gradient from "./background/Gradient";
import Sun from "./background/Sun";
import Mounts from "./background/Mounts";
import AirShips from "./background/AirShips";

export default class Background extends Phaser.Scene
{
    private gradient: Gradient;
    private sun: Sun;
    private mounts: Mounts;
    private airship: AirShips;

    constructor ()
    {
        super('Background');
    }

    create()
    {
        this.cameras.main.setBackgroundColor(0x89C0FC);

        this.gradient = new Gradient(this);
        this.sun = new Sun(this);
        this.mounts = new Mounts(this);
        this.airship = new AirShips(this);
    }
}
