import { IData } from "../../../../../../../../../media/data";
import { XmlComponent } from "../../../../../../../../xml-components";
import { NonVisualDetailProperties } from "./details";
import { NonVisualTransformProperties } from "./transforms";

export class NonVisualPicProperties extends XmlComponent {

    constructor(imageData: IData) {
        super("pic:nvPicPr");

        this.root.push(new NonVisualDetailProperties(imageData.referenceId, imageData.fileName));
        this.root.push(new NonVisualTransformProperties());
    }
}
