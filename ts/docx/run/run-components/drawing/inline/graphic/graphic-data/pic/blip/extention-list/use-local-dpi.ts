import { XmlAttributeComponent, XmlComponent } from "../../../../../../../../../xml-components";

interface IUseLocalDpiProperties {
    a14: string;
    val: number;
}

class UseLocalDpiAttributes extends XmlAttributeComponent<IUseLocalDpiProperties> {
    protected xmlKeys = {
        a14: "xmlns:a14",
        val: "val",
    };
}

export class UseLocalDpi extends XmlComponent {

    constructor() {
        super("a14:useLocalDpi");
        this.root.push(new UseLocalDpiAttributes({
            a14: "http://schemas.microsoft.com/office/drawing/2010/main",
            val: 0,
        }));
    }
}
