module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  testRegex: '.(spec|test).(ts|tsx)$',
  transform: { '^.+\.(ts|tsx)$': 'ts-jest' },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
