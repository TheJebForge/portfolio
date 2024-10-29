<title>Streamduck</title>
<desc>Macro Device Software</desc>
<icon>streamduck.svg</icon>
<background>linear-gradient(135deg, #584063ff 10%, #dc76adff 100%)</background>
<order>0</order>
<side href="https://github.com/streamduck-org/streamduck">View Project's Github</side>
<slide src="/images/streamduck-screenshot.png" alt="Old Streamduck Screenshot" show-title/>
<slide youtube="bkQea3W3MsA" title="GIF Rendering comparison"/>

#### How it started

The project was started out of frustration that the official Elgato Stream Deck software only
supports Windows and Mac platforms. So, if you have the hardware, and you're running Linux as your main OS,
the device becomes a paperweight.

I've tried to solve that by starting my own project for this,
the idea of the project is to be as extensible as possible.
Plugins should be able to change almost everything and are the
primary way to get more functionality out of the software.

The project was initially started on Rust, but the difficulty of writing plugin support
on Rust drove me to switch to C#. C# is a better choice for this kind of software,
plugin support is very trivial to make and features of C# allow this software to act as a
framework for plugins. Automating many aspects of creating new features using plugins,
like reflection based configuration, automatic handling of config files,
reflection-based device actions, and so on.

#### How it's going

The project is still in development, but other projects took precedence like this portfolio site.
As soon as I'm settled, I'll continue working on personal projects like this.

#### What I've learned

This project taught me to pick "the right tool for the job". Starting the project on
Rust language was somewhat of a mistake, but I'm glad I did. Implementing plugin support
on Rust would require me to essentially write my application multiple times.
I would have to write the actual application, then I would have to write the
application's 
<Tooltip
    link="https://en.wikipedia.org/wiki/Foreign_function_interface"
    value="Foreign Function Interface">
    FFI</Tooltip>,
and then write FFI for plugins to use, and even then I'm not done.
I'll also have to write an entire SDK for plugins, so plugin dev wouldn't be miserable.

Experiencing so many problems writing this software on Rust got rid of my fanaticism
over Rust and made me explore other programming languages. If I started this project on C# first,
I wouldn't have this valuable experience.