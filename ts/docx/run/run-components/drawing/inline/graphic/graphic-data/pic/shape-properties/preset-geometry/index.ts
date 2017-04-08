import { XmlAttributeComponent, XmlComponent } from "../../../../../../../../../xml-components";
import { AdjustmentValues } from "./adjustment-values";

interface IExtendsProperties {
    prst: string;
}

class PresetGeometryAttributes extends XmlAttributeComponent<IExtendsProperties> {
    protected xmlKeys = {
        prst: "prst",
    };
}

export class PresetGeometry extends XmlComponent {

    constructor() {
        super("a:prstGeom");

        this.root.push(new PresetGeometryAttributes({
            prst: "rect",
        }));

        this.root.push(new AdjustmentValues());
    }
}
