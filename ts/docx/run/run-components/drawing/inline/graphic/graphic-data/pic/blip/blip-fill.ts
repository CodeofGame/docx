import { IData } from "../../../../../../../../../media/data";
import { XmlComponent } from "../../../../../../../../xml-components";
import { Blip } from "./blip";
import { SourceRectangle } from "./source-rectangle";
import { Stretch } from "./stretch";

export class BlipFill extends XmlComponent {

    constructor(imageData: IData) {
        super("pic:blipFill");
        this.root.push(new Blip(imageData));
        this.root.push(new SourceRectangle());
        this.root.push(new Stretch());
    }
}
