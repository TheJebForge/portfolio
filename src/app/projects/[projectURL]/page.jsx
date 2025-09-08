import './page.css'
import {listProjects, readProject} from "@/projectUtils";
import {Card} from "@/components/Card";
import {SVGBackground} from "@/components/SVGBackground";
import SlideCarousel from "@/components/carousel/SlideCarousel";
import React from "react";

export async function generateStaticParams() {
    return (await listProjects()).map((project) => ({
        projectURL: project,
    }))
}

export async function generateMetadata({ params }) {
    const { projectURL } = await params;

    const project = await readProject(projectURL);

    return {
        other: {
            "og:title": `${project.title} - TheJebForge Portfolio`,
            "og:description": project.desc,
            "og:type": 'website',
            "theme-color": '#ff9900'
        }
    };
}

export default async function Page({params}) {
    const { projectURL } = await params;

    const project = await readProject(projectURL);

    const carousel = <div className={'carousel'}>
        <SlideCarousel slides={project.page.slides ?? []}/>
    </div>;

    const sideContent = <div
        className={project.page.slides ? 'side-content side-content-grid' : 'side-content'}
        style={project.page.slides ? {} : {float: 'right'}}>

        <div className={'side-content-card'}>
            <Card
                cardClass={'page-card'}
                background={
                    project.icon && <SVGBackground type={'page'}>{project.icon}</SVGBackground>
                }
                cardStyle={project.background && {background: project.background}}>
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
            </Card>
        </div>
        {project.page.side && <div className={'side-section'}>
            {project.page.side}
        </div>}
    </div>;

    return project.page.slides ?
        <>
            <div className={'page-container-grid'}>
                {sideContent}
                {carousel}
            </div>
            <div className={'main-content'}>
                {project.page.contents}
            </div>
        </>
        : <div className={'main-content'}>
            {sideContent}
            {project.page.contents}
        </div>;
}