import * as fs from "fs";

export interface IData {
    id: number;
    naturalId: number;
    referenceId: number;
    stream: fs.ReadStream;
    path: string;
    fileName: string;
    cx: number;
    cy: number;
}
