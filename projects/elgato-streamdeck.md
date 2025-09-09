<title>elgato-streamdeck</title>
<desc>Rust library for Elgato Stream Decks</desc>
<skill>Rust</skill>
<skill>HIDAPI</skill>
<icon>streamduck.svg</icon>
<background>linear-gradient(135deg, #584063ff 10%, #dc76adff 100%)</background>
<order>1</order>
<side>This project has over 10k downloads!</side>
<side href="https://github.com/streamduck-org/elgato-streamdeck">View Project's Github</side>
<side href="https://crates.io/crates/elgato-streamdeck">View crates.io</side>
<slide src="/images/streamdeck-sample.jpg" alt="Elgato Stream Deck running library's sample project" show-title/>
<order index="reso">2</order>

#### What is this?

This project was developed in conjunction with Rust version of Streamduck, it allows for easy
interaction with Elgato Stream Decks while being *✨blazingly fast✨*. Some other libraries
already existed to fill this purpose on Rust language, but they were pretty limited. So I made my
own!

It's using hidapi to interact with Stream Deck devices, a lot of HID code was taken from libraries
on other languages, since it was already reverse engineered. But I made the library's API
fit Streamduck's needs.

Nowadays, there's a third party project that's using this library - [OpenDeck](https://github.com/ninjadev64/OpenDeck).
That software appears to be an open-source alternative for Elgato's software, they helped out
with development of elgato-streamdeck by creating issues and submitting pull requests.

I plan to make a C# library that will wrap this library as a native module, so I can keep using
the work that went into this library with newer version of Streamduck.

#### What I learned

I learned how to interact with HID devices and develop libraries around that, and now the result
is serving the open-source community too!
