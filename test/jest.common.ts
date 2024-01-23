import { Config } from 'jest';
import path from 'path';

const config: Config = {
  rootDir: path.join(__dirname, '..'),
  watchPlugins: ['select-projects', 'typeahead/filename', 'typeahead/testname'],
};

export default config;
