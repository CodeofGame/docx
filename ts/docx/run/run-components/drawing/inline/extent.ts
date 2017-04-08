import { XmlAttributeComponent, XmlComponent } from "../../../../xml-components";

interface IExtentProperties {
    cx: number;
    cy: number;
}

class ExtentAttributes extends XmlAttributeComponent<IExtentProperties> {
    protected xmlKeys = {
        cx: "cx",
        cy: "cy",
    };
}

export class Extent extends XmlComponent {

    constructor(x: number, y: number) {
        super("wp:extent");

        this.root.push(new ExtentAttributes({
            cx: x,
            cy: y,
        }));
    }
}
