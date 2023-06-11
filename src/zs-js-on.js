import Are, { bind2, isDeeplyLike, throwsError } from '@0bdx/are';

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


/* ---------------------------------- Tests --------------------------------- */

/** ### `foo()` unit tests.
 *
 * @param {Are} testSuite
 *    A '@0bdx/are' test suite, instantiated by '/test.js' or '/src/test.js'.
 * @param {zsJsOn} f
 *    The `zsJsOn()` function to test.
 * @returns {Are}
 *    Returns the test suite, with a new section and some test results added.
 */
export function zsJsOnTest(testSuite, f) {

  // Take a test suite from a previous test, and bind two functions to it.
  const [ isLike, throws ] = bind2(isDeeplyLike, throwsError, testSuite);

  // Mocks.
  /** @type {HTMLHtmlElement} */
  // @ts-expect-error - Type '...' is missing ... and 285 more. ts(2740)
  const html = { className:'' };

  // Invalid arguments.
  // @ts-expect-error
  throws(()=>f(), /undefined/, 'An error like "Cannot read properties of undefined ..."');
  // @ts-expect-error
  throws(()=>f(123, 456), /number/, 'An error like "Cannot create property ... number ..."');

  // Empty `className`.
  f('className', html);
  isLike(html.className, 'zs-js-on', 'Does not start with a space');

  // `className` has pre-existing classes.
  html.className = 'pre-existing classes-here';
  f('className', html);
  isLike(html.className, 'pre-existing classes-here zs-js-on', 'Inserts a space');

  // `className` is already "zs-js-on".
  // @TODO change `zsJsOn()`, so that it does not repeat the class name
  html.className = 'zs-js-on';
  f('className', html);
  isLike(html.className, 'zs-js-on zs-js-on', 'Repeats "zs-js-on"');

  // `className` already contains "zs-js-on".
  // @TODO change `zsJsOn()`, so that it does not repeat the class name
  html.className = 'pre-existing zs-js-on classes-here';
  f('className', html);
  isLike(html.className, 'pre-existing zs-js-on classes-here zs-js-on', 'Now has two "zs-js-on" classes');

  return testSuite;
}
