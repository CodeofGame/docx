import { IData } from "../../../../../media/data";
import { XmlAttributeComponent, XmlComponent } from "../../../../xml-components";
import { Graphic } from "./graphic";

// distT="0" distB="0" distL="0" distR="0"
interface IInlineAttributesProperties {
    distT: number;
    distB: number;
    distL: number;
    distR: number;
}

class InlineAttributes extends XmlAttributeComponent<IInlineAttributesProperties> {
    protected xmlKeys = {
        distT: "distT",
        distB: "distB",
        distL: "distL",
        distR: "distR",
    };
}

export class Inline extends XmlComponent {

    constructor(imageData: IData) {
        super("wp:inline");

        this.root.push(new InlineAttributes({
            distT: 0,
            distB: 0,
            distL: 0,
            distR: 0,
        }));
        this.root.push(new Graphic(imageData));
    }
}
