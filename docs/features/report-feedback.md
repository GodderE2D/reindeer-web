---
title: Report feedback
description: Send feedback after a report to the author
slug: report-feedback
order: 2
---

Feedback for report is important to let members know that their reports are being taken seriously and improve
transparency in your moderation. By default, Reindeer will prompt moderators to send feedback after a report is closed
(either approved or rejected).

## Configuring feedback

You can configure feedback using the `/config feedback` command. This command will let you choose whether report
feedback is enabled at all, and if it is, whether feedback should be sent automatically after reports. You can also set
a custom feedback message, one for approved reports and one for rejected reports.

We recommend enabling feedback, but leaving automatic feedback sending disabled. When there's an important case that
needs to be kept private, your moderators will be able to decide when to send feedback.

## Sending feedback

When a report gets closed and feedback is enabled, the close message will have a "Send feedback to author" button.
Clicking on this button will send a message to the author including whether or not the report was approved or rejected
and the custom feedback message you set. If feedback is set to send automatically, then the feedback will be sent when
the report is first closed.

![Approved feedback message](/docs-assets/features/report-feedback/feedback-message.png)

At this time, the feedback message can only be customised on a server-wide basis. If you need to send specific feedback
for a report, it may be best to DM the author directly. In the future, we may consider adding a way to customise
feedback per report.

Feedback can only be sent once for each report, so make sure to double-check your decision before sending feedback.
