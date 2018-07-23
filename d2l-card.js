import '../@polymer/polymer/polymer-legacy.js';

import '../d2l-colors/d2l-colors.js';
import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="d2l-card">

	<template strip-whitespace="">
		<style>
			:host {
				background-color: #ffffff;
				border: 1px solid var(--d2l-color-gypsum);
				border-radius: 6px;
				box-sizing: border-box;
				display: inline-block;
				overflow: hidden;
			}
			.d2l-card-content {
				padding: 1.5rem 1.2rem;
			}
			.d2l-card-footer ::slotted([slot=footer]) {
				padding: 0.6rem 1.2rem;
			}
			:host([subtle]) {
				border-color: transparent;
				box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);
			}
		</style>
		<div class="d2l-card-header"><slot name="header"></slot></div>
		<div class="d2l-card-content"><slot></slot></div>
		<div class="d2l-card-footer"><slot name="footer"></slot></div>
	</template>



</dom-module>`;

document.head.appendChild($_documentContainer.content);
/**
`d2l-card`
Polymer-based web components for card

@demo demo/d2l-card.html
*/
Polymer({
	is: 'd2l-card',

	properties: {

		/**
		 * Indicates whether subtle container style should be applied (for non-white backgrounds).
		 */
		subtle: {
			type: Boolean
		}

	}

});
