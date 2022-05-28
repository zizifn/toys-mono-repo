const esModules = ['@open-wc/testing', '@web'];
const { jsWithBabelESM: tsjPreset } = require('ts-jest/presets')

module.exports = {
  displayName: 'wc-lit-demo',
  preset: '../../jest.preset.js',
  // globals: {
  //   'ts-jest': {
  //     tsconfig: '<rootDir>/tsconfig.spec.json',
  //   },
  // },
  // transform: {
  //   '^.+\\.[tj]s$': 'ts-jest'
  // },
  moduleFileExtensions: ['ts', 'js', 'mjs', 'html'],
  coverageDirectory: '../../coverage/libs/wc-lit-demo',
  // transform: {

  //   '^.+\\.(ts|js|html|svg)$': ['ts-jest'],
  //   '^.+\\.(mjs)$': 'babel-jest',
  //   // '^.+\\.(mjs)$': 'babel-jest',
  //   // '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  // },
  transform: {
    // '^.+\\.(mjs)$': 'babel-jest',
    // '<rootDir>/node_modules/@web/test-runner-commands.+\\.(js|mjs)$': 'babel-jest',
    '^.+\\.(js|ts)$': ['ts-jest'],
    '^.+\\.(mjs)$': 'babel-jest',
    // ...tsjPreset.transform,
  },

  transformIgnorePatterns: [
    // `<rootDir>/node_modules/(?!${esModules.join('|')})`,
    "<rootDir>/node_modules/(?!lodash-es|@open-wc/testing|@open-wc/semantic-dom-diff|@esm-bundle/chai|@web/test-runner-commands|chai-a11y-axe|lit|@lit)"
  ],
  moduleNameMapper: {
    "^@esm-bundle/chai$": "chai"
  },
  verbose: true,
  testEnvironment: "jsdom",
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  resolver: '@nrwl/jest/plugins/resolver',
  coverageReporters: ['html']
};
