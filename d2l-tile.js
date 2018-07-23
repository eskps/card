import '../@polymer/polymer/polymer-legacy.js';

import '../d2l-colors/d2l-colors.js';
import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="d2l-tile">
	<template strip-whitespace="">
		<style>
			:host {
				background: white;
				border: 1px var(--d2l-color-titanius) solid;
				border-radius: 7px;
				box-sizing: border-box;
				cursor: pointer;
				display: block;
				font: inherit;
				position: relative;
				text-align: center;
				width: 350px;
			}

			[hidden] {
				display: none;
			}

			.d2l-tile-content-container {
				position: relative;
				width: 100%;
				z-index: 2;
				text-decoration: none;
				color: var(--d2l-color-ferrite);
			}

			:host([hover-effect~="low-lift"]) {
				transition: transform 0.2s;
			}

			:host([hover-effect~="low-lift"])::after {
				border-radius: 5px;
				box-shadow: 0 4px 10px 0 var(--d2l-color-titanius);
				content: '';
				height: 100%;
				left: 0;
				opacity: 0;
				position: absolute;
				top: 0;
				transition: opacity 0.3s ease-in-out;
				width: 100%;
				z-index: -1;
			}

			:host([hover-effect~="low-lift"]:hover),
			:host([hover-effect~="low-lift"][focused]) {
				transform: scale(1.03);
			}

			:host([hover-effect~="low-lift"]:hover)::after,
			:host([hover-effect~="low-lift"][focused])::after {
				opacity: 1;
			}
		</style>
		<template is="dom-if" if="[[_hasHref(href)]]">
			<a class="d2l-tile-content-container" href$="[[href]]" tabindex$="[[specifiedTabIndex]]">
				<slot></slot>
			</a>
		</template>
		<template is="dom-if" if="[[!_hasHref(href)]]">
			<div class="d2l-tile-content-container" tabindex$="[[specifiedTabIndex]]">
				<slot></slot>
			</div>
		</template>
	</template>

</dom-module>`;

document.head.appendChild($_documentContainer.content);
/**
`d2l-tile` is a Polymer-based web component for creating a simple tile.
@demo demo/d2l-tile.html
*/
Polymer({
	is: 'd2l-tile',
	properties: {
		/**
		 * A space-separated string listing the hover effect to be applied
		 * to the tile.
		 */
		hoverEffect: {
			type: String,
			value: '',
			reflectToAttribute: true
		},
		/**
		 * A boolean reflecting the focus state of the element.
		 */
		focused: {
			type: Boolean,
			value: false,
			reflectToAttribute: true
		},
		/**
		 * A location to go when you click on the tile
		 */
		href: {
			type: String,
			value: null
		},
		/**
		 * tabindex within the tile
		**/
		specifiedTabIndex: {
			type: String,
			value: '0'
		}
	},
	attached: function() {
		this.addEventListener('focus', this._onFocus, true);
		this.addEventListener('blur', this._onBlur, true);
	},
	detached: function() {
		this.removeEventListener('focus', this._onFocus);
		this.removeEventListener('blur', this._onBlur);
	},
	_onFocus: function() {
		this.focused = true;
	},
	_onBlur: function() {
		this.focused = false;
	},
	_hasHref: function(href) {
		return href !== undefined && href !== null;
	}
});
