# Introduction to Morgenbord

## What is Morgenbord?

## How does it work?

## Your dashboard architecture

### Basics

To use MorgenBord, you need two things: [the app](#morgenbord-app) and [the core](#morgenbord-core-bundle). The app is your own main frame of execution, based on Symfony 6. The core is a bundle, a dependency you only have to manage through [composer](https://getcomposer.org).

#### morgenbord-app

The base app, you need it to set your dashboard up and customize it. It is not a dependency you add to your `composer.json` file. It is a template to create your own dashboard. You will probably want to version it with [git](https://git-scm.com/). As any Symfony project, you will be able to build upon your own app, create your own widgets without having to create bundles. [See more details on creating a Widget](/Widgets/README.md).

#### morgenbord-core-bundle

The core bundle, it contains the main functionalities. It is made to be upgraded with composer commands. It offers a framework to build widgets, make them known to the app so the user can add the to a dashboard.  It provides a user class and some routes. See more details on [the Core's documentation](/Core/README.md).

#### Widgets

### Why Symfony bundles ?

## Where is this project going ?



## The official widgets

### The Demo Widget

Not a real widget, it exists to help you create your own widget.

### The Checklist Widget

The First one

### The Wallabag Widget

Soon…

### The Links List Widget

Soon…