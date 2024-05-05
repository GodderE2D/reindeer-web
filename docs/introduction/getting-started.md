---
title: Getting Started
description: Get started with using Reindeer in less than five minutes
slug: getting-started
order: 1
---

Reindeer is easy to setup yet offers extensive customisation. Let's get started!

## Inviting the bot

First, you need to [invite Reindeer](/invite) to your server. Go through the authorisation flow and select the server
you want to add Reindeer to. If you don't see a server, make sure you have the Manage Server permission.

Once you have authorised the application, Reindeer should show up in your member list, but likely without permissions to
view all channels or manage messages. Let's fix that!

## Managing permissions

The permissions included in Reindeer's invite link should be sufficient for all features to work. However, Reindeer
won't be able to see certain channels or do these actions if you explicitly denied permissions for `@everyone` in a
channel or category.

In each category or channel you set private, make sure to allow the "Reindeer" role or the bot permissions to view that
channel. To do this, right-click or long-press on the channel or category and select "Edit Channel" or "Edit Category"
respectively.

{% alert style="warning" %}

Make sure to follow the following steps or else your moderators won't be able to use Reindeer's commands!

{% /alert %}

Reindeer uses application or slash commands, which means that you can manage and fine-tune every command's permissions
natively in Server Settings > Integrations and selecting Reindeer under Bots & Apps. Unfortunately, Discord only has
this option on desktop right now.

Click on a command you'd like a role to use, and add that role as an override. See which commands you'd like to allow
below.

- **Public commands** (these commands should be available to members): `/help`, `/invite`, `/ping`, `/report`, `/vote`
- **Moderator commands** (these commands manages reports): `/close`, `/re-open`, `/track`, `/trackers`
- **Admin commands** (these commands manages the bot and changes settings): `/config`, `/setup`

You can check if a command is disabled by default (i.e., only allowed to be used with the Administrator permission) by
clicking on the command and seeing if it has the "Members need server permissions to use this command" message.

If you need help managing permissions on Discord, check out
[Discord's permissions guide](https://support.discord.com/hc/en-us/articles/206029707-Setting-Up-Permissions-FAQ).

## Running the setup

You can now run the `/setup` command in your server, which will prompt you to select a reports **forum** channel. You
will need the Administrator permission for this. The command will send a message in public, so it's best to run it in a
private channel.

If you don't have a reports channel already, we recommend letting Reindeer create one for you. This will ensure that the
bot gets the correct permissions and appropriate tags are created. If you want to use an existing channel, you can also
select it under the dropdown menu.

Doing this will create 5 tags: `t: message`, `t: user`, `s: open`, `s: approved`, and `s: rejected`. These tags signify
the type and status of the report. They can be renamed, but ensure that these tags are not deleted or else reports
cannot be properly created.

{% alert style="warning" %}

Make sure your moderators have access to this reports channel, and that it is actually private to regular members.
Reindeer will trust that all interactions within the channel are by moderators and will not check for permissions.

{% /alert %}

After the setup, you can still customise Reindeer further by using various options under the `/config` command.

## Creating a test report

The best way to see how Reindeer works is by creating a test report. Try right-clicking on a message or user and
selecting Apps > Report message/user. This will prompt you to answer questions that can be customised, and then confirm
the report with a customisable message. The report will then be sent to your forum channel, where you can manage it.

## Need help?

If you need help with anything, you can always ask us in our [support server](/support) or check out the
[FAQ](/docs/introduction/faq).
