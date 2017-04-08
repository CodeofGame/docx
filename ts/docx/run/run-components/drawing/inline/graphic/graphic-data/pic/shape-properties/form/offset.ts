import { XmlAttributeComponent, XmlComponent } from "../../../../../../../../../xml-components";

interface IOffsetProperties {
    x: number;
    y: number;
}

class OffsetAttributes extends XmlAttributeComponent<IOffsetProperties> {
    protected xmlKeys = {
        x: "x",
        y: "y",
    };
}

export class Offset extends XmlComponent {

    constructor(x: number, y: number) {
        super("a:off");

        this.root.push(new OffsetAttributes({
            x: x,
            y: y,
        }));
    }
}
