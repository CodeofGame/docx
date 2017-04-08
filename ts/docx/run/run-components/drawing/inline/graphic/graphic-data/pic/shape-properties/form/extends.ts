import { XmlAttributeComponent, XmlComponent } from "../../../../../../../../../xml-components";

interface IExtendsProperties {
    cx: number;
    cy: number;
}

class ExtendsAttributes extends XmlAttributeComponent<IExtendsProperties> {
    protected xmlKeys = {
        cx: "cx",
        cy: "cy",
    };
}

export class Extends extends XmlComponent {

    constructor(x: number, y: number) {
        super("a:ext");

        this.root.push(new ExtendsAttributes({
            cx: x,
            cy: y,
        }));
    }
}
