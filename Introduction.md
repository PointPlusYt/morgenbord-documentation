# Introduction to Morgenbord

## What is Morgenbord?

Morgenbord is a custom dashboard for any type of use. Here are a few ideas :

- A set of notes, reminders and to-dos to organize your family activities
- A set of graph to monitor your {insert relevant name}, ie: marketing campaign, e-reputation, servers, finances
- Links and data to organize your day in a glance
- Checklists and burn rates to monitor a long term project

It is a web page, you can add it anywhere :

- Make it your homepage on your browser
- Install it on your phone like an app to access it on your phone
- Cast it to a screen in your office
- Embed it in your usual tools : Nextcloud, Obsidian, Wordpress, ClickUp…
## How does it work

This part is for tech savvies and geeks.

In a nutshell, Morgenbord is an app you need to develop at least a little. It's based on Symfony so it is PHP based. You create your project with a composer command, you add existing widget with composer and you can use the Symfony framework to add any feature to your app.
## Architecture

### Basics

To use Morgenbord, you need at least two things: [the app](#morgenbord-app) and [the core](#morgenbord-core-bundle). The app is your own main frame of execution, based on Symfony. The core is a bundle, a dependency you manage through [composer](https://getcomposer.org). The separation was made to ensure that the core is easily upgradable with dependency management. So you create, maintain and develop your app and you upgrade the core in the simplest way.

#### morgenbord-app

The base app, you need it to set your dashboard up and customize it. It is not a dependency you add to your `composer.json` file. It is a template to create your own project. You will probably want to version it with [git](https://git-scm.com/). As any Symfony project, you will be able to build upon your own app, create your own widgets without having to create bundles. See more details on [the App's documentation](/App/index).

#### morgenbord-core-bundle

The core bundle, it contains the main features. It is made to be upgraded with composer commands. It offers a framework to build widgets, make them known to your app so the user can add the widget to a dashboard. It provides a user class and some routes. See more details on [the Core's documentation](/Core/).

#### Widgets

All widgets are bundles
See more details on [creating a Widget](/Widgets/).

## The official widgets

### The Demo Widget

Not a real widget, it exists to help you create your own widget.

### The Checklist Widget

The First one

### The Wallabag Widget

Soon…

### The Links List Widget

Soon…

## Why Symfony bundles ?

As a Symfony developer I first wanted to create my own dashboard app. Then I felt the need to make the whole system very flexible. I wanted to create my own widgets and let other people create theirs and even make them public. As I started this project with Symfony I felt bundles were the way to go.

## I heard you have a YouTube channel

Did you ? Really ? Well, I do ! It's totally in french, there is plenty of content in english all over the web and other languages still need to be reprensented. There are developers out there who are not that comfortable with foreign languages. My channel, [PointPlus](https://youtube.com/PointPlus), for which this Github organization exists, is a place where I can share my knowledge and experience to anyone who speaks french, but only french. This is the choice I made for this media.

During the process, I created videos to explain all technical details and architecture subtelties. All this information is available on the actual documentation you're reading now. Morgenbord is intended to be a real open source project with its users and its community, it had to be coded and documented in english.

## Where is this project going ?

I don't know. I am waiting to see if there is a community around it. I may start a second YouTube channel fully in english. I may open donations. I may start consulting or develop specific widgets for potential clients. I don't know. Let's put it out there first then we'll see.
