/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_main_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ezAvatar__ = __webpack_require__(2);
 // Import layout CSS


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_raw_loader_sass_loader_styles_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_raw_loader_sass_loader_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_raw_loader_sass_loader_styles_scss__);


/**
 * ez-avatar
 *
 * An avatar web component with multiple styles && options.
 *
 * REF: https://developers.google.com/web/fundamentals/primers/customelements/
 * FALLBACK: https://github.com/webcomponents/custom-elements/blob/master/custom-elements.min.js
 *
 * @markup
 * <ez-avatar src="String"></ez-avatar>
 * <ez-avatar src="String" size="30"></ez-avatar>
 * <ez-avatar size="34" initials="tc"></ez-avatar>
 *
 * @options
 *  - src - String, "http://url.com/here.jpg" - contains needed avatar url (see below) REQUIRED unless initials
 *  - size - Number, "36" - pixel size
 *  - initials - String, "AC" - shows user initials instead of image if no image found
 */
(function () {

  /**
   * Cloning contents from a <template> element is more performant
   * than using innerHTML because it avoids addtional HTML parse costs.
   */
  const template = document.createElement('template');
  template.innerHTML = `
    <style>${__WEBPACK_IMPORTED_MODULE_0_raw_loader_sass_loader_styles_scss___default.a}</style>
    <img/>
  `;

  class EzAvatar extends HTMLElement {

    static get observedAttributes() {
      return ['src', 'initials'];
    }

    /**
    * The element's constructor is run anytime a new instance is created.
    * Instances are created either by parsing HTML, calling
    * document.createElement('howto-checkbox'), or calling new HowToCheckbox();
    * The construtor is a good place to create shadow DOM, though you should
    * avoid touching any attributes or light DOM children as they may not
    * be available yet.
    */
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    /**
    * `connectedCallback()` fires when the element is inserted into the DOM.
    * It's a good place to set the initial `role` internal state,
    * and install event listeners.
    */
    connectedCallback() {
      if (!this.hasAttribute('role')) this.setAttribute('role', 'img');
      if (this.hasAttribute('size')) this.size(this.getAttribute('size'));
      if (this.hasAttribute('src')) this.src(this.getAttribute('src'));
      if (this.hasAttribute('initials')) this.initials(this.getAttribute('initials'));
    }

    disconnectedCallback() {
      // Placeholder
    }

    size(value) {
      let baseSize = typeof value !== 'undefined' && !isNaN(value) ? parseInt(value, 10) : 48;

      this.size = baseSize;
      this.style.width = baseSize + 'px';
      this.style.height = baseSize + 'px';
    }

    src(value) {
      let img = this.shadowRoot.querySelector('img');

      // if no value, keep image hidden and default to zero state
      if (!value) return;

      function setImage() {
        // Set image into src!
        img.src = value;
        img.style.display = 'block';

        // A nice fade in after image display block :)
        setTimeout(() => {
          img.style.opacity = 1;
        }, 20);
      }

      // If already have an image loaded, fade out old one!
      if (img.src && img.src.length > 2) {
        // Transition out the old image
        img.style.opacity = 0;
        setTimeout(setImage, 220);
      } else {
        setImage();
      }
    }

    initials(value) {
      if (!value) return;
      value = value.toUpperCase();

      // Add text as new element
      let size = this.size ? this.size / 2 : 10;
      let initials = document.createElement('div');
      initials.textContent = value;
      initials.style.fontSize = `${Math.round(size)}px`;
      initials.style.marginTop = `${Math.round(size) / 2 - 1}px`;

      // Remove old, if we have
      let oldDiv = this.shadowRoot.querySelector('div');
      if (oldDiv) this.shadowRoot.removeChild(oldDiv);

      // Add new
      this.shadowRoot.appendChild(initials);
    }

    // Only called for the observedAttributes
    attributeChangedCallback(key, o, n) {
      if (o === n) return;
      // assign attribute changes based on key
      this[key](n);
    }
  }

  // Dont allow multiple definitions
  let exists = window.customElements.get('ez-avatar');
  if (!exists) window.customElements.define('ez-avatar', EzAvatar);
})();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ":host {\n  background: #cbcbcb;\n  color: #6e6e6e;\n  display: block;\n  position: relative;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  overflow: hidden;\n  text-align: center; }\n  :host[hidden] {\n    display: none; }\n\nimg {\n  display: none;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  border-radius: 50%;\n  overflow: hidden;\n  will-change: opacity;\n  transition: opacity 220ms ease-in-out; }\n"

/***/ })
/******/ ]);