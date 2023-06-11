import Are from '@0bdx/are';

import { default as zsJsOn } from './zs-js-on.js';
import { zsJsOnTest } from './src/zs-js-on.test.js';

// Create a new test suite.
const testSuite = new Are('@zs/js-on');

// Run the tests.
zsJsOnTest(testSuite, zsJsOn);

// Log a summary of the results.
console.log(testSuite.render());
