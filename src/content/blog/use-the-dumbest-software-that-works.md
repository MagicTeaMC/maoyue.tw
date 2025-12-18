---
title: "Use the dumbest software that works"
description: "Regardless of hardware performance increases, software should never be bloated."
publishDate: 2025-12-18
tags: ["Minimalism", "English", "Viewpoint"]
---

By the 1990s, there was [UNIX](https://en.wikipedia.org/wiki/Unix), one of the most popular operating systems at the time.
From a user’s perspective, the most important part of operating system is the user-space software, because it affects how users interact with their computers.  
Unlike many other systems, UNIX followed the [KISS principle](https://en.wikipedia.org/wiki/KISS_principle), which stands for "Keep It Simple, Stupid".
Its command-line utilities were small, focused, and designed to do one thing well.

As a result, many computer hobbyists were drawn to using and studying UNIX.
Though UNIX itself was proprietary software, it indirectly laid the foundation for [free software](https://www.gnu.org/philosophy/free-sw.html) projects such as [GNU](https://www.gnu.org/).

Over time, however, most apps, and even many websites have also become bloated, especially mobile apps.
Many developers are constantly trying to add more features to their apps nowadays.
Although no one asked, they think users need them. For example, AI features are being added everywhere, but most users do not need an LLM in every app.
As features accumulate, startup times become longer, wasting more storage and battery.
Some software and websites also implement trackers and ads, directly infringing on users’ privacy.
Others hide content behind [login walls](https://en.wiktionary.org/wiki/login_wall), forcing users to create an account just to view it, which is highly inappropriate.
These bloated apps also tend to betray you with [surprise updates](https://www.reddit.com/r/LinuxLegion/comments/1ow2nma/how_relatable_is_this/), [hog your RAM](https://www.reddit.com/r/ProgrammerHumor/comments/dxhsh6/electron/), and even [spy on you](https://www.gnu.org/proprietary/proprietary-back-doors.html).

Many tasks can be done easily using one or two simple commands, with no tracking and no ads.
For instance, combining a huge number of files, instead of copy-pasting manually or uploading them to a random website,
it can be done by running `cat *.txt > merged.txt` in the command line.  
Another example is about syncing your files, including your notes, music, photos and other files.
Instead of using five different services, wasting your storage and battery, use [Git](https://git-scm.com/) to sync your files. Every computer with [SSH enabled](https://wiki.debian.org/SSH#Installation_of_the_server) can act as a Git server.
It has the [same encryption protection](https://en.wikipedia.org/wiki/Secure_Shell#Algorithms) as SSH, and other benefits like better version controlling. You don't rely on big tech companies, so your file belongs to you.
And the most important thing - It's really simple and lightweight. The binary size of git is about 4.3MB (based on your operating system, this value might be bigger or smaller).
Downloading 80MB for note-taking app, 100MB for drive and 150MB for other online service is not worth it.

Next time when you need a tool, ask yourself:
- Is there a one-liner that can do it? (Like [GNU coreutils](https://en.wikipedia.org/wiki/GNU_Core_Utilities))
- Is there a tiny command line tool that gets that job done?
- Do I actually need all "smart" features in this bloated app?
- Should I pay $10 a month for this premium bloated software or my work can be done by using a free command line software?

I mentioned many command-line tools and examples above, but that doesn’t mean you need to abandon graphical apps or live in a terminal.  

You don’t need to be an expert, and you don’t need to use the command line for everything.
Learning a bit of the command line makes choosing simple software much easier.
Over time, you will realize that simple tools become more powerful the longer you use them.  

Use the dumbest software that works.  
Your future self will thank you.
