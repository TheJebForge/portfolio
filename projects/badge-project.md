<title>Badge Project</title>
<desc>Animated convention badge project</desc>
<skill>C++</skill>
<skill>Kotlin</skill>
<skill>Android</skill>
<skill>Rust</skill>
<skill>CAD</skill>
<icon>badge-project.svg</icon>
<background>linear-gradient(124deg,rgba(173, 24, 24, 1) 0%, rgba(74, 9, 9, 1) 100%)</background>
<order>-2</order>
<side href="https://github.com/TheJebForge/badge-project">View Project's GitHub</side>
<slide youtube="D5K59v0XL8c" title="Functioning character state machine" show-title/>
<slide src="/images/badge2.jpg" alt="Picture of the device"/>
<slide src="/images/badge.jpg" alt="Picture of the device turned off"/>
<about>
A personal project to create an animated badge device that would attract attention on conventions
</about>
<order index="reso">-1</order>

#### What is this?
I like to attend various conventions, it's a great way to meet internet friends and meet new people. A lot of people have
custom badges with cool designs, some even have LED matrix display tags!

After seeing so many of them, I've decided that I want to try making my own custom badge to stand out and attract people, 
since I could apply a lot of my skills making one.

#### Hardware
I've decided that I want to try using a transflective LCD screen, since that type of LCD can be easily viewed in both
bright and dark environments. Reflectivity helps the screen to stay visible in the sun or bright light, transmissivity
helps the screen to pass light from the backlight to stay visible in the dark.

While searching for such a screen on Aliexpress, I found an ESP32-S3 devboard with transflective LCD touch screen with
16MB flash memory and 8MB PSRAM, along with MicroSD slot, buzzer and RGB light soldered to the board.

After receiving the board, I've created a reference model of the board in CAD using vernier calipers to measure dimensions 
of the board and its components, and then I've created a case and lid model around the reference model. I managed to get
a friend to 3D print the case and send it to me.

The case also includes a spot for a NFC sticker that I've programmed with a link to my Telegram.

#### Software
The firmware is built on ESP-IDF with semi-custom touch screen driver, most of the firmware code uses C++.

The firmware essentially runs a character state machine that changes states based on conditions, with each state being
able to switch the currently displayed image, sequence or animation. The character structure also defines actions that
the Bluetooth remote could execute, either forcing a state change or playing an animation.

Character structures are written in JSON and then converted to a folder structure with binary files using a CLI conversion
tool written in Rust.

The device can be paired with an Android device, allowing a companion application to interact with the device through
Bluetooth Low Energy. The Android application is written in Kotlin.

#### What I learned
This project is my first time trying to write embedded software, my first time using Bluetooth Low Energy, and it's also
my first time creating CAD models that can be then 3D printed.