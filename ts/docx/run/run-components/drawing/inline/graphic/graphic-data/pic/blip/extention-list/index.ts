import { XmlComponent } from "../../../../../../../../../xml-components";
import { Extention } from "./extention";

export class ExtentionList extends XmlComponent {

    constructor() {
        super("a:extLst");
        this.root.push(new Extention());
    }
}
