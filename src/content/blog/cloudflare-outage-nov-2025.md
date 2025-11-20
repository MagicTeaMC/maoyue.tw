---
title: "What I learned from recent Cloudflare outage"
description: "This week, Cloudflare had a major outage that affected almost half of the internet. Here are my thoughts on it."
publishDate: 11-21-2025
tags: ["Network", "English", "Viewpoint"]
---

This week, [Cloudflare experienced an outage on their system](https://blog.cloudflare.com/18-november-2025-outage/), taking down almost half of the internet - mine included.
What could we learn from this incident? How could we prevent these issues in the future?

As soon as the outage started rolling out, I wanted to post an announcement on my status page.
Turns out my status page is also stopped working. Of course, because I’m a genius, I had built my status page on Cloudflare entirely...  
So we frantically tried to move everything back to our own servers, then we found the Cloudflare dashboard and API were completely inaccessible, and our most recent backup of Cloudflare D1 and R2 data was from early October. Way too stale to restore to production.
In the end, we have no choice but to wait for Cloudflare to restore their service.

**The biggest lesson? We were way too dependent on a single provider.**

After this incident, we’ve started working on a real Plan B in case of future outages.
First, we now back up everything daily, to ensure we can warmup an instance quickly with recent data. These backups are encrypted and stored outside of Cloudflare.
Second, we need to move our status page separate from main framework, using different DNS provider, different hosting, different CDN (or no CDN at all).
That way, the next time something like this happens, the impact will be minimal.

The root cause is that Cloudflare used `unwrap()` without properly handling the error, which triggered a permission issue around database, that created an unexpected file somehow. Therefore, their system transfer this unexpected file to every global datacenter, causing a mass panic across the entire network.

As you can see, every program should handle the error properly, especially core system.
If they didn’t just `panic!()` on error, by using `anyhow` crate or other similar stuff, this unexpected file won't impact the whole system.
Plus, with handling error properly, they can also find the root cause early and reduce downtime.

Okay, I have been rambling, but the core point is: **Every project needs proper planning upfront, including how errors are handling even when talking to internal systems.**  
This week was a painful reminder, but also a valuable lesson.
