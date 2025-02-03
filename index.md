---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Morgenbord
  text: Custom dashboard for everyone
  tagline: Made with 🎔 for your productivity
  image: /images/logo-L-transparent.png
  actions:
    - theme: brand
      text: Getting started
      link: /Installation
    - theme: alt
      text: Widgets
      link: /Widgets/

features:
  - title: Custom dashboard
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Made with Symfony
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Full foss
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

# Introduction to Morgenbord

## What is Morgenbord?

## How does it work?

## Architecture

### Basics

To use MorgenBord, you need at least two things: [the app](#morgenbord-app) and [the core](#morgenbord-core-bundle). The app is your own main frame of execution, based on Symfony 6. The core is a bundle, a dependency you only have to manage through [composer](https://getcomposer.org). The separation was made to ensure that the core is easily upgradable with dependency management. So you will create, maintain and develop your app and you will upgrade the core with a simple command.

#### morgenbord-app

The base app, you need it to set your dashboard up and customize it. It is not a dependency you add to your `composer.json` file. It is a template to create your own project. You will probably want to version it with [git](https://git-scm.com/). As any Symfony project, you will be able to build upon your own app, create your own widgets without having to create bundles. See more details on [the App's documentation](/App/).

#### morgenbord-core-bundle

The core bundle, it contains the main functionalities. It is made to be upgraded with composer commands. It offers a framework to build widgets, make them known to your app so the user can add the widget to a dashboard. It provides a user class and some routes. See more details on [the Core's documentation](/Core/).

#### Widgets

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

During the process, I created videos to explain all technical details and architecture subtelties. All this information is available on the actual documentation you're reading now. MorgenBord is intended to be a real open source project with its users and its community, it had to be coded and documented in english.

## Where is this project going ?

I don't know. I am waiting to see if there is a community around it. I may start a second YouTube channel fully in english. I may open donations. I may start consulting or develop specific widgets for potential clients. I don't know. Let's put it out there first then we'll see.
