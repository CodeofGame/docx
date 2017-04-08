import * as fs from "fs";

export interface IData {
    id: number;
    referenceId: number;
    stream: fs.ReadStream;
    path: string;
    fileName: string;
}
