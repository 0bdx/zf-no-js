export { zsJsOn as default };
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
 *        !function zsJsOn(C,h){h[C]+=(h[C]?' ':'')+'zs-js-on'}('className',
 *document.documentElement)//0bdx.com/zs-js-on#0.0.1
 *
 * @param {'className'} CLASS_NAME
 *    The literal string `"className"`.
 * @param {HTMLHtmlElement} htmlElement
 *    The page's `<HTML>` element, eg using `document.documentElement`.
 */
declare function zsJsOn(CLASS_NAME: 'className', htmlElement: HTMLHtmlElement): void;
