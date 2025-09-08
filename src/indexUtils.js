import fs from "node:fs/promises";
import {compiler} from "markdown-to-jsx";

export const INDICES_DIRECTORY = process.cwd() + "/indices";

export async function listIndexes() {
    const projects = [];

    for await (const dirEntry of await fs.opendir(INDICES_DIRECTORY)) {
        if (!dirEntry.name.endsWith('.md')) continue;

        projects.push(dirEntry.name.substring(0, dirEntry.name.length - 3));
    }

    return projects;
}

export async function readIndex(name) {
    const filePath = INDICES_DIRECTORY + '/' + name + '.md';
    const contents = (await fs.readFile(filePath)).toString();

    const index = {
        name,
        description: []
    };

    const element = compiler(
        contents
    );

    for (const child of element.props.children) {
        if (child.type === 'title' && child.props.children) {
            index[child.type] = child.props.children[0].trim();
            continue;
        }

        index.description.push(child.props.children[0].trim());
    }

    return index;
}

export async function getAllIndexes() {
    return await Promise.all(
        (await listIndexes())
            .map(name => readIndex(name))
    );
}
