import { IData } from "../../../../../media/data";
import { XmlComponent } from "../../../../xml-components";
import { Graphic } from "./graphic";

export class Inline extends XmlComponent {

    constructor(imageData: IData) {
        super("wp:inline");
        this.root.push(new Graphic(imageData));
    }
}
