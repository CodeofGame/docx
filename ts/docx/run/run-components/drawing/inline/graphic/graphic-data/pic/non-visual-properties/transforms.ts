import { XmlAttributeComponent, XmlComponent } from "../../../../../../../../xml-components";

interface INonVisualTransformProperties {
    noChangeAspect?: string;
    noCrop?: string;
    noMove?: string;
    noResize?: string;
    noRotation?: string;
    noSelect?: string;
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

        this.root.push(new NonVisualTransformAttributes({}));
    }
}
