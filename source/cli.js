#!/usr/bin/env node

import yargs from 'yargs';
import path from 'path';
import slash from 'slash';

import documentor from './documentor';
import { getDefaultOptions } from './config/defaults';

const { config } = yargs.argv;
let options;
let fullPath;

if (config) {
  try {
    fullPath = slash(path.resolve(process.cwd(), config));
    options = require(fullPath);
  } catch(err) {
    // console.error(err);
    throw new Error(`Documentor CLI expect a valid path to a config modules, received: ${fullPath}`);
  }
} else {
  options = getDefaultOptions();
}

documentor(options);
