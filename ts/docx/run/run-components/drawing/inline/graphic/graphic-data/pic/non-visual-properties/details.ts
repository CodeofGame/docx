import { XmlAttributeComponent, XmlComponent } from "../../../../../../../../xml-components";

interface INonVisualDetailProperties {
    id: number;
    name: string;
}

class NonVisualDetailAttributes extends XmlAttributeComponent<INonVisualDetailProperties> {
    protected xmlKeys = {
        id: "id",
        name: "name",
    };
}

export class NonVisualDetailProperties extends XmlComponent {

    constructor(uniqueId: number, name: string) {
        super("pic:cNvPr");

        this.root.push(new NonVisualDetailAttributes({
            id: uniqueId,
            name: name,
        }));
    }
}
