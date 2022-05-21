const preset = require('./jest.config');

module.exports = {
  ...preset,
  testEnvironment: 'node',
  testTimeout: 15000,
  setupFilesAfterEnv: ['<rootDir>../../packages/tests/setupNodeTest.js'],
}
