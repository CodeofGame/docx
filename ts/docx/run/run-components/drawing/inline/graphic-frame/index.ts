import { XmlComponent } from "../../../../../xml-components";
import { GraphicFrameLocks } from "./graphic-frame-locks";

export class GraphicFrameProperties extends XmlComponent {

    constructor() {
        super("wp:cNvGraphicFramePr");

        this.root.push(new GraphicFrameLocks());
    }
}
