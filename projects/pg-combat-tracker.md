<title>PGCombatTracker</title>
<desc>Sophisticated Project Gorgon combat log tracker</desc>
<skill>Go</skill>
<skill>Low-Level UI</skill>
<skill>Immediate Mode UI</skill>
<icon>pgct.svg</icon>
<background>linear-gradient(135deg, #cc6565 10%, #3591c5 100%)</background>
<order>-1</order>
<side href="https://github.com/TheJebForge/PGCombatTracker">View Project's GitHub</side>
<slide src="/images/pgct.png" alt="File Selection Screen" show-title/>
<slide src="/images/pgct1.png" alt="Marker Selection Screen" show-title/>
<slide src="/images/pgct2.png" alt="Statistics Screen" show-title/>
<slide src="/images/pgct3.png" alt="Pie charts!" show-title/>
<slide src="/images/pgct4.png" alt="Stacked and not stacked graphs!" show-title/>
<slide src="/images/pgct5.png" alt="Settings Screen" show-title/>
<about>
1-month new tech challenge project during which I got from nothing to something with unfamiliar language and tech
</about>

#### What is this?

When you reach high levels in <Tooltip link="https://en.wikipedia.org/wiki/Massively_multiplayer_online_role-playing_game" value="Massively multiplayer online role-playing game">MMORPGs</Tooltip>, 
it becomes pretty complicated to figure out what parts of your kit are lacking. 
Everything seems to do a lot of damage, but without proper statistics tools, you can't know for sure.

Big MMORPGs like World of Warcraft usually have projects like [Recount](https://www.curseforge.com/wow/addons/recount) to aid with that problem,
but when the community of a game is not big enough, you're left guessing what you should improve next.

This project lets the [Project Gorgon](https://store.steampowered.com/app/342940/Project_Gorgon/) community have the luxury of collecting all kinds of combat statistics,
so they can further improve their kit.

#### What it took

At the start of the project, I had zero experience with Go language having just finished the Go tour. I had to learn many
things as I went on with the project.

I chose [Gio UI](https://gioui.org/) as the immediate mode UI library I wanted to use. But it turned out it doesn't have
as much built-in things as I wanted. I had to manually implement several different element containers, like Canvas where
elements can be placed in relation to any of the nine anchors; HorizontalWrap where elements will be placed horizontally,
but wrapped if they reach the horizontal limit; Modals that allows me to display a dialog on top of everything, and so on.

I also implemented pie charts and area graphs myself as the UI library or its extensions didn't seem to have anything
that I wanted. It took quite a lot of time to get them to work correctly, but even with all that effort, there are still
some rendering issues.

#### What I learned

This project was a challenge for me to try making something with unfamiliar language and tech. During the project, 
I learned Go and learned some new things about immediate mode UI that I didn't think about before. I also learned a bunch
of things on how area charts work and learned the point simplification algorithms.