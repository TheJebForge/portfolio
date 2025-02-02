'use client'

import {useRef} from "react";
import {Card} from "@/components/Card";
import {SVGBackground} from "@/components/SVGBackground";
import GithubSVG from "@/app/images/github.svg";

export function HomePageClient({projects}) {
    const aboutMeHeaderRef = useRef(null);
    const projectHeaderRef = useRef(null);

    return (
        <div>
            <Card cardClass={'main-card'} background={<SVGBackground type={'hero'}><GithubSVG/></SVGBackground>}>
                <div className={"flex flex-col h-full"}>
                    <h1>
                        Hi! I&apos;m TheJebForge
                    </h1>
                    <h2 style={{color: 'lightgray'}}>
                        Software Developer
                    </h2>
                    <button onClick={() => aboutMeHeaderRef.current.scrollIntoView({behavior: 'smooth'})}
                            className={"hero-button mt-auto"}>About Me</button>
                </div>

            </Card>
            <div ref={aboutMeHeaderRef} className={'things-text'}>
                About me
            </div>
            <div className={'about-text'}>
                I&apos;ve started coding since I was 10, just doing various projects with VB 6.0.
                Then I started learning all the other languages that I found fun, like C++ and Lua.
                Been trying to make games for a while, attempting to make a game engine, learned a lot of things
                in the process when it comes to vector math, trigonometry, matrices and so on.<br/><br/>Managed to get
                as QA, then it moved to Test Automation, and eventually moved to Software Dev. Now I'm just making
                various software related projects on the side, while at work I'm dealing with cloud or web projects.

                <button onClick={() => projectHeaderRef.current.scrollIntoView({behavior: 'smooth'})}
                        className={"about-button mt-4"}>View My Projects</button>
            </div>
            <div ref={projectHeaderRef} className={'things-text'}>
                Things I&apos;ve done
            </div>
            <div className={"project-container gap-0"}>
                {projects.map((project, index) => {
                    const card = <Card
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
                        <div className={'project-skills'}>
                            {project.skills && project.skills.map((skill, i) => {
                                return <span key={i}>
                                    {skill}
                                </span>
                            })}
                        </div>
                        {project.page && <h3 className={'read-more'}>
                            Check it out &gt;
                        </h3>}
                    </Card>;

                    if (project.about) {

                    }

                    return card;
                })}
            </div>
        </div>
    );
}