---
title: Tracking
description: Track related users and messages in reports with Reindeer
slug: tracking
category:
  slug: features
  name: Features
order: 1
---

Reindeer allows you to track users and messages and attach them to a report. When a user action happens like leaving the server, or a message action happens like deleting their message, Reindeer will send an alert in the report thread.

By default, the user and message (if it is a message report) are automatically tracked when the report is created. This allows moderators to easily follow what happened during the report.

## Track a message or user

If you want to track a message or user that was not automatically created, you can use the `/track user` or `/track message` command. For example:

```
/track message_link:https://discord.com/channels/977782370428141638/977782370985988129/1219962448421978225 report_number:24 track_author:true
```
<sup>Track a message with message ID `1219962448421978225` for report #24, and track the author of the message as well.</sup>

Alternatively, you can use the "Track message" or "Track user" context menu command. You can access this command by right-clicking (or long-pressing on mobile) on a message/user, and then selecting the command under "Apps". This will prompt you to select a report to attach the tracker to.

## Manage and delete trackers

You can manage and delete trackers for a report by using the `/trackers` command with the report number. This will show you the ID, date added, target message/user, and the moderator who added it to that report.

You can use the select menu in the `/trackers` response to delete individual trackers, including automatically added ones.

## Tracking events

When one of the following events happens, Reindeer will send an alert to the report thread:

### Message reports

- When a message gets edited
- When a message gets deleted (specifies whether by themselves or a moderator)

### User reports

- When a user leaves the server
- When a user joins the server
- When a user changes their nickname (specifies whether by themselves or a moderator)
- When a user gets timed out
- When a user gets kicked
- When a user gets banned

These events, along with the additional information given by the alerts, will allow moderators to make smart decisions more quickly and effectively. Important context for punishments that were already administered will also prevent multiple and unintentional punishments for a report.
