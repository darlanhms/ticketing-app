/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  transform: {
    // @ts-ignore
    '^.+.(ts|tsx)$': ['@swc/jest'],
  },
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./src/test/setup.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: '.(spec|test).(ts|tsx)$',
  roots: ['<rootDir>/src'],
  clearMocks: true,
  testTimeout: 20000,
};

export default config;
