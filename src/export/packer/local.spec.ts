/* tslint:disable:typedef space-before-function-paren */
import * as fs from "fs";

import { File } from "../../docx";
import { Paragraph } from "../../docx/paragraph";
import { LocalPacker } from "../../export/packer/local";

describe("LocalPacker", () => {
    let packer: LocalPacker;

    beforeEach(() => {
        const file = new File({
            creator: "Dolan Miu",
            revision: "1",
            lastModifiedBy: "Dolan Miu",
        });
        const paragraph = new Paragraph("test text");
        const heading = new Paragraph("Hello world").heading1();
        file.addParagraph(new Paragraph("title").title());
        file.addParagraph(heading);
        file.addParagraph(new Paragraph("heading 2").heading2());
        file.addParagraph(paragraph);

        packer = new LocalPacker(file);
    });

    describe("#pack()", () => {
        it("should create a standard docx file", async function () {
            this.timeout(99999999);
            await packer.pack("build-tests/tests/test");
            fs.statSync("build-tests/tests/test.docx");
        });
    });

    describe("#packPdf", () => {
        it("should create a standard PDF file", async function () {
            this.timeout(99999999);

            await packer.packPdf("build-tests/tests/pdf-test");
            fs.statSync("build-tests/tests/pdf-test.pdf");
        });
    });
});