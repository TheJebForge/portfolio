<title>Bone Reference Helper</title>
<desc>Skinned mesh utility mod for Resonite</desc>
<skill>C#</skill>
<skill>FrooxEngine</skill>
<icon>bonehelper.svg</icon>
<background>linear-gradient(143deg,rgba(44, 222, 204, 1) 0%, rgba(193, 30, 214, 1) 100%)</background>
<index>reso</index>
<order index="reso">0</order>
<slide src="/images/bonerefhelper.png" alt="Mod's UI" show-title/>
<side href="https://github.com/TheJebForge/BoneReferenceHelper">View Project's Github</side>

#### What is this?
You ever had a situation where you accidentally deleted a bone from the bone list and now your skinned mesh is a pretzel?
You ever wanted to update your mesh, but the bone order is now different? You ever wanted to put clothes on your avatar
after you've already imported the avatar? 

This mod lets you easily solve all of those issues by letting you set the bone list from clipboard or existing hierarchy
using new buttons that appear on the bottom of the skinned mesh renderer component

#### What it took?
The mod was originally developed for NeosVR, but then ported to Resonite and it continued to work with minimal changes.
This was my first attempt at modding NeosVR/Resonite, so I had to learn how to use HarmonyLib and then also learn how 
UIBuilder works in the first place

The motivator for making this mod was me wanting to update an avatar's mesh, but the avatar had around 300 bones... 
So instead of spending hours dragging slot references around, I spent a day of learning how to mod the game and made this
mod to save me future trouble