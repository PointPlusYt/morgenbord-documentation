# Getting started

Congratulations for the decision of creating your own dashboard! We are proud to have you as a user and-or contributor!

To know more about Morgenbord's architecture, please start with [the architecture's basics on the main page]().

## Requirements

Make sure your PHP installation is compatible with Symfony 7.
Morgenbord has been built with SQLite, you will need to install the [SQLite](https://www.php.net/manual/en/book.pdo-sqlite.php) extension.

## Step by step

### Step 1: Create your app

All Morgenbord's features are in Symfony bundles. This means you need to create your own Symfony project to create a [hull](Glossary#hull) where you will host the [core](Glossary#core) and the widgets you want. You can also create your own widget inside your hull.

There are two ways to create a hull. You can clone our latest hull on GitHub : https://github.com/PointPlusYt/morgenbord-hull
That's it, you have the right tree structure with the right dependencies, including the core bundle.

The other method is to create a new [Symfony project](https://symfony.com/doc/current/setup.html) and start by adding the Core Bundle.
```sh
composer require morgenbord/core-bundle
```

### Step 2: Configuration

There is nothing to do! Morgenbord uses SQLite. All data will be in `var/data.db`. There is nothing to do here.

This is the first version of the documentation. Please [open an issue](https://github.com/PointPlusYt/morgenbord-core-bundle/issues/new) if you encounter any problem.

### Step 3 : Setting the first user

This is a beta version. The first user command does not exist yet. TBD

### Step 4 : Install widget bundles

Widgets are installed with composer. You can get a list of official widgets with [the widgets page](/Widgets/).
