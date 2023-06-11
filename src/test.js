import Are from '@0bdx/are';

import { default as zsJsOn } from './index.js';
import { zsJsOnTest } from './zs-js-on.js';

// Create a new test suite.
const testSuite = new Are('@zs/js-on (source)');

// Run the tests.
zsJsOnTest(testSuite, zsJsOn);

// Log a summary of the results.
console.log(testSuite.render());
