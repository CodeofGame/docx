// import { IData } from "../../../../../../../../../media/data";
import { XmlAttributeComponent, XmlComponent } from "../../../../../../../../xml-components";
import { Form } from "./form";
import { NoFill } from "./no-fill";
import { Outline } from "./outline";
import { PresetGeometry } from "./preset-geometry";

type BlackAndWhiteMode = "auto" | "black" | "blackGray" | "blackWhite" | "clr" | "gray" | "grayWhite" | "hidden" | "invGray" | "ltGray" | "white";

interface IShapeProperties {
    bwMode: BlackAndWhiteMode;
}

class ShapePropertiesAttributes extends XmlAttributeComponent<IShapeProperties> {
    protected xmlKeys = {
        bwMode: "bwMode",
    };
}

export class ShapeProperties extends XmlComponent {

    constructor(x: number, y: number) {
        super("pic:spPr");

        this.root.push(new ShapePropertiesAttributes({
            bwMode: "auto",
        }));
        this.root.push(new Form(x, y));
        this.root.push(new PresetGeometry());
        this.root.push(new NoFill());
        this.root.push(new Outline());
    }
}
