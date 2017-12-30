import { Document } from "./document";
import { Media } from "./media";
import { Numbering } from "./numbering";
import { Paragraph } from "./paragraph";
import { IPropertiesOptions, Properties } from "./properties";
import { Styles } from "./styles";
import { DefaultStylesFactory } from "./styles/factory";
import { Table } from "./table";

export class File {

    private document: Document;
    private styles: Styles;
    private properties: Properties;
    private numbering: Numbering;
    private media: Media;

    constructor(options?: IPropertiesOptions) {
        this.document = new Document();
        const stylesFactory = new DefaultStylesFactory();
        this.styles = stylesFactory.newInstance();

        if (!options) {
            options = {
                creator: "Un-named",
                revision: "1",
                lastModifiedBy: "Un-named",
            };
        }

        this.properties = new Properties(options);
        this.numbering = new Numbering();
        this.media = new Media();
    }

    public addParagraph(paragraph: Paragraph): void {
        this.document.addParagraph(paragraph);
    }

    public createParagraph(text?: string): Paragraph {
        return this.document.createParagraph();
    }

    public addTable(table: Table): void {
        return this.document.addTable(table);
    }

    public createTable(rows: number, cols: number): Table {
        return this.document.createTable(rows, cols);
    }

    public get Document(): Document {
        return this.document;
    }

    public get Styles(): Styles {
        return this.styles;
    }

    public get Properties(): Properties {
        return this.properties;
    }

    public get Numbering(): Numbering {
        return this.numbering;
    }

    public get Media(): Media {
        return this.media;
    }
}