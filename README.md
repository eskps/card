# d2l-card
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/BrightspaceUI/card)
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

A [Polymer](https://www.polymer-project.org/)-based web component for cards.

## Installation

`d2l-card` can be installed from [Bower][bower-url]:
```shell
bower install d2l-card
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) polyfill loader (for browsers who don't natively support web components), then import the component or behavior.

### Component

#### HTML

```html
<head>
  <script src="../webcomponentsjs/webcomponents-loader.js"></script>
  <link rel="import" href="../d2l-card/d2l-card.html">
</head>
```

Then add the `d2l-card`, provide an `href` if relevant, and provide elements for the slots as needed.

```html
<d2l-card text="Hydrology" href="...">
  <img slot="header" ... />
  <d2l-dropdown-more slot="actions" ... >...</d2l-dropdown-more>
  <d2l-button-icon slot="actions" ... ></d2l-button-icon>
  <div slot="content">...</div>
  <div slot="footer">...</div>
</d2l-card>
```

Slots:

* `content` (required): The primary content such as title and supplementary info (no actionable elements)
* `header` (options): Header content, such as course image (no actionable elements)
* `footer` (options): Footer content, such secondary actions
* `badge` (options): Badge content, such as a profile image or status indicator
* `actions` (options): Buttons and dropdown openers to be placed in top right corner of header

Properties:

* `text` (required): accessible text for the card (will be announced when AT user focused on card)
* `href` (optional): the location for the primary action/navigation
* `subtle` (optional): used for a subtle aesthetic on non-white backgrounds
* other link properties as defined by [D2L.PolymerBehaviors.Link.Behavior](https://github.com/BrightspaceUI/link/blob/master/d2l-link-behavior.html)

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

If you don't have it already, install the [Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli) globally:

```shell
npm install -g polymer-cli
```

To start a [local web server](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#serve) that hosts the demo page and tests:

```shell
polymer serve
```

To lint ([eslint](http://eslint.org/) and [Polymer lint](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#lint)):

```shell
npm run lint
```

To run unit tests locally using [Polymer test](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#tests):

```shell
polymer test --skip-plugin sauce
```

To lint AND run local unit tests:

```shell
npm test
```

[bower-url]: http://bower.io/search/?q=d2l-card
[bower-image]: https://badge.fury.io/bo/d2l-card.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/card
[ci-image]: https://travis-ci.org/BrightspaceUI/card.svg?branch=master
