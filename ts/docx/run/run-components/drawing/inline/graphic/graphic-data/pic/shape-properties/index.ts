import { IData } from "../../../../../../../../../media/data";
import { XmlAttributeComponent, XmlComponent } from "../../../../../../../../xml-components";

type BlackAndWhiteMode = "auto" | "black" | "blackGray" | "blackWhite" | "clr" | "gray" | "grayWhite" | "hidden" | "invGray" | "ltGray" | "white";

interface IShapeProperties {
    bwMode: BlackAndWhiteMode;
}

class ShapePropertiesAttributes extends XmlAttributeComponent<IShapeProperties> {
    protected xmlKeys = {
        bwMode: "bwMode",
    };
}

export class ShapeProperties extends XmlComponent {

    constructor() {
        super("pic:spPr");

        this.root.push(new ShapePropertiesAttributes({
            bwMode: "auto",
        }));
        // this.root.push(new NonVisualDetailProperties(imageData.referenceId, imageData.fileName));
        // this.root.push(new NonVisualTransformProperties());
    }
}
