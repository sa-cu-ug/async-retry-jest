module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	modulePathIgnorePatterns: [],
	moduleNameMapper: {
		'source-map-support/register': 'identity-obj-proxy',
	},
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'test-results',
	coverageProvider: 'babel',
	globals: {
		'ts-jest': {
			isolatedModules: true,
		},
	},
	testMatch: ['**/?(*.)+(spec|test).ts'],
	testPathIgnorePatterns: ['dist'],
};
