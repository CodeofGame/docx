import { IData } from "../../../../../media/data";
import { XmlAttributeComponent, XmlComponent } from "../../../../xml-components";

interface IDocProperties {
    id: number;
    name: string;
    descr: string;
}

class DocPropertiesAttributes extends XmlAttributeComponent<IDocProperties> {
    protected xmlKeys = {
        id: "id",
        name: "name",
        descr: "desc",
    };
}

export class DocProperties extends XmlComponent {

    constructor(imageData: IData) {
        super("wp:docPr");

        this.root.push(new DocPropertiesAttributes({
            id: imageData.id,
            name: `Picture ${imageData.id}`,
            descr: imageData.fileName,
        }));
    }
}
