// ==UserScript==
// @id           Gamdom.com Chat Enhancer@https://github.com/TehGrumpyGamer/UserScripts
// @name         Gamdom.com Chat Enhancer
// @namespace    https://github.com/TehGrumpyGamer/UserScripts
// @version      0.1
// @author       TehGrumpyGamer (http://steamcommunity.com/id/tehgrumpygamer/)
// @description  Provides enhancements to the chat section of Gamdom.com
// @copyright    2016+ TehGrumpyGamer
// @license      GNU GPLv3
// @homepage     https://github.com/TehGrumpyGamer/UserScripts/tree/master/Gamdom.com%20Chat%20Enhancer#readme
// @homepageURL  https://github.com/TehGrumpyGamer/UserScripts/tree/master/Gamdom.com%20Chat%20Enhancer#readme
// @downloadURL  https://github.com/TehGrumpyGamer/UserScripts/raw/master/Gamdom.com%20Chat%20Enhancer/Chat%20Enhancer%20Script.js
// @updateURL    https://github.com/TehGrumpyGamer/UserScripts/raw/master/Gamdom.com%20Chat%20Enhancer/Chat%20Enhancer%20Script.js
// @supportURL   https://github.com/TehGrumpyGamer/UserScripts/issues
// @match        *://gamdom.com/
// @exclude      *://gamdom.com/fa*
// @exclude      *://gamdom.com/support*
// @exclude      *://gamdom.com/leader*
// @exclude      *://gamdom.com/terms*
// @exclude      *://gamdom.com/trans*
// @exclude      *://gamdom.com/name*
// @exclude      *://gamdom.com/user*
// @icon         https://gamdom.com/img/favicon.ico
// @run-at       document-end
// @require      http://code.jquery.com/jquery-latest.js
// @require      https://raw.githubusercontent.com/bartaz/sandbox.js/master/jquery.highlight.js
// @grant        GM_getValue
// @grant        GM_setValue
// @noframes
// ==/UserScript==

(function () {
	'use strict';

	String.format = function (string) {
		var args = Array.prototype.slice.call(arguments, 1, arguments.length);
		return string.replace(/{(\d+)}/g, function (match, number) {
			return typeof args[number] !== "undefined" ? args[number] : match;
		});
	};

})();