const tsJestConfig = {
  tsconfig: '<rootDir>/tsconfig.json',
  isolatedModules: true,
}
module.exports = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', 'src'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', tsJestConfig],
    '(/|\\\\)node_modules(/|\\\\)(lodash-es|@?firebase|decode-uri-component|filter-obj|query-string|split-on-first)(/|\\\\).*':
      ['ts-jest', tsJestConfig],
  },
  testMatch: null,
  testRegex: '(test|spec).(ts|tsx|js)$',
  moduleNameMapper: {
    '\\.(css|scss|es)$': 'identity-obj-proxy',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/styleMock.js',
    nanoid: require.resolve('nanoid'),
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}'],
  coverageReporters: ['json'],
  testTimeout: 10000,
  watchPathIgnorePatterns: ['node_modules'],
}
