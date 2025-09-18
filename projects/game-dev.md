<title>Game Dev</title>
<desc>My Game Development Journey</desc>
<icon>joystick.svg</icon>
<background>linear-gradient(300deg,rgba(166, 41, 87, 1) 0%, rgba(117, 28, 28, 1) 100%)</background>
<order index="reso">1</order>
<side><span style="color: dimgray">No links</span></side>

In 2016, I found out that Unreal Engine 4 can be used for free, and it contains almost
anything one would want to create games, so I've started to create games! 

Earliest recordings I have of the games I've been trying to make is this:
<iframe width="560" height="315" src="https://www.youtube.com/embed/-vqXByCtkQE?si=XOl5cMv5IgBgoK5Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
This was my attempt at making a puzzle game similar to Portal, but instead of having portals, you switch dimensions instead.
The game was made for a local tech showcase event at my school, where it was as most liked from all the showcased projects

But as time went on with me experimenting in UE4, I felt like I wasn't really understanding what's happening under the hood,
so I got interested in how I can create my own game engine:

<iframe width="560" height="315" src="https://www.youtube.com/embed/t8nP8zVzfLA?si=c2siVw8m_yXx3GSF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
This is JGEL, or Jeb's Game Engine on Lua. It was a mix of C++ and Lua running on OpenGL and SDL2, 
but not really efficient as Lua was doing most of the work there, like the entire rendering loop was written in Lua.
This was a great learning exercise though as I've learned a lot of what goes into creating a game engine, rendering was by
far the most complicated part, but at the same time rewarding!

Further attempts ended at rendering, but every time I tried, I learned more about graphics programming:

<iframe width="560" height="315" src="https://www.youtube.com/embed/qqurW94rXWo?si=aBv3Z91LJNm60urr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
With this attempt, I've learned how to draw point lights and use normal textures in my shaders

<iframe width="560" height="315" src="https://www.youtube.com/embed/rkG0OYJONpQ?si=Oisr0uD7hLtGiXC8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
This semi-recent attempt was made in Rust, where I learned how to put all of those icospheres into a single draw call with
shader being able to use point lights as well

Creating a full-fledged game engine all alone is quite a big undertaking, it takes a lot of effort from a lot of different
sides to get it work and have all the systems fit all together. Since my goal was still to try to create games, I ended up
trying to find other engines that could fit my needs

<iframe width="560" height="315" src="https://www.youtube.com/embed/1ALi6zYFN2c" title="hacker vision shaders" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
At some point I've been trying Unity out and as I did, I learned how Unity's HLSL shaders work. With that, I was able to
create some cool shaders as you can see on the video

<iframe width="560" height="315" src="https://www.youtube.com/embed/bxOYowedEzE" title="No More Sky latest latest vid" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
I have also been trying out Love2D game engine as I still enjoy scripting things using Lua, so this is a vector based
asteroids game where you mine asteroids for resources and manage the resources using a terminal UI inventory

I've also participated in some game jams, creating following two games:
- [2020 Centiseconds](/projects/2020-centiseconds):
<iframe width="560" height="315" src="https://www.youtube.com/embed/Yw_qvIBRnAE" title="2020 centiseconds playthrough" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
- [factorAway](https://thejebforge.itch.io/factoraway):
<iframe width="560" height="315" src="https://www.youtube.com/embed/khDxovmARhg" title="factorAway playthrough" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

But then I found NeosVR (now Resonite), a VR game engine / social platform where you can create anything you want. 
I've ended up spending most of my free time there ever since, experimenting with maths, creating various systems and
meeting new people!

Notable things I've created in Resonite include [Navmesh System](/projects/navmesh-system), [Demonic Menu System](/projects/dms)
and various mods for the platform to solve some shortcomings