const docx = require('../build');

var doc = new docx.Document();

var paragraph = new docx.Paragraph("Hello World");
var institutionText = new docx.TextRun("University College London").bold();
var dateText = new docx.TextRun("5th Dec 2015").tab().bold();
paragraph.addRun(institutionText);
paragraph.addRun(dateText);

doc.addParagraph(paragraph);

// Feature coming soon
var media = new docx.Media();
// media.addMedia("happy-penguins", "./demo/penguins.jpeg");
media.addMedia("happy-cats", "./demo/cats.jpeg");
var pictureRun = new docx.PictureRun(media.getMedia("happy-cats"));

var paragraph = new docx.Paragraph();
paragraph.addRun(pictureRun);
doc.addParagraph(paragraph);

var exporter = new docx.LocalPacker(doc, undefined, undefined, undefined, media);
exporter.pack('My Document');

console.log('Document created succesfully at project root!');