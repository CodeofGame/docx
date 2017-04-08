import { XmlAttributeComponent, XmlComponent } from "../../../../../../../../../xml-components";

interface IPicLocksProperties {
    noChangeAspect?: number;
    noChangeArrowheads?: number;
}

class PicLocksAttributes extends XmlAttributeComponent<IPicLocksProperties> {
    protected xmlKeys = {
        noChangeAspect: "noChangeAspect",
        noChangeArrowheads: "noChangeArrowheads",
    };
}

export class PicLocks extends XmlComponent {

    constructor() {
        super("a:picLocks");

        this.root.push(new PicLocksAttributes({
            noChangeAspect: 1,
            noChangeArrowheads: 1,
        }));
    }
}
