import { IData } from "../../../../../../../media/data";
import { XmlAttributeComponent, XmlComponent } from "../../../../../../xml-components";
import { Pic } from "./pic";

interface IGraphicDataProperties {
    uri: string;
}

class GraphicDataAttributes extends XmlAttributeComponent<IGraphicDataProperties> {
    protected xmlKeys = {
        uri: "uri",
    };
}

export class GraphicData extends XmlComponent {

    constructor(imageData: IData) {
        super("a:graphicData");

        this.root.push(new GraphicDataAttributes({
            uri: "http://schemas.openxmlformats.org/drawingml/2006/picture",
        }));
        this.root.push(new Pic(imageData));
    }
}
