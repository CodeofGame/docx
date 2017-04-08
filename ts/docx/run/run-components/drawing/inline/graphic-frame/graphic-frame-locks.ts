import { XmlAttributeComponent, XmlComponent } from "../../../../../xml-components";

interface IGraphicFrameLocksProperties {
    a: string;
    noChangeAspect: number;
}

class GraphicFrameLocksAttributes extends XmlAttributeComponent<IGraphicFrameLocksProperties> {
    protected xmlKeys = {
        a: "xmlns:a",
        noChangeAspect: "noChangeAspect",
    };
}

export class GraphicFrameLocks extends XmlComponent {

    constructor() {
        super("a:graphicFrameLocks");

        this.root.push(new GraphicFrameLocksAttributes({
            a: "http://schemas.openxmlformats.org/drawingml/2006/main",
            noChangeAspect: 1,
        }));
    }
}
