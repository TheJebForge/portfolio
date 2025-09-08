<title>Navmesh System</title>
<desc>Pathfinding system for Resonite</desc>
<skill>Pathfinding</skill>
<icon>mesh.svg</icon>
<background>linear-gradient(135deg, rgb(67 118 128) 10%, rgb(50 124 79) 100%)</background>
<side href="https://wiki.resonite.com/Navmesh_System">View Resonite Wiki</side>
<side href="https://resonite.com/">View Resonite Site</side>
<slide youtube="TI-qpLwl4h8" title="Awards Ceremony"/>
<slide youtube="4i_CRigihu4" title="WorldHop section"/>
<index>root</index>
<index>reso</index>
<order index="reso">-1</order>

#### What is this?

This project allows people to design navigation meshes and have agents that use those meshes to
pathfind to different points on the mesh. It was made during 
<Tooltip value="Metaverse Maker Competition" link="https://wiki.resonite.com/MMC">MMC</Tooltip> 
in 2024, and [won one of the categories](https://wiki.resonite.com/MMC_2024#Winners)!

The project solves one of the problems that need to be solved before you can have working 
<Tooltip value="Non-Playable Characters" link="https://en.wikipedia.org/wiki/Non-player_character">NPCs</Tooltip>.
Resonite doesn't have any of the tools necessary built-in to create them, so this project solves the
pathfinding problem. Further systems would be required for an NPC to have some AI, but at least now
it can pathfind.

#### What it took

Pathfinding starts with some sort of graph search algorithm, most common search algorithms include 
[A*](https://en.wikipedia.org/wiki/A*_search_algorithm) 
and [Dijkstra&apos;s algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm).
The precursor to navmesh systems is waypoint systems. Waypoint systems are a collection of points
where agents search for a path using graph search and navigate to each point in the found path.
Navmesh systems expand on that concept where instead of points, triangles are used instead.
Each triangle has 3 neighbors, and graph search is used with them to find a corridor of triangles that
the agent should go through, but following the centers of the triangles as a path would be too jagged
to be useful.

Another algorithm is used to find a straight path in the corridor of triangles - 
[Any-angle path planning algorithm](https://en.wikipedia.org/wiki/Any-angle_path_planning).
This project uses the [Funnel algorithm](https://medium.com/@reza.teshnizi/the-funnel-algorithm-explained-visually-41e374172d2d) 
to achieve this, it essentially walks each neighboring side
of the triangles and makes sure that the funnel between the left and right side keeps shrinking, but
once the funnel crosses on itself as it walks, it places a point on the found corner, in the end
creating a path that changes direction only on corners.

However, we don't even have [rigid bodies](https://en.wikipedia.org/wiki/Rigid_body) in Resonite, so to keep the agent on the surface of the mesh,
an additional step was added to the Funnel algorithm where when it finds any corner, it will create points
on any triangles since the last path point that have significant changes in their normals using
line intersection math, and only then it will place the corner path point.

All of this was created using Resonite's visual programming and is made in such a way where anyone
can create a simple agent that follows the player on a navmesh.

#### What I learned

I implemented the A* search algorithm for the first time and learned math to make a navmesh possible,
and now people in Resonite can have agents that pathfind in their worlds!