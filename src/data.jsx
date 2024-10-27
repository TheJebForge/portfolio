import GithubSVG from './app/images/github.svg';
import StreamduckSVG from '../projects/icons/streamduck.svg';
import TricksterLISP from '../projects/icons/trickster-lisp.svg';
import MeshSVG from '../projects/icons/mesh.svg';
import {Tooltip} from '@/components/Tooltip';

export const PROJECTS = [
    {
        name: 'Streamduck',
        shortDesc: 'Macro Device Software',
        icon: StreamduckSVG,
        cardBackground: 'linear-gradient(135deg, #584063ff 10%, #dc76adff 100%)',
        page: {
            slides: [
                {
                    src: '/images/streamduck-screenshot.png',
                    alt: 'Old Streamduck Screenshot',
                    showTitle: true
                }
            ],
            content: <>
                <h4>
                    How it started
                </h4>
                <p>
                    The project was started out of frustration that the official Elgato Stream Deck software only
                    supports Windows and Mac platforms. So, if you have the hardware
                    and you&apos;re running Linux as your main OS,
                    the device becomes a paperweight.
                </p>
                <p>
                    I&apos;ve tried to solve that by starting my own project for this,
                    the idea of the project is to be as extensible as possible.
                    Plugins should be able to change almost everything and are the
                    primary way to get more functionality out of the software.
                </p>
                <p>
                    The project was initially started on Rust, but the difficulty of writing plugin support
                    on Rust drove me to switch to C#. C# is a better choice for this kind of software,
                    plugin support is very trivial to make and features of C# allow this software to act as a
                    framework for plugins. Automating many aspects of creating new features using plugins,
                    like reflection based configuration, automatic handling of config files,
                    reflection-based device actions, and so on.
                </p>
                <h4>
                    How it&apos;s going
                </h4>
                <p>
                    The project is still in development, but other projects took precedence like this portfolio site.
                    As soon as I&apos;m settled, I&apos;ll continue working on personal projects like this.
                </p>
                <h4>
                    What I&apos;ve learned
                </h4>
                <p>
                    This project taught me to pick &qout;the right tool for the job&qout;. Starting the project on
                    Rust language was somewhat of a mistake, but I&apos;m glad I did. Implementing plugin support
                    on Rust would require me to essentially write my application multiple times.
                    I would have to write the actual application, then I would have to write the
                    application&apos;s <Tooltip
                        link={'https://en.wikipedia.org/wiki/Foreign_function_interface'}
                        value={'Foreign Function Interface'}>
                        FFI
                    </Tooltip>,
                    and then write FFI for plugins to use, and even then I&apos;m not done.
                    I&apos;ll also have to write an entire SDK for plugins, so plugin dev wouldn&apos;t be miserable.
                </p>
                <p>
                    Experiencing so many problems writing this software on Rust got rid of my fanaticism
                    over Rust and made me explore other programming languages. If I started this project on C# first,
                    I wouldn&apos;t have this valuable experience.
                </p>
            </>,
            side: <>
                <a href={'https://github.com/streamduck-org/streamduck'} target={"_blank"}>
                    View Project&apos;s Github
                </a>
            </>
        }
    },
    {
        name: 'elgato-streamdeck',
        shortDesc: 'Rust library for Elgato Stream Decks',
        icon: StreamduckSVG,
        cardBackground: 'linear-gradient(135deg, #584063ff 10%, #dc76adff 100%)',
        page: {
            slides: [
                {
                    src: '/images/streamdeck-sample.jpg',
                    alt: 'Elgato Stream Deck running library\'s sample project',
                    showTitle: true
                }
            ],
            content: <>
                <h4>
                    What is this?
                </h4>
                <p>
                    This project was developed in conjunction with Rust version of Streamduck, it allows for easy
                    interaction with Elgato Stream Decks while being <i>✨blazingly fast✨</i>. Some other libraries
                    already existed to fill this purpose on Rust language, but they were pretty limited. So I made my
                    own!
                </p>
                <p>
                    It&apos;s using hidapi to interact with Stream Deck devices, a lot of HID code was taken from libraries
                    on other languages, since it was already reverse engineered. But I made the library&apos;s API
                    fit Streamduck&apos;s needs.
                </p>
                <p>
                    Nowadays there&apos;s a third party project that&apos;s using this library - <a href={'https://github.com/ninjadev64/OpenDeck'} target={'_blank'}>OpenDeck</a>.
                    That software appears to be an open-source alternative for Elgato&apos;s software, they helped out
                    with development of elgato-streamdeck by creating issues and submitting pull requests.
                </p>
                <p>
                    I plan to make a C# library that will wrap this library as a native module, so I can keep using
                    the work that went into this library with newer version of Streamduck.
                </p>
                <h4>
                    What I learned
                </h4>
                <p>
                    I learned how to interact with HID devices and develop libraries around that, and now the result
                    is serving the open-source community too!
                </p>
            </>,
            side: <>
                <span>
                    This project has over 10k downloads!
                </span>
                <a href={'https://github.com/streamduck-org/elgato-streamdeck'} target={'_blank'}>
                    View Project&apos;s Github
                </a>
                <a href={'https://crates.io/crates/elgato-streamdeck'} target={'_blank'}>
                    View crates.io
                </a>
            </>
        }
    },
    {
        name: 'Trickster LISP',
        shortDesc: 'LISP transpiler for Trickster',
        icon: TricksterLISP,
        cardBackground: 'linear-gradient(135deg, #707dad 10%, #88bdb8 100%)',
        page: {
            slides: [
                {
                    youtube: '3KlrjCYHStc',
                    title: 'Showcase'
                }
            ],
            content: <>
                <h4>
                    What is this?
                </h4>
                <p>
                    This is a Minecraft addon mod for Trickster mod, that adds a LISP transpiler that can convert Trickster
                    spells to LISP and back, letting you create and modify Trickster spells using LISP.
                </p>
                <p>
                    The project was started from a joke that Trickster spell structure looks pretty close to LISP,
                    and then I decided to make this a reality. Despite this not looking that exciting, the technology
                    that I had to create/use to get here should be impressive.
                </p>
                <h4>
                    What it took
                </h4>
                <p>
                    I started creating the project with <Tooltip
                        link={'https://www.antlr.org/'}
                        value={'ANother Tool for Language Recognition'}>ANTLR</Tooltip> which allowed me to generate a
                    parser to take written code into a <Tooltip value={'Context Syntax Tree'}>CST</Tooltip>.
                    Using provided CST, I&apos;m able to create an <Tooltip
                        link={'https://en.wikipedia.org/wiki/Abstract_syntax_tree'}
                        value={'Abstract Syntax Tree'}>AST</Tooltip> that
                    represents the code in a usable form. This project supports preprocessor macros, so before
                    I start conversion to Trickster spells, I apply the macros to any call expression that has the macro&apos;s
                    name, unwrapping the code that the macro contains and replacing the macro&apos;s argument markers with whatever
                    expressions that were initially passed to the call expression.
                </p>
                <p>
                    Having my macros applied, I proceed to walk my AST and attempt to map my expressions to Trickster
                    counterparts, I check for Fragment functions first, then I check for primitives, and then attempt
                    to see if the expression is referring to a Trickster trick. In the end, I end up with an equivalent
                    Trickster spell as whatever was passed into my transpiler as LISP code.
                </p>
                <p>
                    But it can also do that conversion in reverse, hence it&apos;s a transpiler. It walks the Trickster
                    spell and attempts to identify fragments and map them to LISP representations, then it maps SpellParts
                    with PatternGlyphs into trick call LISP representations with complex logic to avoid unnecessary
                    parentheses and pattern detection to simplify certain pairs of tricks into simpler representations.
                    In the end, I get the equivalent LISP AST representation of the Trickster spell.
                </p>
                <h4>
                    What I learned
                </h4>
                <p>
                    Even though I already knew how to use ANTLR, I finally got to apply my skills in creating a programming
                    language. I would love to try and make an interpreter for this language at some point, but for now,
                    it only exists to be transpiled from/into Trickster spells.
                </p>
            </>,
            side: <>
                <a href={'https://modrinth.com/mod/trickster-lisp'} target={'_blank'}>
                    View Mod page
                </a>
                <a href={'https://github.com/TheJebForge/trickster-lisp'} target={'_blank'}>
                    View Mod source code
                </a>
            </>
        }
    },
    {
        name: 'Navmesh System',
        shortDesc: 'Pathfinding system for Resonite',
        icon: MeshSVG,
        cardBackground: 'linear-gradient(135deg, rgb(67 118 128) 10%, rgb(50 124 79) 100%)',
        page: {
            slides: [
                {
                    youtube: 'TI-qpLwl4h8',
                    title: 'Awards Ceremony'
                },
                {
                    youtube: '4i_CRigihu4',
                    title: 'WorldHop section'
                }
            ],
            content: <>
                <h4>
                    What is this?
                </h4>
                <p>
                    This project allows people to design navigation meshes and have agents that use those meshes to
                    pathfind to different points on the mesh. It was made during <Tooltip value={'Metaverse Maker Competition'} link={'https://wiki.resonite.com/MMC'}>MMC</Tooltip> in 2024,
                    and <a href={'https://wiki.resonite.com/MMC_2024#Winners'} target={'_blank'}>won one of the categories</a>!
                </p>
                <p>
                    The project solves one of the problems that need to be solved before you can have working <Tooltip value={'Non-Playable Characters'} link={'https://en.wikipedia.org/wiki/Non-player_character'}>NPCs</Tooltip>.
                    Resonite doesn&apos;t have any of the tools necessary built-in to create them, so this project solves the
                    pathfinding problem. Further systems would be required for an NPC to have some AI, but at least now
                    it can pathfind.
                </p>
                <h4>
                    What it took
                </h4>
                <p>
                    Pathfinding starts with some sort of graph search algorithm, most common search algorithms include <a href={'https://en.wikipedia.org/wiki/A*_search_algorithm'} target={'_blank'}>A*</a> and <a href={'https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm'} target={'_blank'}>Dijkstra&apos;s algorithm</a>.
                    The precursor to navmesh systems is waypoint systems. Waypoint systems are a collection of points
                    where agents search for a path using graph search and navigate to each point in the found path.
                    Navmesh systems expand on that concept where instead of points, triangles are used instead.
                    Each triangle has 3 neighbors, and graph search is used with them to find a corridor of triangles that
                    the agent should go through, but following the centers of the triangles as a path would be too jagged
                    to be useful.
                </p>
                <p>
                    Another algorithm is used to find a straight path in the corridor of triangles - <a href={'https://en.wikipedia.org/wiki/Any-angle_path_planning'} target={'_blank'}>Any-angle path planning algorithm</a>.
                    This project uses the <a href={'https://medium.com/@reza.teshnizi/the-funnel-algorithm-explained-visually-41e374172d2d'} target={'_blank'}>Funnel algorithm</a> to achieve this, it essentially walks each neighboring side
                    of the triangles and makes sure that the funnel between the left and right side keeps shrinking, but
                    once the funnel crosses on itself as it walks, it places a point on the found corner, in the end
                    creating a path that changes direction only on corners.
                </p>
                <p>
                    However, we don&apos;t even have <a href={'https://en.wikipedia.org/wiki/Rigid_body'} target={'_blank'}>rigid bodies</a> in Resonite, so to keep the agent on the surface of the mesh,
                    an additional step was added to the Funnel algorithm where when it finds any corner, it will create points
                    on any triangles since the last path point that have significant changes in their normals using
                    line intersection math, and only then it will place the corner path point.
                </p>
                <p>
                    All of this was created using Resonite&apos;s visual programming and is made in such a way where anyone
                    can create a simple agent that follows the player on a navmesh.
                </p>
                <h4>
                    What I learned
                </h4>
                <p>
                    I implemented the A* search algorithm for the first time and learned math to make a navmesh possible,
                    and now people in Resonite can have agents that pathfind in their worlds!
                </p>
            </>,
            side: <>
                <a href={'https://wiki.resonite.com/Navmesh_System'} target={'_blank'}>
                    View Resonite Wiki
                </a>
                <a href={'https://resonite.com/'} target={'_blank'}>
                    View Resonite Site
                </a>
            </>
        }
    },
    {
        name: 'Portfolio',
        shortDesc: 'The site you\'re looking at',
        icon: GithubSVG,
        cardBackground: 'linear-gradient(135deg, hsl(0, 100%, 20%) 0%, hsl(39, 100%, 43%) 100%)',
        page: {
            content: <>
                <h4>
                    Why?
                </h4>
                <p>
                    This site was made from the necessity of listing all the different projects I&apos;ve created,
                    I&apos;m interested in a lot of things and have been doing a lot of things, so having someplace where I
                    can list the projects is important.
                </p>
                <p>
                    The site was created with Next.js static builder, I&apos;m very familiar with React when it comes to
                    web frontend, so it looked like the perfect choice. It&apos;s also structured in such a way, where I only
                    have to keep updating the <code>data.jsx</code> file to keep adding more projects, and most of the
                    fields are optional for projects, and the page will change to fit.
                </p>
                <p>
                    The site is hosted with Github Pages, since the source code of this site is public, Github provides
                    free hosting for static pages.
                </p>
                <p>
                    Another benefit of hosting with Github Pages - Github Actions. Whenever a change is made to the repository,
                    Github automatically starts building and deploying actions to update the site.
                </p>
                <h4>
                    What&apos;s next?
                </h4>
                <p>
                    I&apos;ll keep listing more projects on this site as they appear (or I remember about them), I might
                    update the looks of the site in the future if I feel like it.
                </p>
            </>,
            side: <>
                <a href={'https://github.com/TheJebForge/portfolio'} target={"_blank"}>
                    View Project&apos;s Github
                </a>
            </>
        }
    }
];
