import {PROJECTS} from "@/data";
import {nameToURL} from "@/utils";
import {Card} from "@/components/Card";
import {SVGBackground} from "@/components/SVGBackground";
import SlideCarousel from "@/components/carousel/SlideCarousel";
import './page.css'


export function generateStaticParams() {
    return PROJECTS.map((project) => ({
        projectURL: nameToURL(project.name),
    }))
}

export default function Page({
    params: { projectURL }
}) {

    const project = PROJECTS.find(p => nameToURL(p.name) === projectURL);

    const carousel = <div className={'carousel'}>
        <SlideCarousel slides={project.page.slides ?? []}/>
    </div>;

    const sideContent = <div
        className={project.page.slides ? 'side-content side-content-grid' : 'side-content'}
        style={project.page.slides ? {} : {float: 'right'}}>

        <Card
            cardClass={'page-card'}
            background={
                project.icon && <SVGBackground src={project.icon} type={'page'}/>
            }
            cardStyle={project.cardBackground && {background: project.cardBackground}}>
            {project.name && <h1>
                {project.name}
            </h1>}
            {project.shortDesc && <h2 style={{color: 'lightgray'}}>
                {project.shortDesc}
            </h2>}
        </Card>
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
                {project.page.content}
            </div>
        </>
        : <div className={'main-content'}>
            {sideContent}
            {project.page.content}
        </div>;
}