import '../page.css';
import {getAllIndexes} from "@/indexUtils";
import {readAllProjects} from "@/projectUtils";
import {HomePageClient} from "@/app/pageClient";

export async function generateStaticParams() {
    return (await getAllIndexes()).map((i) => ({index: i.name}))
}

export const metadata = {
    other: {
        "og:title": `TheJebForge Portfolio`,
        "og:description": 'Collection of projects created by TheJebForge',
        "og:type": 'website',
        "theme-color": '#ff9900'
    }
};


export default async function IndexedHome({params}) {
    const { index } = await params;
    const projects = await readAllProjects(index);

    return <HomePageClient projects={projects} index={index}/>;
}
