import Are, { bind2, isDeeplyLike, throwsError } from '@0bdx/are';
import zsJsOn from './zs-js-on.js';

/** ### `zsJsOn()` unit tests.
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
