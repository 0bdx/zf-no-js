/** ### Adds the `zs-js-on` class to the `<HTML>` element if JS is running.
 * 
 * If `zsJsOn()` is called in `<BODY>`, you can pass `document.body.parentNode`
 * as the first argument, which may be slightly faster.
 * 
 * If `zsJsOn()` is called in `<HEAD>`, pass `document.documentElement` as
 * the first argument, because `document.body.parentNode` isn’t available there.
 * 
 * Live examples:
 * - <https://0bdx.com/zs-js-on/examples/example-1.html>
 * - <https://0bdx.com/zs-js-on/examples/example-2.html>
 * 
 * @example
 *        !function zsJsOn(C,h){h[C]+=(h[C]?' ':'')+'zs-js-on'}('className',
 *document.documentElement)//0bdx.com/zs-js-on#0.0.1
 *
 * @param {'className'} CLASS_NAME
 *    The literal string `"className"`.
 * @param {HTMLHtmlElement} htmlElement
 *    The page's `<HTML>` element, eg using `document.documentElement`.
 */
export default function zsJsOn(CLASS_NAME,htmlElement){
  // If className is empty, append "zs-js-on". Otherwise, append after a space.
  htmlElement[CLASS_NAME]+=(htmlElement[CLASS_NAME]?' ':'')+'zs-js-on'
}

/* ------------------------------ Compatibility ----------------------------- */

// Chrome 1 (2008), Firefox 1 (2004), Safari 1 (2003):
// - `document.documentElement`
// - `HTMLElement.className`

// Chrome 1 (2008), Firefox 1 (2004), Safari 1.1 (2003):
// - `document.body.parentNode` (may be faster than `document.documentElement`)
