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
    throws(()=>f(0,1,2,3,4), /number/, 'An error like "Cannot create property ... number ..."');

    // Empty `className`.
    html.className = '';
    f('zs-js-on', 'className', 'charAt', ' ', html);
    isLike(html.className, 'zs-js-on', 'Should not start with a space');

    // `className` has pre-existing classes.
    html.className = 'pre-existing looks-like-zs-js-on classes-here';
    f('zs-js-on', 'className', 'charAt', ' ', html);
    isLike(html.className, 'pre-existing looks-like-zs-js-on classes-here zs-js-on', 'Should append after a space');

    // `className` is already "zs-js-on".
    html.className = 'zs-js-on';
    f('zs-js-on', 'className', 'charAt', ' ', html);
    isLike(html.className, 'zs-js-on', 'Should not repeat "zs-js-on"');

    // `className` already contains "zs-js-on", at the start.
    html.className = 'zs-js-on pre-existing classes-here';
    f('zs-js-on', 'className', 'charAt', ' ', html);
    isLike(html.className, 'zs-js-on pre-existing classes-here', 'Should not add another "zs-js-on"');

    // `className` already contains "zs-js-on", in the middle.
    html.className = 'pre-existing zs-js-on classes-here';
    f('zs-js-on', 'className', 'charAt', ' ', html);
    isLike(html.className, 'pre-existing zs-js-on classes-here', 'Should not add another "zs-js-on"');

    // `className` already contains "zs-js-on", at the end.
    html.className = 'pre-existing classes-here zs-js-on';
    f('zs-js-on', 'className', 'charAt', ' ', html);
    isLike(html.className, 'pre-existing classes-here zs-js-on', 'Should not add another "zs-js-on"');

    return testSuite;
}
