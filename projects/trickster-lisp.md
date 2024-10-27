<title>Trickster LISP</title>
<desc>LISP transpiler for Trickster</desc>
<icon>trickster-lisp.svg</icon>
<background>linear-gradient(135deg, #707dad 10%, #88bdb8 100%)</background>
<side href="https://modrinth.com/mod/trickster-lisp">View Mod page</side>
<side href="https://github.com/TheJebForge/trickster-lisp">View Mod source code</side>
<slide youtube="3KlrjCYHStc" title="Showcase"/>

#### What is this?

This is a Minecraft addon mod for Trickster mod, that adds a LISP transpiler that can convert Trickster
spells to LISP and back, letting you create and modify Trickster spells using LISP.

The project was started from a joke that Trickster spell structure looks pretty close to LISP,
and then I decided to make this a reality. Despite this not looking that exciting, the technology
that I had to create/use to get here should be impressive.

#### What it took

I started creating the project with 
<Tooltip
    link="https://www.antlr.org/"
    value="ANother Tool for Language Recognition">ANTLR</Tooltip> 
which allowed me to generate a parser to take written code into a 
<Tooltip value="Context Syntax Tree">CST</Tooltip>.
Using provided CST, I'm able to create an 
<Tooltip
    link="https://en.wikipedia.org/wiki/Abstract_syntax_tree"
    value="Abstract Syntax Tree">AST</Tooltip> 
that represents the code in a usable form. This project supports preprocessor macros, so before
I start conversion to Trickster spells, I apply the macros to any call expression that has the macro's
name, unwrapping the code that the macro contains and replacing the macro's argument markers with whatever
expressions that were initially passed to the call expression.

Having my macros applied, I proceed to walk my AST and attempt to map my expressions to Trickster
counterparts, I check for Fragment functions first, then I check for primitives, and then attempt
to see if the expression is referring to a Trickster trick. In the end, I end up with an equivalent
Trickster spell as whatever was passed into my transpiler as LISP code.

But it can also do that conversion in reverse, hence it's a transpiler. It walks the Trickster
spell and attempts to identify fragments and map them to LISP representations, then it maps SpellParts
with PatternGlyphs into trick call LISP representations with complex logic to avoid unnecessary
parentheses and pattern detection to simplify certain pairs of tricks into simpler representations.
In the end, I get the equivalent LISP AST representation of the Trickster spell.

#### What I learned

Even though I already knew how to use ANTLR, I finally got to apply my skills in creating a programming
language. I would love to try and make an interpreter for this language at some point, but for now,
it only exists to be transpiled from/into Trickster spells.