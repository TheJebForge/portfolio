import fs from "node:fs/promises";
import { compiler } from "markdown-to-jsx";
import {Tooltip} from "@/components/Tooltip";

export const PROJECTS_DIRECTORY = process.cwd() + "/projects";

export async function listProjects() {
    const projects = [];

    for await (const dirEntry of await fs.opendir(PROJECTS_DIRECTORY)) {
        if (!dirEntry.name.endsWith('.md')) continue;

        projects.push(dirEntry.name.substring(0, dirEntry.name.length - 3));
    }

    return projects;
}

const TAGGED_META = [
    'title',
    'desc',
    'about',
    'background',
    'order'
];

export async function readProject(name) {
    const filePath = PROJECTS_DIRECTORY + '/' + name + '.md';
    const contents = (await fs.readFile(filePath)).toString();

    const project = {
        name,
        skills: []
    };

    const element = compiler(
        contents,
        {
            overrides: {
                Tooltip: {
                    component: Tooltip
                },
                a: {
                    component: ({children, href, title}) => <a href={href} title={title} target={'_blank'}>{children}</a>
                }
            }
        }
    );

    let contentsCount = 0;

    const sideLinks = [];
    const slides = [];
    const normal = [];

    for (const child of element.props.children) {
        if (child.type === 'icon' && child.props.children) {
            const Icon = (await import('/projects/icons/' + child.props.children[0])).default;
            project.icon = <Icon/>;
            continue;
        }

        if (TAGGED_META.includes(child.type) && child.props.children) {
            project[child.type] = child.props.children[0];
            continue;
        }

        if (child.type === 'meta') {
            project[child.props.name ?? 'unknown'] = child.props.content;
            continue;
        }

        contentsCount++;

        if (child.type === 'side') {
            sideLinks.push(
                child.props.href ?
                    <a href={child.props.href} key={contentsCount} target={'_blank'}>{child.props.children}</a>
                    : <span key={contentsCount}>{child.props.children}</span>
            );
        } else if (child.type === 'slide') {
            slides.push(child.props);
        } else if (child.type === 'skill' && child.props.children) {
            project.skills.push(child.props.children[0]);
        } else {
            normal.push(child);
        }
    }

    project.page = contentsCount ? {
        contents: normal,
        side: sideLinks,
        slides: slides.length > 0 ? slides : undefined
    } : null;

    return project;
}

export async function readAllProjects() {
    return (await Promise.all(
        (await listProjects())
            .map(name => readProject(name))
    )).sort(
        (a, b) => {
            const aO = a.order;
            const bO = b.order;

            if (aO === undefined) {
                return 1;
            }

            if (bO === undefined) {
                return -1;
            }

            return parseInt(aO) - parseInt(bO);
        }
    );
}