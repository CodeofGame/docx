import { IData } from "../../../../../media/data";
import { XmlAttributeComponent, XmlComponent } from "../../../../xml-components";
import { DocProperties } from "./doc-properties";
import { EffectExtent } from "./effect-extent";
import { Extent } from "./extent";
import { Graphic } from "./graphic";
import { GraphicFrameProperties } from "./graphic-frame";

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
        this.root.push(new Extent(imageData.cx, imageData.cy));
        this.root.push(new EffectExtent());
        this.root.push(new DocProperties(imageData));
        this.root.push(new GraphicFrameProperties());
        this.root.push(new Graphic(imageData));
    }
}
