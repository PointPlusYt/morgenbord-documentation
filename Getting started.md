# Getting started

# Installation

Congratulations for the decision of creating your own dashboard ! We are proud to have you as a user and-or contributor !

To know more about Morgenbord's architecture, please start with [the architecture's basics on the main page]().

## Requirements

Make sure your PHP installation is compatible with Symfony 6.0

Morgenbord has been built with SQLite in mind, you will need to install the [SQLite](https://www.php.net/manual/en/book.pdo-sqlite.php) extension.

## Step by step

### Step 1: Create your app

Your app is yours, make it the way you want it to be. You need to create your project with our template. Do it with composer. It will take our template and create a new project in the specified directory. Here the directory is `morgenbord-app`

```sh
composer create-project morgenbord/app morgenbord-app
```

That's it, you have the right tree structure with the right dependencies, including the core bundle.

### Step 2: Configuration

There is nothing to do ! Morgenbord uses SQLite. All data will be in `var/data.db`. There is nothing to do here.

### Step 3 : Setting the first user

### Step 4 : Install widget bundles

Widgets are installed with composer. You cna get a list of official widgets with [the widgets page](/Widgets/).


## Other matter