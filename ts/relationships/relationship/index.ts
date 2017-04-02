import { XmlComponent } from "../../docx/xml-components";
import { IRelationshipAttributesProperties, RelationshipAttributes } from "./attributes";

export class Relationship extends XmlComponent {

    constructor(attributesProps: IRelationshipAttributesProperties) {
        super("Relationship");

        this.root.push(new RelationshipAttributes(attributesProps));
    }
}
