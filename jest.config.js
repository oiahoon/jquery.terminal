module.exports = {
    testEnvironment: 'jsdom',
    verbose: true,
    modulePathIgnorePatterns: [
        "\\/\\.#"
    ],
    testPathIgnorePatterns: [
        "\\/\\.#",
        "/docs/",
        "/docusaurus/"
    ],
    roots: [
        '<rootDir>/__tests__/',
    ],
    testMatch: [
        "<rootDir>/__tests__/*.spec.js"
    ]
};
