import StreamduckSVG from './project_svg/streamduck.svg';
import TricksterLISP from './project_svg/trickster-lisp.svg';
import {Tooltip} from "@/components/Tooltip";

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
        name: "Trickster LISP",
        shortDesc: "LISP transpiler for Trickster",
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
                <a href={'https://modrinth.com/mod/trickster-lisp'} target={"_blank"}>
                    View Mod page
                </a>
                <a href={'https://github.com/TheJebForge/trickster-lisp'} target={"_blank"}>
                    View Mod source code
                </a>
            </>
        }
    }
];
