import { XmlAttributeComponent, XmlComponent } from "../../../../xml-components";

interface IEffectExtentProperties {
    l: number;
    t: number;
    r: number;
    b: number;
}

class EffectExtentAttributes extends XmlAttributeComponent<IEffectExtentProperties> {
    protected xmlKeys = {
        l: "l",
        t: "t",
        r: "r",
        b: "b",
    };
}

export class EffectExtent extends XmlComponent {

    constructor() {
        super("wp:effectExtent");

        this.root.push(new EffectExtentAttributes({
            l: 0,
            t: 0,
            r: 0,
            b: 0,
        }));
    }
}
