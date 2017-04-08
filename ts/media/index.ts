import * as fs from "fs";
import * as path from "path";
import { IData } from "./data";

const RELATIONSHIP_OFFSET = 6;

export class Media {
    private map: Map<string, IData>;

    constructor() {
        this.map = new Map<string, IData>();
    }

    public getMedia(key: string): IData {
        const data = this.map.get(key);

        if (data === undefined) {
            throw new Error(`Cannot find image with the key ${key}`);
        }

        return data;
    }

    public addMedia(key: string, filePath: string): void {
        this.map.set(key, {
            id: this.map.values.length,
            naturalId: this.map.values.length + 1,
            referenceId: this.map.values.length + RELATIONSHIP_OFFSET,
            stream: fs.createReadStream(filePath),
            path: filePath,
            fileName: path.basename(filePath),
            cx: 3947160,
            cy: 3947160,
        });
    }

    public get array(): IData[] {
        const array = new Array<IData>();

        this.map.forEach((data) => {
            array.push(data);
        });

        return array;
    }
}
