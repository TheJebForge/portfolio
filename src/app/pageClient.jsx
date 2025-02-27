'use client'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, {useRef} from "react";
import {Card} from "@/components/Card";
import {SVGBackground} from "@/components/SVGBackground";
import GithubSVG from "@/app/images/github.svg";
import Image from "next/image";

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
                as QA, then it moved to Test Automation, and eventually moved to Software Dev. Now I&apos;m just making
                various software related projects on the side, while at work I&apos;m dealing with cloud or web projects.
                <br/>
                <button onClick={() => projectHeaderRef.current.scrollIntoView({behavior: 'smooth'})}
                        className={"about-button mt-4"}>View My Projects</button>
            </div>
            <div ref={projectHeaderRef} className={'things-text'}>
                Things I&apos;ve done
            </div>
            <div className={"project-container"}>
                {projects.map((project, index) => {
                    const side = project.about && <SideContent about={project.about} slides={project.page.slides}/>

                    return <Card
                        cardClass={'side-card'}
                        key={index}
                        background={
                            project.icon && <SVGBackground>{project.icon}</SVGBackground>
                        }
                        cardStyle={project.background && {background: project.background}}
                        link={project.page && `/${project.name}`}
                        side={side}>
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
                })}
            </div>
        </div>
    );
}

function getSlideContent(element) {
    if (element.src) {
        return <Image src={element.src} alt={element.alt} fill={true}
                      objectFit={'contain'}/>;
    } else if (element.youtube) {
        return <iframe className={'youtube-player'}
                       src={`https://www.youtube.com/embed/${element.youtube}`}
                       title={element.title ?? "Embedded video"}
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                       referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
    }
}

function SideContent({about, slides}) {
    const container = useRef();

    useGSAP(() => {
        horizontalLoop(".card-side-element", {speed: 1, repeat: -1, paddingRight: 25});
    }, {scope: container});

    return <div className={'card-side-content'}>
        <div className={'card-side-text'}>
            <h3>{about}</h3>
        </div>
        <div className={'card-side-element-container'}>
            <div ref={container} className={'card-side-sub-container'}>
                {new Array(3)
                    .fill(slides ?? [])
                    .flat()
                    .map((e, i) => <div className={'card-side-element'} key={i}>
                        {getSlideContent(e)}
                    </div>)}
            </div>
        </div>
    </div>;
}

/*
This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.

Features:
 - Uses xPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
 - When each item animates to the left or right enough, it will loop back to the other side
 - Optionally pass in a config object with values like "speed" (default: 1, which travels at roughly 100 pixels per second), paused (boolean), repeat, reversed, and paddingRight.
 - The returned timeline will have the following methods added to it:
   - next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
   - current() - returns the current index (if an animation is in-progress, it reflects the final index)
   - times - an Array of the times on the timeline where each element hits the "starting" spot. There's also a label added accordingly, so "label1" is when the 2nd element reaches the start.
 */
function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
        totalWidth, curX, distanceToStart, distanceToLoop, item, i;
    gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i, el) => {
            let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
            xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
            return xPercents[i];
        }
    });
    gsap.set(items, {x: 0});
    totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
        item = items[i];
        curX = xPercents[i] / 100 * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
            .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
            .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(index, vars) {
        vars = vars || {};
        (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
        if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
            vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
            time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
    }
    tl.next = vars => toIndex(curIndex+1, vars);
    tl.previous = vars => toIndex(curIndex-1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance
    if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
    }
    return tl;
}