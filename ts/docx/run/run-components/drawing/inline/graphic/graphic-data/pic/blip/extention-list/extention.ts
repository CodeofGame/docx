import { XmlAttributeComponent, XmlComponent } from "../../../../../../../../../xml-components";
import { UseLocalDpi } from "./use-local-dpi";

interface IExtentionProperties {
    uri?: string;
}

class ExtentionAttributes extends XmlAttributeComponent<IExtentionProperties> {
    protected xmlKeys = {
        uri: "uri",
    };
}

export class Extention extends XmlComponent {

    constructor() {
        super("a:ext");

        this.root.push(new ExtentionAttributes({
        }));
        this.root.push(new UseLocalDpi());
    }
}
