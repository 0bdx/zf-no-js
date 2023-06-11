import { readFileSync } from 'fs';
import { execSync } from 'child_process';
import * as bh from '@0bdx/build-helpers';

export default bh.rollupConfigBasicLib(
    'zs-js-on.js',
    bh.generateBanner(
        new Date(),
        readFileSync('./package.json', 'utf-8'),
        bh.getFirstCommitYear(execSync),
        true,
    ),
);
