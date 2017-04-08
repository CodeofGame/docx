import { XmlAttributeComponent, XmlComponent } from "../../../../../../../../../xml-components";
import { PicLocks } from "./locks";

interface INonVisualTransformProperties {
    noChangeAspect?: number;
    noCrop?: number;
    noMove?: number;
    noResize?: number;
    noRotation?: number;
    noSelect?: number;
}

class NonVisualTransformAttributes extends XmlAttributeComponent<INonVisualTransformProperties> {
    protected xmlKeys = {
        noChangeAspect: "noChangeAspect",
        noCrop: "noCrop",
        noMove: "noMove",
        noResize: "noResize",
        noRotation: "noRot",
        noSelect: "noSelect",
    };
}

export class NonVisualTransformProperties extends XmlComponent {

    constructor() {
        super("pic:cNvPicPr");

        this.root.push(new PicLocks());
    }
}
