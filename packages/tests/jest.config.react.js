const preset = require('./jest.config');

/**
 * @type {import('@jest/types').Config.DefaultOptions}
 */
module.exports = {
  ...preset,
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>../../packages/tests/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>../../packages/tests/__mocks__/fileMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>../../packages/tests/setupReactTest.js'],
  testEnvironment: 'jsdom',
};
