---
title: "Rewrite in Rust"
description: "It's too hard to start a new project, let's rewrite existence project in Rust...?"
publishDate: 2025-11-14
tags: ["Rust", "English", "Viewpoint"]
---

The RIIR (Rewrite it in Rust) version of sudo said it is more secure than original sudo, because it is written in Rust, a language known for it memory-safety. But the sudo project was first released around 1980s, after decades of development, it is now sufficiently stable and secure in most cases (If you think this is not enough for you, try out `doas`), there is not need to use a rewrite version of sudo.  

According to [It's FOSS](https://itsfoss.com/news/sudo-rs-issue-ubuntu/), two security issues have been found in sudo-rs, first one is password exposure during timeouts, second issue is that sudo-rs incorrectly recorded the wrong user ID in timestamps. Therefore, hackers can bypass authentication by exploit these issues.

None of this is surprising. New projects no matter which language is used require time and scrutiny to reach the stability of 40-year-old tools. In fact, I don't think RIIR is bad, it is a movement to switch from legacy C to modern language, open source communities always like to try out new thing!

The major probelm of sudo-rs is that they should never deceiving users by claiming "My project is more secure than original one!". They succesfully "mislead" people considered sudo-rs to be better than sudo. For instance, Canonical has replaced sudo to sudo-rs in Ubuntu 25.10, leaving millions of computers at unnecessary risk.

In short, RIIR is exciting, but don't ship it to millions until it's battle-tested.
Ask: *Does this rewrite solve real problems, or just swap languages?*  
Stability isn't a feature. It's earned.