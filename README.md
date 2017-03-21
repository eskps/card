# d2l-tile

A [Polymer](https://www.polymer-project.org/1.0/)-based web component for the D2L Tile.

## What is the D2L-tile?

An image at the top, content at the bottom, and an optional `...` button which can launch a d2l-dropdown-menu.

<image goes here at some point>

## Just the parameters

### HTML Attributes:
- `img-url`: The image that you want to appear
- `custom-image-format`: Add this attribute if you want to provide something in the `tile-image` slot rather than using the `img-url`
- `show-menu`: Add this attribute if you want the `...` dropdown menu to appear
- `dropdown-aria-label`: A string which will be provided to the aria-label

### CSS Variables:
- `--tile-image-height`: The height you want the image to be
- `--tile-image-background`: If you don't supply an image-url

### Slots:
- Any tags without a `slot` parameter will be put into the content area of the tile
- `tile-image`: If you added a `custom-image-format` tag to the `d2l-tile`, the tag with this slot attribute will be placed in the top area of the tile rather than the image. A possible use for this would be placing a responsive image with srcset and sizes
- `tile-menu`: Use this attribute on a `<d2l-menu>` in order to place it inside the `...` menu which appears when the `show-menu` attribute is present on the `<d2l-tile>`

## Examples

In the simple case, you can simply provide an image url, an image height (via css), and put some content inside. You can also add in a `--tile-image-background` if you want some color to show up before the menu loads

```html
<style>
	d2l-tile { --tile-image-height: 100px; }
</style>

<d2l-tile img-url="http://www.brightspacetestimage.com">
	<div> CONTENT </div>
</d2l-tile
```

If you want a '...' context menu, you have to add the `show-menu` attribute to the tag, and add a d2l-menu tag with the named slot parameter `tile-menu`, you can add an aria label using the `dropdownAriaLabel` parameter.

```html
<style>
	d2l-tile { --tile-image-height: 100px; }
</style>

<d2l-tile img-url="http://www.brightspacetestimage.com" show-menu dropdown-aria-label="This is my menu">
	<div> CONTENT </div>
	<d2l-menu slot="tile-menu" >
		<!-- d2l-menu content -->
	</d2l-menu>
</d2l-tile>
```

If you want to use something other than a url for the image, you can add the `custom-image-format` attribute and an html element with the slot attribute: `tile-image`

```html
<style>
	d2l-tile { --tile-image-height: 100px; }
</style>

<d2l-tile custom-image-format>
	<div> CONTENT </div>
	<div slot="tile-image">
		<p>Arbitrary HTML</p>
	</div>
</d2l-tile
```

If you'd rather have css generated background than an image, you can use the `--tile-image-background` css variable and provide no image
```html
<style>
	d2l-tile {
		--tile-image-height: 100px;
		--tile-image-background: lightblue;
	}
</style>

<d2l-tile>
	<div> CONTENT </div>
</d2l-tile
```

## What if I want something partially overlapping the image???

Stick it at the top of the content area and give it a negative top margin.

## When I put this inside a button in firefox I lose the hover effect

Seems to be a bug with firefox at the moment:
https://bugzilla.mozilla.org/show_bug.cgi?id=843003

Maybe put it in a div with `role="button"` if you want it to be clickable

## Coding styles

See the [Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.
