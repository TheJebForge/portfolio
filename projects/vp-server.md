<title>Voice Profile Server</title>
<desc>REST service to manage voice profiles</desc>
<icon>vpserver.svg</icon>
<background>linear-gradient(135deg, #78ab8e 10%, #4babc9 100%)</background>
<order>3</order>
<side href="https://vp.thejebforge.com/">View Service Homepage</side>
<side href="https://gitlab.com/TheJebForge/voiceprofile_server">View Service's Source</side>

#### What is this?

This service was born from the necessity of having shared data about users between Discord bots, using one of the bots
wasn't a good option, so I volunteer to create this service.

Voice Profile can be described as a collection of public data related to a specific person's presence on a Discord server.
Having a centralized place where this data is stored allowed us to split responsibility between different bots, where
each of the bots provides different functionality related to the same data. For instance, [one of the bots](https://github.com/7S8Grimoire/SaintSeed) 
would track the amount of time everyone spends in voice chats on the server, the time then counts towards experience 
and the person eventually levels up and receives some rewards.

The service is written in Rust with Rocket REST server, and it's using PostgreSQL database. 
Read requests don't require authorization, since all the data is public. But write access is limited to specific
keys which are given out individually.

We have a virtual currency called Voice Points. At first, the service allowed any of the bots to modify the field
directly. However, after some users gained high amounts of Voice Points without a clear explanation, it was decided to
introduce transactions to record history of how the wealth of the users changed.

Most of the work on the service was done during the end of 2021 and the beginning of 2022, and since then it was running
at [pretty much 100% availability](https://vpstatus.thejebforge.com/).

#### What I learned

I've started this project when I was still learning Rust, so this project allowed me to get familiar with Rust. It was
also my first time creating a REST service on my own.