import { XmlAttributeComponent, XmlComponent } from "../../../../../../../../../xml-components";

interface IExtendsProperties {
    cx: number;
    cy: number;
}

class ExtendsPropertiesAttributes extends XmlAttributeComponent<IExtendsProperties> {
    protected xmlKeys = {
        cx: "cx",
        cy: "cy",
    };
}

export class Extends extends XmlComponent {

    constructor(x: number, y: number) {
        super("a:ext");

        this.root.push(new ExtendsPropertiesAttributes({
            cx: x,
            cy: y,
        }));
    }
}
