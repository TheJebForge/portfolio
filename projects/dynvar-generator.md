<title>Dyn Var Generator</title>
<desc>Dynamic variable utility mod for Resonite</desc>
<skill>C#</skill>
<skill>FrooxEngine</skill>
<icon>dynvar.svg</icon>
<background>linear-gradient(143deg,rgba(158, 33, 129, 1) 0%, rgba(186, 133, 47, 1) 100%)</background>
<slide src="/images/dynvargen.png" alt="Appearance of the wizard in Resonite" show-title/>
<side href="https://github.com/TheJebForge/DynVarGenerator">View Project's Github</side>
<index>reso</index>
<order index="reso">0</order>

#### What is this?
This is a mod for Resonite that lets you create a large number of dynamic variables fairly quick, 
the wizard has a lot of customization options for what kind of components it should create, 
if it should create dynamic variable spaces and how it should name the variables

#### Why was this created?
It solved a problem in Resonite where if you want to put a dynamic variable on every bone on your avatar, you would have
to select every single bone and manually add the component and name it. This mod lets you add the entire hierarchy into
the list and create a variable on every bone, using name of the slot as the name of the variable

There's a lot more potential uses with this mod, like blendshape synchronization, snappable clothes and so on

#### What it took?
The mod is a fairly simple 
<Tooltip value="Resonite Mod Loader" link="https://github.com/resonite-modding-group/ResoniteModLoader">RML</Tooltip> 
mod that adds a wizard into the dev tool. The panel is populated using UIBuilder, and it then creates a couple of field
components to keep the state of the panel and to support drag and drop

The code that creates the variables is able to figure out what dynamic variable types it should create based on type of
the element, like resorting to dynamic variable rather than dynamic field if element is not a field