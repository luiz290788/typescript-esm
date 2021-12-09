/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  coverageProvider: "v8",
  preset: 'ts-jest',
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.[tj]s$': '$1',
  },
};
