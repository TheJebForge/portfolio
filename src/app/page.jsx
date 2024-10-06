import './page.css';
import {Card} from "@/components/Card";
import {PROJECTS} from "@/data";
import GithubSVG from './images/github.svg';
import {SVGBackground} from "@/components/SVGBackground";
import {nameToURL} from "@/utils";

export default function Home() {
    const projects = [
        ...PROJECTS
    ]

    return (
        <div>
            <Card cardClass={'main-card'} background={<SVGBackground src={GithubSVG} type={'hero'}/>}>
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
            <div className={"columns-xl gap-0"}>
                {projects.map((project, index) => {
                    return <Card
                        cardClass={'side-card'}
                        key={index}
                        background={
                            project.icon && <SVGBackground src={project.icon}/>
                        }
                        cardStyle={project.cardBackground && {background: project.cardBackground}}
                        link={ project.page && `/${nameToURL(project.name)}` }>
                        {project.name && <h1>
                            {project.name}
                        </h1>}
                        {project.shortDesc && <h2 style={{color: 'lightgray'}}>
                            {project.shortDesc}
                        </h2>}
                        {(!project.noPage && project.page) && <h3 className={'read-more'}>
                            Check it out &gt;
                        </h3>}
                    </Card>;
                })}
            </div>
        </div>
    );
}
