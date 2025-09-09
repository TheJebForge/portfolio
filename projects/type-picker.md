<title>Type Picker</title>
<desc>Component Attacher type utility mod for Resonite</desc>
<skill>C#</skill>
<skill>FrooxEngine</skill>
<icon>type-picker.svg</icon>
<background>linear-gradient(329deg,rgba(51, 181, 125, 1) 0%, rgba(35, 136, 173, 1) 100%)</background>
<slide src="/images/type-picker.png" alt="Appearance of the latest mod's version" show-title/>
<side href="https://github.com/TheJebForge/TypePicker">View Project's Github</side>
<side href="https://github.com/ResoniteModdingGroup/TypePicker">View Banane9's Fork</side>
<index>reso</index>
<order index="reso">0</order>

#### What is this?
You ever in a situation where you have no idea what you're actually supposed to type into Component Selector's type inputbox?
This mod allows you to get types from references and also cast them into a few common field types (helpful when you have
`AssetRef<>`, and you want a `SyncRef<IAssetProvider<>>` instead)

This mod was originally developed by me, at some point art0007i contibuted field selection for components with multiple
generic type parameters. At a later date, Banane9 ported the mod to MonkeyLoader and got it to support their
[ComponentSelectorAdditions](https://github.com/ResoniteModdingGroup/ComponentSelectorAdditions) mod, after which I asked
Banane9 if they want to be a maintainer of the mod from now on, and they agreed

#### What it took?
The mod is transpiling its UI IL code into middle of Component Selector's UI IL code, so finding a reliable spot where
to do it was somewhat complicated. I also had to learn a few things about platform's type system to get this to work