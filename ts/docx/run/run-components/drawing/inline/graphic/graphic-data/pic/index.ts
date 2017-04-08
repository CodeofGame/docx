import { IData } from "../../../../../../../../media/data";
import { XmlAttributeComponent, XmlComponent } from "../../../../../../../xml-components";
import { BlipFill } from "./blip/blip-fill";
import { NonVisualPicProperties } from "./non-visual-properties";
import { ShapeProperties } from "./shape-properties";

interface IPicProperties {
    pic: string;
}

class PicAttributes extends XmlAttributeComponent<IPicProperties> {
    protected xmlKeys = {
        pic: "xmlns:pic",
    };
}

export class Pic extends XmlComponent {

    constructor(imageData: IData) {
        super("pic:pic");

        this.root.push(new PicAttributes({
            pic: "http://schemas.openxmlformats.org/drawingml/2006/picture",
        }));
        this.root.push(new NonVisualPicProperties(imageData));
        this.root.push(new BlipFill(imageData));
        this.root.push(new ShapeProperties(imageData.cx, imageData.cy));
    }
}
