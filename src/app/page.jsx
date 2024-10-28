import './page.css';
import {Card} from "@/components/Card";
import GithubSVG from './images/github.svg';
import {SVGBackground} from "@/components/SVGBackground";
import {readAllProjects} from "@/utils";

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

    return (
        <div>
            <Card cardClass={'main-card'} background={<SVGBackground type={'hero'}><GithubSVG/></SVGBackground>}>
                <h1>
                    Hi! I&apos;m TheJebForge
                </h1>
                <h2 style={{color: 'lightgray'}}>
                    Software Developer<br/>
                    Tech Enthusiast<br/>
                    Multimedia Artist
                </h2>
            </Card>
            <div className={'things-text'}>
                {"Things I've done"}
            </div>
            <div className={"project-container gap-0"}>
                {projects.map((project, index) => {
                    return <Card
                        cardClass={'side-card'}
                        key={index}
                        background={
                            project.icon && <SVGBackground>{project.icon}</SVGBackground>
                        }
                        cardStyle={project.background && {background: project.background}}
                        link={project.page && `/${project.name}`}>
                        {project.title && <h1>
                            {project.title}
                        </h1>}
                        {project.desc && <h2 style={{color: 'lightgray'}}>
                            {project.desc}
                        </h2>}
                        {project.page && <h3 className={'read-more'}>
                            Check it out &gt;
                        </h3>}
                    </Card>;
                })}
            </div>
        </div>
    );
}
