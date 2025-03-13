# Glossary

## Core
The core of Morgenbord. It a Symfony bundle, installed as a dependency in a Symfony project we call the hull.

## Hull
The hull is a concept. It is just a word to designate the Symfony project that you own. Its name is the counterpart of the core, nothing more. There is a hull ready to launch Morgenbord in a repository called [morgenbord-hull](https://github.com/PointPlusYt/morgenbord-hull).

To create your hull or to add the core to your current project, follow the [Installation](Installation) instructions.

## Widget
When this documentation talks about a widget, it is a feature that can be available in a dashboard. Whatever it does, this feature is isolated from the rest of the app.

The word widget can also mean an instance of the feature, placed in the dashboard. More than one instance can exist on the same dashboard.

## Widget Bundle
A widget bundle is a Symfony bundle built specifically for Morgenbord to register one or more widgets. It contains the PHP logic and file structure to be a Symfony bundle, the PHP logic to register at least one widget, at least one Twig template and any JavaScript, Vue file or other assets necessary for the widget.
