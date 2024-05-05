---
title: DM reporting
description: Allow server members to report messages in their DMs
slug: dm-reporting
order: 3
---

Screenshots of messages that were sent in DMs are hard to prove, as they can be manipulated using browser DevTools or
image editing software. By allowing server members to add Reindeer as a
[User App](https://discord.com/developers/docs/tutorials/developing-a-user-installable-app), this allows moderators to
confirm messages that occur in DMs.

DM reporting is enabled by default. To manage whether DM reporting is enabled, use the `/config misc` command to toggle
this option.

## Report a DM

**Each member** needs to add Reindeer as a
[User App](https://discord.com/developers/docs/tutorials/developing-a-user-installable-app) before they can use DM
reporting commands. To do this, click on the bot's profile, select "Add App", then "Try It Now", and finally authorising
the application.

![Add user app (step 1)](/docs-assets/features/dm-reporting/add-user-app-1.png)
![Add user app (step 2)](/docs-assets/features/dm-reporting/add-user-app-2.png)
![Add user app (step 3)](/docs-assets/features/dm-reporting/add-user-app-3.png)

Members can report DMs by using the "Report DM message" context menu command or the `/report_dm message` command with
the message ID.

You can access the context menu command by right-clicking (or long-pressing on mobile) on a message, and then selecting
the command under "Apps". This will prompt you to select the server to report the message to.

Then, Reindeer will follow with the standard report procedure: checking for permissions, asking for server-set
questions, and confirming the report.

## Report thread

When a DM message is reported, a regular thread will created like any other report but the channel will be labelled as a
"DM report". A tracker for the target user will be automatically added to the report, but messages in DMs cannot be
tracked as the bot cannot access DM channels.
