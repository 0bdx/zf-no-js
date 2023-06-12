import Are from '@0bdx/are';

import { default as zsJsOn } from './zs-js-on.js';
import { default as zsJsOnMin } from './zs-js-on.min.js';
import { zsJsOnTest } from './src/zs-js-on.test.js';

// Create a new test suite.
const testSuite = new Are('@zs/js-on');

// Create a new section and run the tests on the unminified build.
testSuite.addSection('Unminified');
zsJsOnTest(testSuite, zsJsOn);

// Create a new section and run the tests on the minified build.
testSuite.addSection('Minified');
zsJsOnTest(testSuite, zsJsOnMin);

// Log a summary of the results.
console.log(testSuite.render());
