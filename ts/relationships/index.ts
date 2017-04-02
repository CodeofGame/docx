import { XmlComponent } from "../docx/xml-components";
import { RelationshipsAttributes } from "./attributes";
import { Relationship } from "./relationship";

export class Relationships extends XmlComponent {

    private counter: number;

    constructor() {
        super("Relationships");
        this.root.push(new RelationshipsAttributes({
            xmlns: "http://schemas.openxmlformats.org/package/2006/relationships",
        }));

        this.root.push(new Relationship({
            id: "rId1",
            type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
            target: "styles.xml",
        }));

        this.root.push(new Relationship({
            id: "rId2",
            type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering",
            target: "numbering.xml",
        }));

        this.counter = 3;
    }

    public addRelationship(type: string, target: string): void {
        this.root.push(new Relationship({
            id: `rId${this.counter}`,
            type: type,
            target: target,
        }));
        this.counter++;
    }
}
