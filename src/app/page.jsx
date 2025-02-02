import './page.css';
import {readAllProjects} from "@/utils";
import {HomePageClient} from "@/app/pageClient";


export const metadata = {
    other: {
        "og:title": `TheJebForge Portfolio`,
        "og:description": 'Collection of projects created by TheJebForge',
        "og:type": 'website',
        "theme-color": '#ff9900'
    }
};

export default async function Home() {
    const projects = await readAllProjects();

    return <HomePageClient projects={projects}/>;
}
