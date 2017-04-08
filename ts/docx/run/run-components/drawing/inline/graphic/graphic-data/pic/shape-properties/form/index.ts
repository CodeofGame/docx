import { XmlComponent } from "../../../../../../../../../xml-components";
import { Extends } from "./extends";
import { Offset } from "./offset";

export class Form extends XmlComponent {

    constructor() {
        super("a:xfrm");

        this.root.push(new Offset(0, 0));
        this.root.push(new Extends(5269230, 3521710));
    }
}
