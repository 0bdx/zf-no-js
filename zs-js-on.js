/**
 * https://www.npmjs.com/package/@zs-/js-on
 * @version 0.0.1
 * @license Copyright (c) 2023 0bdx <0@0bdx.com> (0bdx.com)
 * SPDX-License-Identifier: MIT
 */
/** ### Adds the `zs-js-on` class to the `<HTML>` element if JS is running.
 * 
 * If `zsJsOn()` is called in `<BODY>`, you can pass `document.body.parentNode`
 * as the first argument, which may be slightly faster.
 * 
 * If `zsJsOn()` is called in `<HEAD>`, pass `document.documentElement` as the
 * first argument, because `document.body.parentNode` isn’t available there.
 * 
 * Live examples:
 * - <https://0bdx.com/zs-js-on/examples/example-1.html>
 * - <https://0bdx.com/zs-js-on/examples/example-2.html>
 *
 * @example
 *                                                                 !function(
 *A,C,c,S,h,a,b,e,o){o=h[C];if(!o)return h[C]=A;o=S+o+S;e=o.indexOf(A);a=o[c](e
 *+A.length);b=o[c](e-1);if(e<0||a!=S||b!=S)h[C]+=S+A}('zs-js-on','className',
 *'charAt',' ',document.documentElement)//0bdx.com/zs-js-on#0.0.1
 *
 * @param {'zs-js-on'} ADDED_CLASS
 *    The class name to add if JS is running - the literal string `"zs-js-on"`.
 * @param {'className'} CLASS_NAME
 *    The literal string `"className"`.
 * @param {'charAt'} CHAR_AT
 *    The literal string `"charAt"`.
 * @param {' '} SPACE
 *    The literal string `" "`.
 * @param {HTMLHtmlElement} htmlElement
 *    The page's `<HTML>` element, eg using `document.documentElement`.
 */
function zsJsOn(
    ADDED_CLASS, // -> A
    CLASS_NAME, // -> C
    CHAR_AT, // -> c
    SPACE, // -> S
    htmlElement, // -> h
    /** @type any */ after, // -> a
    /** @type any */ before, // -> b
    /** @type any */ existingPos, // -> e
    /** @type any */ oldClassName, // -> o
){

    // Get the `<HEAD>` element's `class` attribute value.
    oldClassName=htmlElement[CLASS_NAME];

    // If `oldClassName` is empty, just change it to "zs-js-on", and finish.
    if(!oldClassName)
        return htmlElement[CLASS_NAME]=ADDED_CLASS

    // Otherwise, `oldClassName` is not empty.
    // Pad the `class` attribute value with spaces.
    oldClassName=SPACE+oldClassName+SPACE;

    // Get the start index of "zs-js-on", if `oldClassName` contains it.
    existingPos=oldClassName.indexOf(ADDED_CLASS);

    // Get the characters after and before "zs-js-on".
    after=oldClassName[CHAR_AT](existingPos+ADDED_CLASS.length);
    before=oldClassName[CHAR_AT](existingPos-1);

    // Append "zs-js-on" after a space, if...
    if(
        // `oldClassName` does not contain "zs-js-on"...
        existingPos<0
        // ...or the "zs-js-on" is immediately followed by a non-space...
        ||after!=SPACE
        // ...or the "zs-js-on" is immediately preceded by a non-space.
        ||before!=SPACE
    )
        htmlElement[CLASS_NAME]+=SPACE+ADDED_CLASS;
}


/* ------------------------------ Compatibility ----------------------------- */

// ECMA-262 1st edition, June 1997:
// - `String.prototype.charAt()`
// - `String.prototype.indexOf()`
// - `String.prototype.length`

// Chrome 1 (2008), Firefox 1 (2004), Safari 1 (2003):
// - `document.documentElement`
// - `HTMLElement.className`

// Chrome 1 (2008), Firefox 1 (2004), Safari 1.1 (2003):
// - `document.body.parentNode` (may be faster than `document.documentElement`)

export { zsJsOn as default };
