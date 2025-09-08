import './page.css';
import {HomePageClient} from "@/app/pageClient";
import {readAllProjects} from "@/projectUtils";


export const metadata = {
    other: {
        "og:title": `TheJebForge Portfolio`,
        "og:description": 'Collection of projects created by TheJebForge',
        "og:type": 'website',
        "theme-color": '#ff9900'
    }
};

export default async function Home() {
    const projects = await readAllProjects('root');

    return <HomePageClient projects={projects}/>;
}
